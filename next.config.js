/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  // Use the prefix for GitHub Pages only in production
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  // Enable static export
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}
module.exports = nextConfig 