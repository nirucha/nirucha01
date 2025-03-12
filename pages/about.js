import styles from "@/styles/About.module.css";
import Image from "next/image";
import Head from "next/head";
export default function AboutPage() {
  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา | Nirucha</title>
      </Head>
      <div className={styles.container}>
        <h1>เกี่ยวกับเรา</h1>
        <Image src="/about-image.jpg" width={800} height={400} />
      </div>
    </>
  );
}
