import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import NavList from './NavList';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { BusinessInfo } from '../.tina/__generated__/types';
import layoutData from '../content/global/index.json';

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

const navigationLinks = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Menu',
    href: '/menu',
  },
  {
    text: 'About',
    href: '/#about',
  },
  {
    text: 'Gallery',
    href: '/#gallery',
  },
  {
    text: 'Contact',
    href: '/#contact',
  },
];

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
  const [navLinks, setNavLinks] = useState({
    header: [],
    burger: [],
    footer: [],
  });
  const router = useRouter();
  useEffect(() => {
    if (data.navigation) {
      for (const link of data.navigation) {
        for (const key of Object.keys(navLinks)) {
          if (link[key as string] === true) {
            setNavLinks(navLinks => {
              return {
                ...navLinks,
                [key]: [...navLinks[key as string], link],
              };
            });
          }
        }
      }
    }
  }, []);
  return (
    <NavBar
      links={navLinks.header}
      burgerLinks={navLinks.burger}
      open={open}
      setOpen={setOpen}
    >
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
        <header className="header"></header>
        <div className="nav-spacer" />
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
        <footer className="footer">
          <nav className="nav-list">
            <NavList links={navLinks.footer} />
          </nav>
          <span>© 2022 Frasers Gourmet Hideaway |</span>
          <span className="no-wrap">
            &nbsp;Built by:&nbsp;
            <a
              className="light-text"
              href="https://github.com/ryan3738"
              target="_blank"
              rel="noreferrer noopener"
            >
              Ryan Fraser
            </a>
          </span>
        </footer>
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

          .header {
            width: 100%;
            /* display: flex; */
            /* flex-direction: column; */
            /* align-items: center; */
          }

          .footer {
            height: auto;
            width: 100%;
            background-color: var(--surface-color);
            padding: 1em;
          }

          .no-wrap {
            white-space: nowrap;
          }

          .nav-spacer {
            height: 4em;
          }

          .nav-padding {
            padding: 4em 0 0;
          }
          .nav-link {
            /* font-size: 0.5rem; */
            padding: 1em;
            margin: auto;
            text-decoration: underline;
            white-space: nowrap;
          }
          .nav-list {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
          }
        `}</style>

        <style global jsx>{`
          :root {
            --black-color: #0b0a0a;
            --background-color: var(--black-color);
            --surface-color: rgba(255, 255, 255, 0.03);
            --primary-color: #c6a938;
            --primary-color-desaturated: #f3e08d;
            /* Have option for internet explorer without f6*/
            --secondary-color: #1a1a1a;
            --white-color: #ffffffde;
            --text-color: var(--white-color);
            /* 87% */
            --high-emphasis-text: #ffffffde;
            /* 60% */
            --medium-emphasis-text: #ffffff99;
            /* 38% */
            --text-disabled: #ffffff61;
            --color-facebook: #3b5998;
            --color-instagram: #fb3958;
            --small-screen: 460px;
            --medium-screen: 769px;
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
    </NavBar>
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
    }
  }
`;
