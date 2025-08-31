import Layout, { Theme } from '../components/layout';
import Image from 'next/image';
import styles from '../../pages-backup/404.module.scss';
import Link from 'next/link';
import config from '../config/site.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Page Not Found — ${config.MY_FULL_NAME}`,
};

export default function NotFound() {
  return (
    <Layout>
      <main>
        <section style={{ textAlign: 'center' }}>
          <Image
            priority
            src="/404.png"
            height={225}
            width={400}
            alt={'404'}
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
