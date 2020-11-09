import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import MenuSection from '../components/menu-section';
import Double from '../components/double';
import GalleryGrid from '../components/gallery-grid';
import Contact from '../components/contact';
import Button from '../components/button';

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
      <section id='about' className='container'>
        <h1 className='header hidden-header'>ABOUT</h1>
        <Double />
        <Button buttonText='LEARN MORE ABOUT FRASERS' buttonLink='/about' />
      </section>
      <section id='menu' className='container'>
        <h1 className='header hidden-header'>MENU</h1>
        <MenuSection category='Starters' />
        <MenuSection category='Entrees' />
        <Button buttonText='SEE FULL MENU ==>' buttonLink='/menu' />
      </section>
      <section>
        <GalleryGrid />
      </section>
      <section id='contact'>
        <div className='header'>
          <h1 className={utilStyles.lightText}>CONTACT US</h1>
        </div>
        <Contact></Contact>
      </section>
      <style jsx>{`
        .header {
          padding: 5rem 0 0;
        }
        .hidden-header {
          padding: 0;
          visibility: hidden;
        }
        .container {
          width: 100vw;
          max-width: 1200px;
          place-self: center;
        }
        @media (min-width: 460px) {
        }
      `}</style>
    </Layout>
  );
}
