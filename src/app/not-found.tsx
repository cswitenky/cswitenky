import Layout, { Theme } from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';
import config from '../config/site.config';
import { Metadata } from 'next';
import styles from './not-found.module.scss';

export const metadata: Metadata = {
  title: `Page Not Found — ${config.MY_FULL_NAME}`,
};

export default function NotFound() {
  return (
    <Layout>
      <main>
        <section className={styles.notFound}>
          <Image
            priority
            src="/404.png"
            height={225}
            width={400}
            alt={'404'}
            className={styles.image}
          />
          <h1>Page Not Found</h1>
          <p>
            <Link href="/">Go Home</Link>
          </p>
        </section>
      </main>
    </Layout>
  );
}
