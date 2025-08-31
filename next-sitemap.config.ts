/** @type {import('next-sitemap').IConfig} */
import config from './src/config/site.config.js';

const nextSitemapConfig = {
  siteUrl: config.BASE_URL,
  generateRobotsTxt: true,
  outDir: './out',
  // ...other options
};

export default nextSitemapConfig;
