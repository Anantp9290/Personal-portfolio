import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.w3schools.com'], // Add the domain of your external image here
  },
  // env: {
  //   API_URL: process.env.API_URL,
  // },
  // reactStrictMode: true,
};

export default nextConfig;
