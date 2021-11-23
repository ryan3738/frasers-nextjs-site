import Head from 'next/head';
import Layout from './Layout';
import MenuSection from './MenuSection';
import styles from '../styles/styles.module.css';

export default function Menu() {
  return (
    <Layout>
      <Head>
        <title>MENU</title>
      </Head>
      <section className="menu-container">
        <div className={styles.header}>
          <h1>MENU</h1>
        </div>
        <MenuSection category="Starters" />
        <MenuSection category="Entrees" />
        <div className="nav">HELLO</div>
      </section>
      <style jsx>{`
        .menu-container {
          width: 100vw;
          max-width: 1200px;
          place-self: center;
        }

        .nav {
          bottom: 0;
          left: 0;
          z-index: 999;
          position: sticky;
          height: 4rem;
          background: var(--background-color);
          width: 100%;
          opacity: 0.97;
        }
      `}</style>
    </Layout>
  );
}
