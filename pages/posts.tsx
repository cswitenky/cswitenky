import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Posts({ allPostsData }: any) {
  return (
    <Layout>
      <h1>📫 All Posts</h1>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {allPostsData.map(({ id, date, title }: any) => (
          <li key={id}>
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            {" - "}
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
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
