'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the static admin HTML file
    window.location.replace('/admin/index.html');
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: '1rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>Loading Content Manager...</h1>
      <p>Redirecting to admin interface...</p>
      <div style={{ 
        width: '2rem', 
        height: '2rem', 
        border: '2px solid #ccc', 
        borderTop: '2px solid #0070f3',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}