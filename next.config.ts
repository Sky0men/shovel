import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: undefined, // обычный SSR
  images: { unoptimized: true },
};

export default nextConfig;
