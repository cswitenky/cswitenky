import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Connor. Welcome to my website built with{" "}
          {<a href="http://nextjs.org">Next.js</a>}. This website is under
          construction, so please excuse the mess while I work on it.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title }: any) => (
            <li key={id}>
              <span>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} /> -{" "}
                  <Link href={`/posts/${id}`}>{title}</Link>
                </small>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
