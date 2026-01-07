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
  // If your repo name is not the root, uncomment and set basePath
  // basePath: '/your-repo-name',
  // trailingSlash: true,
};

module.exports = nextConfig;
