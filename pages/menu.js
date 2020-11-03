import Head from 'next/head';
import Layout from '../components/layout';
import MenuSection from '../components/menu-section';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>MENU</title>
      </Head>
      <section className='menu-container'>
        <h1>MENU</h1>
        <MenuSection category='Starters' />
        <MenuSection category='Entrees' />
        <MenuSection category='Desserts' />
      </section>
      <style jsx>{`
        .menu-container {
          max-width: 1200px;
          place-self: center;
        }
      `}</style>
    </Layout>
  );
}
