/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: '/dubai-mainland',
        destination: '/mainland/dubai',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 