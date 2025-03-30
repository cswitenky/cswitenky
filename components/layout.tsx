import Head from 'next/head';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import config from '../config';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
  Auto = 'system',
}

const RssIcon = () => (
  <Link
    href="/rss.xml"
    aria-label="Go to RSS Feed"
    data-umami-event="RSS Feed Button"
    onClick={(e) => {
      if (window.location.pathname === '/rss.xml') {
        e.preventDefault();
      }
    }}
  >
    <Image
      style={{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10px',
      }}
      priority
      src="/rss.svg"
      height={16}
      width={16}
      alt="RSS Feed Icon"
    />
  </Link>
);

const PersonalAppsLink = () => (
  <Link
    href="https://myapplications.microsoft.com/?tenant=22e1f764-c1c7-4674-8540-f75bda2b6f14"
    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
    data-umami-event="Personal Apps Link"
    aria-label="Go to Personal Apps with Microsoft Entra Login"
  >
    Personal Apps (Microsoft Entra Login) 🔒
  </Link>
);


const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const nextTheme = () => {
    switch (theme) {
      case Theme.Auto:
        return Theme.Light;
      case Theme.Light:
        return Theme.Dark;
      case Theme.Dark:
        return Theme.Auto;
      default:
        return Theme.Light;
    }
  }

  return (
    <span>
      <button
        type="button"
        data-umami-event={`Toggled Theme to '${nextTheme()}'`}
        onClick={() => setTheme(nextTheme())}
        className={styles.themeButton}
        aria-label={`Change theme, current theme is ${theme}`}
      >
        {theme === Theme.Auto
          ? 'Auto ⚙️'
          : theme === Theme.Dark
          ? 'Dark 🌜'
          : 'Light 🌞'}
      </button>
    </span>
  );
}

export default function Layout({ children, home }: any) {
  return (
    <div className={styles.container} suppressHydrationWarning>
      <Script
        async
        src="https://cloud.umami.is/script.js"
        data-website-id="0dc1f4cd-e2c8-4aa3-99bb-1c640d99ef01"
      />
      <Head>
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`${config.MY_FULL_NAME}'s personal website.`}
        />
        <meta name="og:title" content={config.MY_FULL_NAME} />
      </Head>
      <div
        className={styles.toggleThemeButtonParent}
      >
        <div
          className={styles.toggleThemeButton}
        >
          <ThemeSwitch />
        </div>
      </div>
      <header className={styles.header} role="presentation" aria-hidden="true">
        <section className={utilStyles.headingMd}>
          <Link
            href="/"
            style={{ color: 'inherit', textDecoration: 'none' }}
            aria-label={`Go to ${config.MY_FIRST_NAME}'s home page`}
          >
            <Image
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              priority
              src="/images/cswitenky.jpg"
              className={utilStyles.borderCircle}
              height={home ? 180 : 144}
              width={home ? 180 : 144}
              alt={`Avatar of ${config.MY_FULL_NAME}`}
            />
            <h1 className={utilStyles.heading2Xl}>{config.MY_FULL_NAME}</h1>
          </Link>
        </section>
      </header>
      <main>
        <ThemeProvider>{children}</ThemeProvider>
      </main>
      <footer style={{ textAlign: 'center', marginTop: '30px' }}>
        <hr />
        <PersonalAppsLink />
        <hr />
        <br />
        <Link href="/" aria-label="Go to home page">
          {config.BASE_URL}
        </Link>
        <br />
        <RssIcon />
      </footer>
    </div>
  );
}
