/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.jennexplores.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
