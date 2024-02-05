import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import config from '../config';
import Head from 'next/head';

export default function Posts({ allPostsData }: any) {
  return (
    <Layout>
      <Head>
        <title>{`📫 All Posts — ${config.MY_NAME}`}</title>
      </Head>
      <h1>📫 All Posts</h1>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul>
          {allPostsData.map(({ id, date, title }: any) => (
            <li key={id}>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              {' - '}
              <Link href={`/posts/${id}`}>{title}</Link>
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
