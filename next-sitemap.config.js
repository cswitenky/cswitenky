/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://switenky.com',
  generateRobotsTxt: true,
  outDir: './out',
  // ...other options
};
