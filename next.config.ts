import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // static export
  trailingSlash: true, // чтобы ссылки были корректны
  basePath: '/shovel', // обязательно для GH Pages
  images: {
    unoptimized: true, // чтобы next/image не ломался
  },
};

export default nextConfig;
