export interface ISiteConfig {
  MY_FULL_NAME: string;
  MY_FIRST_NAME: string;
  MY_LAST_NAME: string;
  MY_ALIAS: string;
  BASE_URL: string;
}

const config: ISiteConfig = {
  MY_FULL_NAME: 'Connor Switenky',
  MY_FIRST_NAME: 'Connor',
  MY_LAST_NAME: 'Switenky',
  MY_ALIAS: 'cswitenky',
  BASE_URL: process.env.SITE_URL || 'https://switenky.com',
};

export default config;
