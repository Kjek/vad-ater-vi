/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL ?? 'https://www.xn--vadtervi-2za.nu/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: ['/api/', '/admin'] },
      { userAgent: '*', allow: '/' },
    ],
  },
};

export default config;
