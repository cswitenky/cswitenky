import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import styles from "./404.module.scss";

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Oops!</title>
      </Head>
      <main>
        <section style={{ textAlign: "center" }}>
          <Image
            className={styles.image}
            priority
            src="/404.png"
            height={225}
            width={400}
            alt={"404"}
          ></Image>
          <h1>Page Not Found</h1>
          <p>
            <a href="/">Go Home</a>
          </p>
        </section>
      </main>
    </Layout>
  );
}
