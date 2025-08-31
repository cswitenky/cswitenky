/** @type {import('next-sitemap').IConfig} */

// Import the config values directly to avoid TypeScript import issues
const BASE_URL = process.env.SITE_URL || 'https://switenky.com';

module.exports = {
  siteUrl: BASE_URL,
  generateRobotsTxt: true,
  outDir: './out',
  // ...other options
};
