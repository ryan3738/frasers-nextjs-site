import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import MenuSection from '../components/mention-section';
import Image from 'next/image';
import Navigation from '../components/navigation';
import Hero from '../components/hero';
import Double from '../components/double';
import GalleryGrid from '../components/gallery-grid';
import Contact from '../components/contact';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // const menuData = await menu.json();
  // const menu = await import('../public/data/menu.json');
  // const menu = await import('../public/data/menu.json');
  return {
    props: {
      allPostsData,
      // menu,??
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <Navigation /> */}
      <section id='about' className='about-container'>
        <h2 className='about-header'>ABOUT</h2>
        <Double></Double>
      </section>
      <section id='menu' className='menu-container'>
        {/* <img src='/images/wild-boar-ragout.jpg' alt='wild boar' /> */}
        <h2>MENU</h2>
        <MenuSection category='Starters' />
        <MenuSection category='Entrees' />
      </section>
      <section>
        <GalleryGrid></GalleryGrid>
      </section>
      <section id='contact'>
        <Contact></Contact>
      </section>
      {/* <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Ryan. I'm a web developer. You can contact me on{' '}
          <a href='https://twitter.com/ryan3738'>Twitter</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      <style jsx>{`
          .about-container {
            display: grid;
            justify-content: center;
            align-content: center;
            grid-template-columns: 0.25em repeat(10, minmax(10px, 108px)) 0.25em;
            grid-row: repeat(8, minmax(200px, 500px));
            /* background-color: var(--color-darker); */
            grid-template-areas:
              'h h h h h h h h h h h h'
              '. p1 p1 p1 p1 p1 p1 p1 p1 p1 p1 .'
              '. t1 t1 t1 t1 t1 t1 t1 t1 t1 t1 .'
              '. p2 p2 p2 p2 p2 p2 p2 p2 p2 p2 .'
              '. t2 t2 t2 t2 t2 t2 t2 t2 t2 t2 .'
              '. p3 p3 p3 p3 p3 p3 p3 p3 p3 p3 .'
              '. t3 t3 t3 t3 t3 t3 t3 t3 t3 t3 .'
              '. p4 p4 p4 p4 p4 p4 p4 p4 p4 p4 .'
              '. t4 t4 t4 t4 t4 t4 t4 t4 t4 t4 .';
          }

          .about-header {
            grid-area: h;
            padding: 3rem 0 0;
          }
          @media (min-width: 460px) {
            .about-container {
              grid-template-areas:
                'h h h h h h h h h h h h'
                '. p1 p1 p1 p1 p1 t1 t1 t1 t1 t1 .'
                '. t2 t2 t2 t2 t2 p2 p2 p2 p2 p2 .'
                '. p3 p3 p3 p3 p3 t3 t3 t3 t3 t3 .'
                '. t4 t4 t4 t4 t4 p4 p4 p4 p4 p4 .';
            }
          }
        `}</style>
    </Layout>
  );
}
