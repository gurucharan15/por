/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ap-south-1.graphassets.com", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
