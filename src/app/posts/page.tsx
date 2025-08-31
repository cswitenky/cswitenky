import Layout from '../../components/layout';
import styles from './page.module.scss';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import Date from '../../components/date';
import config from '../../config/site.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `📫 All Posts — ${config.MY_FULL_NAME}`,
};

export default function Posts() {
  const allPostsData = getSortedPostsData();

  return (
    <Layout>
      <h1>📫 All Posts</h1>
      <section
        className={`${styles.headingMd} ${styles.padding1px}`}
        aria-labelledby="all-posts-heading"
      >
        <h2 id="all-posts-heading" className="sr-only">
          List of all posts
        </h2>
        <ul>
          {allPostsData.map(({ id, date, title }: any) => (
            <li key={id}>
              <small className={styles.lightText}>
                <Date dateString={date} />
              </small>
              {' - '}
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
