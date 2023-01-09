/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
