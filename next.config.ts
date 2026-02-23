import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // эта опция заменяет next export
  // Можно добавить basePath, если сайт не в корне домена GitHub Pages
  basePath: '/shovel', // только если пушишь в репозиторий как https://username.github.io/shovel/
};

export default nextConfig;
