/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // Use the prefix for GitHub Pages only in production
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  // Enable static export
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure static files are handled correctly
  distDir: '.next',
  cleanDistDir: true,
  // Optimize static generation
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
}

module.exports = nextConfig 