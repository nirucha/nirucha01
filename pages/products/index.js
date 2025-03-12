import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Product.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();
  return { props: { products: data.products } };
}

export default function Index({ products }) {
  return (
    <>
      <Head>
        <title>สินค้าทั้งหมด | Nirucha</title>
      </Head>

      <div className={styles.containerStyle}>
        {products.map((item) => (
          <div key={item.id} className={styles.cardStyle}>
            <Link href={"/products/" + item.id}>
              <div
                style={{
                  textAlign: "center",
                  padding: "2px",
                }}>
                <Image
                  src={item.thumbnail}
                  width={120}
                  height={120}
                  alt={item.title}
                />
              </div>
              <h5 className={styles.titleStyle}>{item.title}</h5>
            </Link>
            <div className={styles.contentStyle}>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.priceStyle}>{item.price} บาท</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
