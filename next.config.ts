import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // static export
  trailingSlash: true, // чтобы ссылки были корректны
  basePath: isProd ? '/shovel' : '', // обязательно для GH Pages
  assetPrefix: isProd ? '/shovel/' : '',
  images: {
    unoptimized: true, // чтобы next/image не ломался
  },
};

export default nextConfig;
