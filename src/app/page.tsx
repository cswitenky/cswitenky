import Layout from '../components/layout';
import styles from './page.module.scss';
import { getSortedPostsData } from '../lib/posts';
import { getHomePageData } from '../lib/pages';
import Link from 'next/link';
import Date from '../components/date';
import config from '../config/site.config';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await getHomePageData();
  
  return {
    title: config.MY_FULL_NAME,
    description: homeData.description,
  };
}

export default async function Home() {
  const allPostsData = getSortedPostsData();
  const homeData = await getHomePageData();

  return (
    <Layout home>
      <section className={styles.headingMd}>
        <p>Hello, I'm {config.MY_FIRST_NAME}. 👋</p>
        <div dangerouslySetInnerHTML={{ __html: homeData.contentHtml }} />
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>📫 Recent Posts</h2>
        <ul>
          {allPostsData.slice(0, 5).map(({ id, date, title }: any) => (
            <li key={id}>
              <small className={styles.lightText}>
                <Date dateString={date} />
              </small>
              {' - '}
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <p>
          See <Link href="/posts">all posts</Link>.
        </p>
      </section>
    </Layout>
  );
}
