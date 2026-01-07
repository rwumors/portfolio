/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/emojis/**',
      },
    ],
  },
  // Set basePath for GitHub Pages (repo name is 'portfolio')
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  trailingSlash: true,
};

module.exports = nextConfig;
