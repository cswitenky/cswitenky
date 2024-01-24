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
        src="https://analytics-switenky.azurewebsites.net/script.js"
        data-website-id="25774fa5-eab7-435a-8fe3-3b8761f6a89f"
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
                alt={'Connor Switenky'}
              />
              <h1 className={utilStyles.heading2Xl}>{config.MY_NAME}</h1>
            </Link>
          </>
        </section>
      </header>
      <main>{children}</main>
      <footer style={{ textAlign: 'center', marginTop: '30px' }}>
        <hr />
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
