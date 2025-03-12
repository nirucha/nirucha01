import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Detail.module.css";

// ฟังก์ชันนี้จะเป็นการสร้าง paths สำหรับ dynamic routes (สำหรับแต่ละ id)
export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  const paths = data.products.map((item) => {
    return {
      params: { id: String(item.id) }, // id ของแต่ละสินค้า
    };
  });

  return {
    paths,
    fallback: false, // false เพื่อให้แสดง error 404 หากไม่พบ path
  };
}

// ฟังก์ชันนี้จะดึงข้อมูลของสินค้ารายตัวจาก id
export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();
  return { props: { product: data } };
}

export default function ProductDetail({ product }) {
  return (
    <div style={{ margin: "6rem 2rem" }}>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div>
        <Link href={"/products"} className={styles.button01}>
          Back
        </Link>
        <div className={styles.box}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={300}
            height={300}
          />
        </div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price} บาท</p>
      </div>
    </div>
  );
}
