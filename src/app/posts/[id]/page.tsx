import Layout from '../../../components/layout';
import { getAdjacentPosts, getAllPostIds, getPostData } from '../../../lib/posts';
import Date from '../../../components/date';
import styles from './page.module.scss';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path: any) => ({
    id: path.params.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const postData = await getPostData(id);
  return {
    title: postData.title,
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const postData = await getPostData(id);
  const adjacentPosts = getAdjacentPosts(id);
  const previousPost = adjacentPosts[0];
  const nextPost = adjacentPosts[1];

  return (
    <Layout>
      <article>
        <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={styles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
      </article>
      <table className={styles.postNavigation} aria-label="Post navigation">
        <tbody>
          <tr>
            <th>
              {previousPost && (
                <Link href={`/posts/${previousPost.id}`} aria-label={`Previous post: ${previousPost.title}`}>
                  ← Previous
                  <br />
                  <span aria-hidden="true">{previousPost.title}</span>
                </Link>
              )}
            </th>
            <th>
              <Link href="/posts" aria-label="Go to all posts">
                📫 All Posts
              </Link>
            </th>
            <th>
              {nextPost && (
                <Link href={`/posts/${nextPost.id}`} aria-label={`Next post: ${nextPost.title}`}>
                  Next →
                  <br />
                  <span aria-hidden="true">{nextPost.title}</span>
                </Link>
              )}
            </th>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}
