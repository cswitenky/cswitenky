import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Script from "next/script";

export const siteTitle = "Connor Switenky";

export default function Layout({ children, home }: any) {
  return (
    <div className={styles.container}>
      <Script
        async
        src="https://analytics-switenky.azurewebsites.net/script.js"
        data-website-id="3a4064dd-61ec-4b29-a7b3-ab1a864c5406"
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Connor Switenky's personal website."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <section className={utilStyles.headingMd}>
          <>
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
              <Image
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                priority
                src="/images/cswitenky.jpg"
                className={utilStyles.borderCircle}
                height={home ? 180 : 144}
                width={home ? 180 : 144}
                alt={"Connor Switenky"}
              />
              <h1 className={utilStyles.heading2Xl}>Connor Switenky</h1>
            </a>
          </>
        </section>
      </header>
      <main>{children}</main>
      <footer style={{ textAlign: "center", marginTop: "30px" }}>
        <hr />
        <a href="/">https://switenky.com</a>
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
