import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ["res.cloudinary.com", "dynamic-media-cdn.tripadvisor.com", "static.tacdn.com",  "media-cdn.tripadvisor.com" ],
  },
   eslint: {
    // ✅ Allows production builds to complete even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
