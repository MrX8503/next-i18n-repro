/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-us', 'ja-jp', 'fr-FR'],
    defaultLocale: 'en-us',
  }
}

module.exports = nextConfig
