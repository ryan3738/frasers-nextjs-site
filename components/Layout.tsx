import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import Header from './Header';
import { BusinessInfo } from '../.tina/__generated__/types';
import layoutData from '../content/global/index.json';
import Footer from './Footer';
import chroma from 'chroma-js';

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  businessInfo?: BusinessInfo;
  data?: any;
}

export const meta = {
  title: 'Frasers Gourmet Hideaway',
  description:
    'Full service steak and seafood restaurant in Oak Harbor, Washington | Serving Pacific Northwest inspired dishes using fresh and local ingredients.',
  keywords: 'restaurant, steak, seafood, whidbey',
  cardImage: '/android-chrome-512x512.png',
};

const theme = {
  maxWidth: '1200px',
  smallScreen: '460px',
  mediumScreen: '769px',
  largeScreen: '1008px',
};

export default function Layout({
  data = layoutData,
  children,
}: LayoutProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const router = useRouter();
  const primaryColor = data?.theme?.color || 'teal';

  useEffect(() => {
    setUrl(window.location.origin);
  }, []);

  return (
    <>
      <Header navLinks={data.navigation} open={open} setOpen={setOpen} />
      <div className="container">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <title>{meta.title}</title> */}
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords} />
          {/* Social media information */}
          {/* Open Graph */}
          <meta property="og:url" content={url + router.asPath} />
          <meta property="og:type" content="restaurant" />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.cardImage} />
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="website" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.cardImage} />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest.json" />
        </Head>
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
        <main className="main">{children}</main>
        <Footer navLinks={data.navigation} />
        <style jsx>{`
          .container {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin: 0 auto;
          }
          .main {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
        `}</style>
        <style global jsx>{`
          :root {
            --white-color: #ffffffde;
            --black-color: #0b0a0a;
            --surface-color: rgba(255, 255, 255, 0.03);
            --background-color: var(--black-color);
            --primary-color: var(--primary-color-500);
            --primary-color-desaturated: var(--primary-color-200);
            --primary-color-50: ${chroma(primaryColor).brighten(3).hex()};
            --primary-color-100: ${chroma(primaryColor).brighten(2.25).hex()};
            --primary-color-200: ${chroma(primaryColor).brighten(1.5).hex()};
            --primary-color-300: ${chroma(primaryColor).brighten(0.75).hex()};
            --primary-color-400: ${chroma(primaryColor).hex()};
            --primary-color-500: ${chroma(primaryColor).darken(0.75).hex()};
            --primary-color-600: ${chroma(primaryColor).darken(1.5).hex()};
            --primary-color-700: ${chroma(primaryColor).darken(2.25).hex()};
            --primary-color-800: ${chroma(primaryColor).darken(3).hex()};
            --primary-color-900: ${chroma(primaryColor).darken(3.75).hex()};
            /* Have option for internet explorer without f6*/
            /* 87% */
            --high-emphasis-text: var(--white-color);
            /* 60% */
            --medium-emphasis-text: #ffffff99;
            /* 38% */
            --text-disabled: #ffffff61;
            --color-facebook: #3b5998;
            --color-instagram: #fb3958;
            --small-screen: ${theme.smallScreen};
            --medium-screen: ${theme.mediumScreen};
            --box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }
          .medium-emphasis {
            color: var(--medium-emphasis-text);
          }

          /* media queries */
          @media only screen and (min-width: ${theme.largeScreen}) {
            html,
            body {
              font-size: 112.5%;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export const layoutQueryFragment = `
  getGlobalDocument(relativePath: "index.json") {
    data {
      footer {
        color
        social {
          facebook
          twitter
          instagram
          github
        }
      }
      theme {
        color
        darkMode
      }
      navigation {
        label
        href
        header
        burger
        footer
      }
    }
  }
`;
