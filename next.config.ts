import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Allow images from the Laravel API if it serves image URLs
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
