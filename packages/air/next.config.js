const { composePlugins, withNx } = require('@nx/next')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'air-prod.imgix.net',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  reactStrictMode: true,
}

const plugins = [withNx]

module.exports = composePlugins(...plugins)(nextConfig)
