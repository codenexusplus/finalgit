import type { NextConfig } from "next";

const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

// Define your Next.js configuration with Webpack customization
const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Allow images from Sanity
  },
  webpack: (config) => {
    // Add the CaseSensitivePathsPlugin to Webpack
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
  /* Add other Next.js config options here */
};

export default nextConfig;
