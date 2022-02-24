import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';
import Header from './Header';
import { BusinessInfo } from '../.tina/__generated__/types';
import layoutData from '../content/global/index.json';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  businessInfo?: BusinessInfo;
  data?: any;
}

export const meta = {
  name: 'Frasers',
  title: 'Frasers Gourmet Hideaway',
  description:
    'Full service steak and seafood restaurant in Oak Harbor, Washington | Serving Pacific Northwest inspired dishes using fresh and local ingredients.',
  keywords: 'restaurant, steak, seafood, whidbey',
  cardImage: '/android-chrome-512x512.png',
  url: 'https://frasersgh.com',
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
  const router = useRouter();
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
          <meta property="og:url" content={meta.url + router.asPath} />
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
            --surface-color: rgba(27, 15, 15, 0.03);
            --background-color: var(--black-color);
            --primary-color: ${data.theme.color || `#c6a938`};
            --primary-color-desaturated: #f3e08d;
            /* Have option for internet explorer without f6*/
            /* 87% */
            --high-emphasis-text: var(--white-color);
            /* 60% */
            --medium-emphasis-text: #ffffff99;
            /* 38% */
            --text-disabled: #ffffff61;
            --color-facebook: #8d8d8d;
            --color-instagram: #fb3958;
            --small-screen: ${theme.smallScreen};
            --medium-screen: ${theme.mediumScreen};
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
      header {
        icon {
          name
          color
          style
        }
        color
        nav {
          href
          label
        }
      }
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
        icon
        font
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
