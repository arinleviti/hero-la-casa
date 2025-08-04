/* import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ["res.cloudinary.com", "dynamic-media-cdn.tripadvisor.com", "static.tacdn.com",  "media-cdn.tripadvisor.com" ],
  },
   eslint: {
    // ✅ Allows production builds to complete even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
};

export default nextConfig; */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dynamic-media-cdn.tripadvisor.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.tacdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media-cdn.tripadvisor.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    // ✅ Allows production builds to complete even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
