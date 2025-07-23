import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="main_page">
      <header className="page_header">
        <h1>
          <a href="/">Connor Switenky</a>
        </h1>
      </header>
      <a href="/components">Components</a>
      <section className="content_section">
        <main>{children}</main>
      </section>
      <footer className="footer">
        <div>
          <span>
            © {new Date().getFullYear()} Connor Switenky. All rights reserved.
          </span>
        </div>
        <div>
          <a
            href="mailto:support@mail.switenky.com"
            aria-label="Contact Support"
            style={{ marginRight: '1rem' }}
          >
            Contact
          </a>
          <a
            href="https://github.com/cswitenky"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
