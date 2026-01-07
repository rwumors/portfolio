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
  // Custom domain - no basePath needed
  trailingSlash: true,
};

module.exports = nextConfig;
