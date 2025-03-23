import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: process.env.BASE_PATH || '',
  // Important for GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
