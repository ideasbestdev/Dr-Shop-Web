/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["drshop-api.ideasadds-dev.com", "drshop-api.ideasdevs.net", "drshop-cdn.ideasdevs.net"],
    formats: ["image/avif", "image/webp"],
    },

}

module.exports = nextConfig