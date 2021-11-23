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
