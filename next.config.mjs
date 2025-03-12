/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // บอก Next.js ว่าเราจะใช้ export
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/products/images/**",
      },
    ],
    unoptimized: true, // ใช้เฉพาะกรณีที่มีรูปภาพใน next/image
  },
};

export default nextConfig;
