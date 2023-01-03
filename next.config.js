const path = require('path');

const strapiPublicUrl = new URL(process.env.NEXT_PUBLIC_STRAPI_SSR_URL || '');
const strapiInternalUrl = new URL(process.env.NEXT_PUBLIC_STRAPI_URL || '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'components')],
  },
  images: {
    deviceSizes: [400, 768, 1000, 1400, 1920],
    loader: "default",
    domains: [strapiPublicUrl.hostname, strapiInternalUrl.hostname, 'localhost'],
  },
}

module.exports = nextConfig

