import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Hero from '../components/hero';
import Image from 'next/image';
import Navigation from '../components/navigation';

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
            <div className='link'></div>
            <Link href='/'>
              <a>
                <Image
                  className='link'
                  src='/images/frasers-logo.gif'
                  alt='frasers logo'
                  // unsized={true}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main className={styles.main}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← BACK TO HOME</a>
          </Link>
        </div>
      )}
      <footer className={styles.footer}>
        <span>© 2020 Frasers Gourmet Hideaway |</span>
        <span className={utilStyles.noWrap}>
          &nbsp;Built by:&nbsp;
          <a
            className={utilStyles.lightText}
            href='https://github.com/ryan3738'
            target='_blank'
            rel='noreferrer noopener'
          >
            Ryan Fraser
          </a>
        </span>
      </footer>
      <style jsx>
        {`
          .link {
            height: 5em;
          }
        `}
      </style>
    </div>
  );
}
