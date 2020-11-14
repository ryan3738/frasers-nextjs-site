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
    <div className={styles.container}>
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
      <header className={styles.header}>
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
                  // layout='fixed'
                  // unsized='true'
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main className={styles.main}>{children}</main>
      {!home && <Button buttonText='<== HOME' buttonLink='/'></Button>}
      <footer className={styles.footer}>
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
    </div>
  );
}
