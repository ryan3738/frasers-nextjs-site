import Head from 'next/head';
import PropTypes from 'prop-types';
import Hero from './Hero';
import NavList from './NavList';

export const meta = {
    name: 'Frasers',
    title: 'Frasers Gourmet Hideaway | Oak Harbor | Pacific Northwest',
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


export default function Layout({ children, home, }) {
  return (
    <div className="container">
      <Head>
        {/* <html lang='en' /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>{meta.title}</title> */}
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        {/* Social media information */}
        {/* Open Graph */}
        <meta
          property="og:url"
          content={`https://bellingham3d.com${router.asPath}`}
        />
        <meta property="og:type" content="website" />
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YS529TE94E"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YS529TE94E');
            `,
          }}
        />
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
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <header className="header">
        {home ? (
          <>
            <div className="nav-spacer" />
            <Hero />
          </>
        ) : (
          <>
            <div className="nav-spacer" />
          </>
        )}
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <span>© 2020 Frasers Gourmet Hideaway |</span>
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
        <nav className="nav-list">
          <NavList />
        </nav>
      </footer>
      <style jsx>{`
        .container {
          /* effects max width of layout */
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          /* max-width: 100%; */
          /* min-width: 200px; */
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
          /* white-space: no-wrap; */
        }
        /* .light-text {
          color: var(--text-color);
        } */

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
  );
}
Layout.propTypes = {
  children: PropTypes.any,
  home: PropTypes.bool,
};
