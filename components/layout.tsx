import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export const siteTitle = "Connor Switenky";

export default function Layout({ children, home }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Connor Switenky's personal website."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <section className={utilStyles.headingMd}>
          <>
            <a href="/">
              <Image
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
      <footer style={{ textAlign: "center" }}>
        <hr />
        <a href="/">https://switenky.com</a>
      </footer>
    </div>
  );
}
