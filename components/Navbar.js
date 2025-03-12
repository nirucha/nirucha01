import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import "@/styles/Navbar.module.css";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // state สำหรับการเปิด/ปิด dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle การเปิด/ปิด dropdown
  };
  return (
    <nav>
      <Link href={"/"} className="logo-link">
        <Image src="/Cat-Memes-27.jpg" width={50} height={50} alt="Cat Meme" />
      </Link>
      <Link href={"/"}>หน้าแรก</Link>
      <Link href={"/about"}>เกี่ยวกับเรา</Link>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>ตัวอย่างผลงาน</button>
        <div className={styles.dropdownContent}>
          <Link href={"/products"}>Ex.01 การดึงAPIแสดงข้อมูลสินค้า</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
