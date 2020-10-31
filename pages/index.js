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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // const menuData = await menu.json();
  // const menu = await import('../public/data/menu.json');
  // const menu = await import('../public/data/menu.json');
  return {
    props: {
      allPostsData,
      // menu,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navigation />
      <Hero />
      <section id='about'>
        <h2>This is the about section</h2>
        <Double></Double>
      </section>
      <section id='menu'>
        {/* <img src='/images/wild-boar-ragout.jpg' alt='wild boar' /> */}
        <h2>This is the menu section</h2>
        <MenuSection category='Starters' />
        <MenuSection category='Entrees' />
      </section>
      <section id='contact'>
        <h2>This is the contact section</h2>
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
    </Layout>
  );
}
