import Layout from '../../components/layout';
import { getAdjacentPosts, getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';
import config from '../../config';

export default function Post({ postData, adjacentPosts }: any) {
  const previousPost = adjacentPosts[0];
  const nextPost = adjacentPosts[1];

  return (
    <Layout>
      <Head>
        <title>{`${postData.title} — ${config.MY_NAME}`}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <th style={{ textAlign: 'left', width: '40%' }}>
              {previousPost && (
                <Link href={`/posts/${previousPost.id}`}>
                  ← Previous
                  <br />
                  {previousPost.title}
                </Link>
              )}
            </th>
            <th>
              <Link href="/posts">📫 All Posts</Link>
            </th>
            <th style={{ textAlign: 'right', width: '40%' }}>
              {nextPost && (
                <Link href={`/posts/${nextPost.id}`}>
                  Next →
                  <br />
                  {nextPost.title}
                </Link>
              )}
            </th>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  const adjacentPosts = getAdjacentPosts(params.id);
  return {
    props: {
      postData,
      adjacentPosts,
    },
  };
}
