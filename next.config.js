/** @type {import('next').NextConfig} */

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  reactStrictMode: true,
}

module.exports = nextConfig
