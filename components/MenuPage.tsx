import Head from 'next/head';
import Layout from './Layout';
import styles from '../styles/styles.module.css';
import { Menu } from './Menu';
import { useRouter } from "next/router";

export default function MenuPage() {
  const {pathname} = useRouter();
  const menuCategories = ['Starters', 'Entrees'];

  return (
    <Layout>
      <Head>
        <title>MENU</title>
      </Head>
      <section className="menu-container">
        <div className={styles.header}>
          <h1>MENU</h1>

        </div>
        <Menu pathName={pathname} categories={menuCategories} />
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
