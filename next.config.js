/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_ROUTE_URL: process.env.API_ROUTE_URL,
    API_ROUTE_PUBLIC_KEY: process.env.API_ROUTE_PUBLIC_KEY,
  },
  disableExperimentalFeaturesWarning: true,
}

module.exports = nextConfig
