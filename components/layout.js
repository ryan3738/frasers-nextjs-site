import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Hero from '../components/hero';
import Image from 'next/image';
import Navigation from '../components/navigation';
import Button from '../components/button';

const name = 'Frasers';
export const siteTitle =
  'Frasers Gourmet Hideaway | Oak Harbor | Pacific Northwest';

export default function Layout({ children, home, open, setOpen }) {
  return (
    <div className='container'>
      <Head>
        <html lang='en' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Full service steak and seafood restaurant in Oak Harbor, Washington | Serving Pacific Northwest inspired dishes using fresh and local ingredients.'
        />
        <meta
          name='keywords'
          content='gourmet, best, northwest, restaurant, steak, seafood, pasta, dessert, fine, dining, dinner, happy, hour, cocktail, wine, beer, oak, harbor, whidbey, island, washington, wa, dine in, dine-in, takeout, table, service,'
        />
        {/* <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' /> */}
      </Head>
      <header className='header'>
        {home ? (
          <>
            <Navigation open={open} setOpen={setOpen} />
            <Hero />
          </>
        ) : (
          <>
            <div className='nav-spacer'></div>
            <Link href='/'>
              <a>
                <img
                  className='link'
                  src='/images/frasers-logo.gif'
                  alt='frasers logo'
                  height='104'
                  width='228'
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main className='main'>{children}</main>
      {!home && <Button buttonText='<== HOME' buttonLink='/'></Button>}
      <footer className='footer'>
        <span>© 2020 Frasers Gourmet Hideaway |</span>
        <span className='no-wrap'>
          &nbsp;Built by:&nbsp;
          <a
            className='light-text'
            href='https://github.com/ryan3738'
            target='_blank'
            rel='noreferrer noopener'
          >
            Ryan Fraser
          </a>
        </span>
        <nav className='nav-list'>
          <Link href='/'>
            <a className='nav-link'>HOME</a>
          </Link>
          <Link href='/#about'>
            <a className='nav-link'>ABOUT</a>
          </Link>
          <Link href='/#menu'>
            <a className='nav-link'>MENU</a>
          </Link>
          <Link href='/#contact'>
            <a className='nav-link'>CONTACT</a>
          </Link>
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
          width: 100vw;
        }

        .header {
          width: 100%;
          /* display: flex; */
          /* flex-direction: column; */
          /* align-items: center; */
        }

        .footer {
          height: auto;
          width: 100vw;
          background-color: var(--color-darker);
          padding: 1em;
          /* white-space: no-wrap; */
        }
        .light-text {
          color: var(--color-white);
        }

        .no-wrap {
          white-space: nowrap;
        }

        .nav-spacer {
          height: 5em;
        }
        .nav-link {
          /* font-size: 0.5rem; */
          padding: 1em;
          margin: auto;
          text-decoration: underline;
          white-space: nowrap;
        }
        .nav-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
          grid-template-rows: 4em;
          justify-items: center;
          padding: 0% 2%;
          background: var(--color-darker);
          position: sticky;
          top: 0;
        }
      `}</style>

      <style global jsx>{`
        :root {
          --color-black: black;
          /* Have option for internet explorer without f6*/
          --color-darker: #1a1a1a;
          --color-darker: #1a1a1af6;
          --color-dark: #38290b;
          --color-main: #daa53c;
          --color-light: #d4ba98;
          --color-white: #fffefd;
          --color-facebook: #3b5998;
          --color-instagram: #fb3958;
          --screen-small: 460px;
        }

        html {
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
        body {
          padding: 0;
          margin: 0;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          color: var(--color-main);
          background-color: var(--color-black);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          /* text-justify: center; */
          font-size: 100%;
          line-height: 1.5rem;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        main,
        menu,
        nav,
        section,
        summary {
          display: block;
        }
        audio,
        canvas,
        progress,
        video {
          display: inline-block;
        }
        audio:not([controls]) {
          display: none;
          height: 0;
        }
        progress {
          vertical-align: baseline;
        }
        [hidden],
        template {
          display: none;
        }
        a {
          text-decoration: none;
          color: var(--color-main);
          min-height: 48px;
        }
        a {
          background-color: transparent;
          -webkit-text-decoration-skip: objects;
        }
        a:active,
        a:hover {
          outline-width: 0;
        }
        abbr[title] {
          border-bottom: none;
          text-decoration: underline;
          text-decoration: underline dotted;
        }
        b,
        strong {
          font-weight: inherit;
          font-weight: bolder;
        }
        dfn {
          font-style: italic;
        }
        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }
        mark {
          background-color: #ff0;
          color: #000;
        }
        small {
          font-size: 80%;
        }
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        sub {
          bottom: -0.25em;
        }
        sup {
          top: -0.5em;
        }
        img {
          border-style: none;
        }
        svg:not(:root) {
          overflow: hidden;
        }
        code,
        kbd,
        pre,
        samp {
          font-family: monospace, monospace;
          font-size: 1em;
        }
        figure {
          margin: 1em 40px;
        }
        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          font: inherit;
          margin: 0;
        }
        optgroup {
          font-weight: 700;
        }
        button,
        input {
          overflow: visible;
        }
        button,
        select {
          text-transform: none;
        }
        [type='reset'],
        [type='submit'],
        button,
        html [type='button'] {
          -webkit-appearance: button;
        }
        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner,
        button::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }
        [type='button']:-moz-focusring,
        [type='reset']:-moz-focusring,
        [type='submit']:-moz-focusring,
        button:-moz-focusring {
          outline: 1px dotted ButtonText;
        }

        fieldset {
          border: 1px solid silver;
          margin: 0 2px;
          padding: 0.35em 0.625em 0.75em;
        }
        legend {
          box-sizing: border-box;
          color: inherit;
          display: table;
          max-width: 100%;
          padding: 0;
          white-space: normal;
        }
        textarea {
          overflow: auto;
        }
        [type='checkbox'],
        [type='radio'] {
          box-sizing: border-box;
          padding: 0;
        }
        [type='number']::-webkit-inner-spin-button,
        [type='number']::-webkit-outer-spin-button {
          height: auto;
        }
        [type='search'] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }
        [type='search']::-webkit-search-cancel-button,
        [type='search']::-webkit-search-decoration {
          -webkit-appearance: none;
        }
        ::-webkit-input-placeholder {
          color: inherit;
          opacity: 0.54;
        }
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }
        html {
          font: 112.5%/1.45em georgia, serif;
          box-sizing: border-box;
          overflow-y: scroll;
        }
        * {
          box-sizing: inherit;
        }
        *:before {
          box-sizing: inherit;
        }
        *:after {
          box-sizing: inherit;
        }
        body {
          /* color: hsla(0, 0%, 0%, 0.8); */
          color: var(--color-main);
          background: var(--color-black);
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          /* font-family: georgia, serif; */
          font-weight: normal;
          word-wrap: break-word;
          font-kerning: normal;
          -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
          -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
          -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
          font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        }
        img {
          max-width: 100%;
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          text-transform: uppercase;
        }

        h1 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          color: inherit;
          /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-size: 2.25rem;
          line-height: 1.1;
        }
        h2 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          color: inherit;
          /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-size: 1.62671rem;
          line-height: 1.1;
        }
        h3 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          color: inherit;
          /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-size: 1.38316rem;
          line-height: 1.1;
        }
        h4 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          color: inherit;
          /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-size: 1rem;
          line-height: 1.1;
        }
        h5 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          color: inherit;
          /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-size: 0.85028rem;
          line-height: 1.1;
        }
        h6 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          color: inherit;
          /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-size: 0.78405rem;
          line-height: 1.1;
        }
        hgroup {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        ul {
          margin-left: 1.45rem;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          list-style-position: outside;
          list-style-image: none;
        }
        ol {
          margin-left: 1.45rem;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          list-style-position: outside;
          list-style-image: none;
        }
        dl {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        dd {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        p {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        figure {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        pre {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          margin-bottom: 1.45rem;
          font-size: 0.85rem;
          line-height: 1.42;
          background: hsla(0, 0%, 0%, 0.04);
          border-radius: 3px;
          overflow: auto;
          word-wrap: normal;
          padding: 1.45rem;
        }
        table {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          font-size: 1rem;
          line-height: 1.45rem;
          border-collapse: collapse;
          width: 100%;
        }
        fieldset {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        blockquote {
          margin-left: 1.45rem;
          margin-right: 1.45rem;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        form {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        noscript {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        iframe {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        hr {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: calc(1.45rem - 1px);
          background: hsla(0, 0%, 0%, 0.2);
          border: none;
          height: 1px;
        }
        address {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        b {
          font-weight: bold;
        }
        strong {
          font-weight: bold;
        }
        dt {
          font-weight: bold;
        }
        th {
          font-weight: bold;
        }
        li {
          margin-bottom: calc(1.45rem / 2);
        }
        ol li {
          padding-left: 0;
        }
        ul li {
          padding-left: 0;
        }
        li > ol {
          margin-left: 1.45rem;
          margin-bottom: calc(1.45rem / 2);
          margin-top: calc(1.45rem / 2);
        }
        li > ul {
          margin-left: 1.45rem;
          margin-bottom: calc(1.45rem / 2);
          margin-top: calc(1.45rem / 2);
        }
        blockquote *:last-child {
          margin-bottom: 0;
        }
        li *:last-child {
          margin-bottom: 0;
        }
        p *:last-child {
          margin-bottom: 0;
        }
        li > p {
          margin-bottom: calc(1.45rem / 2);
        }
        code {
          font-size: 0.85rem;
          line-height: 1.45rem;
        }
        kbd {
          font-size: 0.85rem;
          line-height: 1.45rem;
        }
        samp {
          font-size: 0.85rem;
          line-height: 1.45rem;
        }
        abbr {
          border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
          cursor: help;
        }
        acronym {
          border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
          cursor: help;
        }
        abbr[title] {
          border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
          cursor: help;
          text-decoration: none;
        }
        thead {
          text-align: left;
        }
        td,
        th {
          text-align: left;
          border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
          font-feature-settings: 'tnum';
          -moz-font-feature-settings: 'tnum';
          -ms-font-feature-settings: 'tnum';
          -webkit-font-feature-settings: 'tnum';
          padding-left: 0.96667rem;
          padding-right: 0.96667rem;
          padding-top: 0.725rem;
          padding-bottom: calc(0.725rem - 1px);
        }
        th:first-child,
        td:first-child {
          padding-left: 0;
        }
        th:last-child,
        td:last-child {
          padding-right: 0;
        }
        tt,
        code {
          background-color: hsla(0, 0%, 0%, 0.04);
          border-radius: 3px;
          font-family: 'SFMono-Regular', Consolas, 'Roboto Mono',
            'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace;
          padding: 0;
          padding-top: 0.2em;
          padding-bottom: 0.2em;
        }
        pre code {
          background: none;
          line-height: 1.42;
        }
        code:before,
        code:after,
        tt:before,
        tt:after {
          letter-spacing: -0.2em;
          content: ' ';
        }
        pre code:before,
        pre code:after,
        pre tt:before,
        pre tt:after {
          content: '';
        }

        /* media queries */
        @media only screen and (max-width: 480px) {
          html {
            font-size: 100%;
          }
        }
      `}</style>
    </div>
  );
}
