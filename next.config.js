/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  // Use the prefix for GitHub Pages
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  // Enable static export
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}
module.exports = nextConfig 