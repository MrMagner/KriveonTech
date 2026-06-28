import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['hypnoses-straddle-emotion.ngrok-free.dev', 'localhost:3000'],
};

export default nextConfig;
