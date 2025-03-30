import Head from 'next/head';
import Layout, { Theme } from '../components/layout';
import Image from 'next/image';
import styles from './404.module.scss';
import Link from 'next/link';
import config from '../config';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Layout>
      <Head>
        <title>{`Page Not Found — ${config.MY_FULL_NAME}`}</title>
      </Head>
      <main>
        <section style={{ textAlign: 'center' }}>
          <Image
            className={styles.image}
            priority
            src="/404.png"
            height={225}
            width={400}
            alt={'404'}
            style={theme ? { filter: theme === Theme.Dark ? 'invert(1)' : 'none' } : undefined}
          />
          <h1>Page Not Found</h1>
          <p>
            <Link href="/">Go Home</Link>
          </p>
        </section>
      </main>
    </Layout>
  );
}
