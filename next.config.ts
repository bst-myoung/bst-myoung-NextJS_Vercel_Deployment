import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bstinc.co.jp"
      }
    ]
  }
};

export default nextConfig;
