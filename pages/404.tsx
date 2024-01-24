import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import styles from "./404.module.scss";
import Link from "next/link";

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
