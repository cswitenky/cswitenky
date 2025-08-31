import '../styles/global.scss';
import { ThemeProvider } from 'next-themes';
import config from '../config/site.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: config.MY_FULL_NAME,
    template: `%s — ${config.MY_FULL_NAME}`,
  },
  description: `${config.MY_FULL_NAME}'s personal website.`,
  openGraph: {
    title: config.MY_FULL_NAME,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
