/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-us', 'ja-jp', 'fr-FR', 'nl-nl', 'es-mx', 'zh-cn'],
    defaultLocale: 'en-us',
  },
  redirects() {
    return [
      {
        source: '/nl-NL',
        destination: '/nl-nl',
        locale: false,
        permanent: true
      },
      {
        source: '/es-MX',
        destination: '/es-mx',
        permanent: true
      }
    ];
  }
}

module.exports = nextConfig
