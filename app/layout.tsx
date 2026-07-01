import Script from 'next/script';
import '@/styles/global.css';
import { Open_Sans } from 'next/font/google';
import { Layout } from './_components/layout';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { rootMetadata } from '@/lib/seo';

export const metadata = rootMetadata();

const fontSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-y-scroll" suppressHydrationWarning>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YS529TE94E"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YS529TE94E');
          `}
      </Script>
      <body
        className={cn(
          'relative font-sans antialiased bg-star-pattern',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
