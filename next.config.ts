import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/shovel',
  assetPrefix: '/shovel/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
