import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import config from '../config/site.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: config.MY_FULL_NAME,
};

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm {config.MY_FIRST_NAME}. 👋</p>
        <p>
          I'm a software engineer who loves solving everyday problems with tech. 
          Espeically coming up with creative and efficient solutions to make life 
          a little easier.
        </p>
        <p>
          Feel free to check out my blog posts, where I share my thoughts and experiences 
          on various topics related to software development, technology, and life 
          in general.
        </p>
        <p>
        Thanks for stopping by my little corner of the internet!
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
