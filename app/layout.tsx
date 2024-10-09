import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/global.css';
import { Layout } from './_components/layout';

export const meta = {
  url: new URL('https://frasersgh.com'),
  title: `Frasers Gourmet Hideaway`,
  description:
    'Full service steak and seafood restaurant in Oak Harbor, Washington | Serving Pacific Northwest inspired dishes using fresh and local ingredients.',
  keywords: 'restaurant, steak, seafood, whidbey',
  images: '/android-chrome-512x512.png'
} as const;

export const metadata: Metadata = {
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

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
