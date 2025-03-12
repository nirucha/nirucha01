import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>
        <Image src="/Cat-Memes-27.jpg" width={50} height={50} alt="Cat Meme" />
      </Link>
      <Link href={"/"}>หน้าแรก</Link>
      <Link href={"/about"}>เกี่ยวกับเรา</Link>
      <Link href={"/products"}>สินค้า</Link>
    </nav>
  );
};
export default Navbar;
