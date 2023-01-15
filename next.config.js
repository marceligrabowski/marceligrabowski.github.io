/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about-me',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
