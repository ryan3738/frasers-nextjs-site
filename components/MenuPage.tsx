import Head from 'next/head';
import styles from '../styles/styles.module.css';
import { Menu } from './Menu';
import { useRouter } from 'next/router';

export default function MenuPage({ menus }) {
  const { pathname } = useRouter();
  const menuCategories = ['Starters', 'Entrees'];
  return (
    <>
      <Head>
        <title>MENU</title>
      </Head>
      <section className="menu-container">
        <div className={styles.header}>
          <h1>MENU</h1>
        </div>
        <Menu menus={menus} pathName={pathname} categories={menuCategories} />
      </section>
      <style jsx>{`
        .menu-container {
          width: 100vw;
          max-width: 1200px;
          place-self: center;
        }
      `}</style>
    </>
  );
}
