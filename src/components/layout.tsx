'use client'

import styles from './layout.module.scss';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import config from '../config/site.config';
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
        <section className={styles.headingMd}>
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
              className={styles.borderCircle}
              height={home ? 180 : 144}
              width={home ? 180 : 144}
              alt={`Avatar of ${config.MY_FULL_NAME}`}
            />
            <h1 className={styles.heading2Xl}>{config.MY_FULL_NAME}</h1>
          </Link>
        </section>
      </header>
      <main>
        <ThemeProvider>{children}</ThemeProvider>
      </main>
      <footer style={{ textAlign: 'center', marginTop: '30px' }}>
        <hr />
        <Link href="/" aria-label="Go to home page">
          {config.BASE_URL}
        </Link>
        <br />
        <RssIcon />
      </footer>
    </div>
  );
}
