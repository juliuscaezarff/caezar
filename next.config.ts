import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t3.gstatic.com",
        port: "",
        pathname: "/faviconV2",
      },
    ],
  },
};

export default nextConfig;
