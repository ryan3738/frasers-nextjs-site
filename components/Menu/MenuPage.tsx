import Head from 'next/head';
import styles from '../../styles/styles.module.css';
import { Menu } from './Menu';
import { useRouter } from 'next/router';
import { Menu as MenuType } from '../../.tina/__generated__/types';

interface MenuPageProps {
  title: string;
  menu: MenuType;
  sections: string[];
}

export default function MenuPage({
  title,
  menu,
  sections,
}: MenuPageProps): JSX.Element {
  const { pathname } = useRouter();
  if (!menu) {
    return <div>No Menu Found</div>;
  }
  return (
    <>
      <Head>
        <title>MENU</title>
      </Head>
      <section className="menu-container">
        <div className={styles.header}>
          <h1>{title}</h1>
          {menu.notes && <h2>{menu?.notes}</h2>}
        </div>
        <Menu menu={menu} pathName={pathname} sections={sections} />
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
