import Head from 'next/head';
import Layout from './Layout';
import MenuSection from './MenuSection';

export default function Menu() {
  return (
    <Layout>
      <Head>
        <title>MENU</title>
      </Head>
      <section className="menu-container">
        <h1>MENU</h1>
        <MenuSection category="Starters" />
        <MenuSection category="Entrees" />
      </section>
      <style jsx>{`
        .menu-container {
          width: 100vw;
          max-width: 1200px;
          place-self: center;
        }
      `}</style>
    </Layout>
  );
}
