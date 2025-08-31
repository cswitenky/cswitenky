'use client';

import { useEffect } from 'react';
import styles from './page.module.scss';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the static admin HTML file
    window.location.replace('/admin/index.html');
  }, []);

  return (
    <div className={styles.adminLoading}>
      <h1>Loading Content Manager...</h1>
      <p>Redirecting to admin interface...</p>
      <div className={styles.spinner}></div>
    </div>
  );
}