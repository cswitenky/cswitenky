import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import config from '../config';

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{config.MY_NAME}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Connor. Welcome to my little corner of the internet!</p>
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
          See all posts <Link href="/posts">here</Link>.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>🔗 Connect with me</h2>
        <div style={{ textAlign: 'center' }}>
          <a href="https://github.com/cswitenky" style={{ margin: '0px 10px' }}>
            🐙 GitHub
          </a>
          <a
            href="https://www.thingiverse.com/cswitenky"
            style={{ margin: '0px 10px' }}
          >
            🚀 Thingiverse
          </a>
          <a
            href="https://www.youtube.com/c/switenky"
            style={{ margin: '0px 10px' }}
          >
            🎥 YouTube
          </a>
          {/* <a href="https://github.com/sponsors/cswitenky?frequency=one-time">
            ❤️ Sponsor me
          </a> */}
        </div>
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
