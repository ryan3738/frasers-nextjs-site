import { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/global.css';
import { Inter as FontSans } from 'next/font/google';
import { Layout } from './_components/layout';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

export const meta = {
  url: new URL('https://frasersgh.com'),
  title: `Frasers Gourmet Hideaway`,
  description:
    'Full service steak and seafood restaurant in Oak Harbor, Washington | Serving Pacific Northwest inspired dishes using fresh and local ingredients.',
  keywords: 'restaurant, steak, seafood, whidbey',
  images: '/android-chrome-512x512.png'
} as const;

export const metadata = {
  title: {
    template: `%s | ${meta.title}`,
    default: meta.title
  },
  description: meta.description,
  keywords: meta.keywords,
  category: 'restaurant',
  authors: [{ name: 'Ryan Fraser', url: 'https://ryanfraser.dev' }],
  creator: 'Ryan Fraser',
  metadataBase: meta.url,
  alternates: {
    canonical: meta.url
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: meta.title,
    images: [{ url: meta.url + meta.images }],
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    site: 'website',
    images: meta.url + meta.images
  },
  manifest: `${meta.url}/site.webmanifest.json`,
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
} satisfies Metadata;

const fontSans = FontSans({
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
          'relative min-h-[calc(100vh-180px)] w-full bg-background font-sans antialiased',
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
