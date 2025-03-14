import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "wiki.tripwireinteractive.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "encrypted-tbn0.gstatic.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
