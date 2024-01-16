import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

const name = "Connor Switenky";

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Connor. Welcome to my little corner of the internet! 
        </p>
        <p>
          Be warned that this website is under construction, so please excuse the mess while I work on it.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>📫 Recent Posts</h2>
        <ul>
          {allPostsData.slice(0, 5).map(({ id, date, title }: any) => (
            <li key={id}>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              {" - "}
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <p>
          See all posts <a href="/posts">here</a>.
        </p>
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
