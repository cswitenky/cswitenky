import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export default function NotFound() {
  return (
    <Layout home>
      <Head>
        <title>Oops!</title>
      </Head>
      <main>
        <h1>Oops!</h1>
        <h2>404 - Page Not Found</h2>
        <p>
          <a href="/">Go Home</a>
        </p>
      </main>
    </Layout>
  );
}

