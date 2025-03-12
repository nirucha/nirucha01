import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าแรก | Nirucha</title>
      </Head>
      <div className={styles.container}>
        <h1>หน้าแรก</h1>
        <Image src="/under_construction7.jpg" width={800} height={400} />
        <p>ยินดีต้อนรับสู่ Next.js!</p>
      </div>
    </>
  );
}
