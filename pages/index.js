import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import MenuSection from '../components/menu-section';
import Double from '../components/double';
import GalleryGrid from '../components/gallery-grid';
import Contact from '../components/contact';
import Button from '../components/button'

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   // const menuData = await menu.json();
//   // const menu = await import('../public/data/menu.json');
//   // const menu = await import('../public/data/menu.json');
//   return {
//     props: {
//       allPostsData,
//       // menu,??
//     },
//   };
// }

export default function Home({ allPostsData, open, setOpen }) {
  return (
    <Layout home open={open} setOpen={setOpen}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section id='about' className='about-container'>
        <h1 className='about-header hidden-header'>ABOUT</h1>
        <Double />
      </section>
      <section id='menu' className='menu-container'>
        <h1 className='hidden-header'>MENU</h1>
        <MenuSection category='Starters' />
        <MenuSection category='Entrees' />
        <Button buttonText='SEE FULL MENU ==>' buttonLink='/menu' />
      </section>
      <section>
        <GalleryGrid />
      </section>
      <section id='contact'>
        <div className='contact-header'>
          <h1 className={utilStyles.lightText}>CONTACT US</h1>
        </div>
        <Contact></Contact>
      </section>
      <style jsx>{`
        .hidden-header {
          visibility: hidden;
        }
        .about-container {
          width: 100vw;
          max-width: 1200px;
          place-self: center;
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
        .menu-container {
          width: 100vw;
          max-width: 1200px;
          place-self: center;
        }
        .contact-header {
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
