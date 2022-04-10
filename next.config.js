/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
  // your other plugins here
  [withBundleAnalyzer],
  {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
  },
])
