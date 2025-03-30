import Head from 'next/head';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import config from '../config';

export default function Layout({ children, home }: any) {
  return (
    <div className={styles.container}>
      <Script
        async
        src="https://cloud.umami.is/script.js"
        data-website-id="0dc1f4cd-e2c8-4aa3-99bb-1c640d99ef01"
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`${config.MY_NAME}'s personal website.`}
        />
        <meta name="og:title" content={config.MY_NAME} />
      </Head>
      <header className={styles.header}>
        <section className={utilStyles.headingMd}>
          <>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
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
                alt={'Avatar of Connor Switenky'}
              />
              <h1 className={utilStyles.heading2Xl}>{config.MY_NAME}</h1>
            </Link>
          </>
        </section>
      </header>
      <main>{children}</main>
      <footer style={{ textAlign: 'center', marginTop: '30px' }}>
        <hr />
        <Link 
          href="https://myapplications.microsoft.com/?tenant=22e1f764-c1c7-4674-8540-f75bda2b6f14"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Personal Apps (Microsoft Entra Login) 🔒
        </Link>
        <br />
        <Link href="/">{config.BASE_URL}</Link>

        {/* TODO: Add RSS feed */}
        {/* <a href="/rss">
          <Image
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "10px",
            }}
            priority
            src="/rss.svg"
            height={16}
            width={16}
            alt={"rss"}
          />
        </a> */}
      </footer>
    </div>
  );
}
