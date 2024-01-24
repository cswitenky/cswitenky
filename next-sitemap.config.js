/** @type {import('next-sitemap').IConfig} */
const config = require('./config');

module.exports = {
  siteUrl: config.BASE_URL,
  generateRobotsTxt: true,
  outDir: './out',
  // ...other options
};
