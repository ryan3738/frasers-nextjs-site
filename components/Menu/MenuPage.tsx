import styles from '../../styles/styles.module.css';
import { Menu } from './Menu';
import { useRouter } from 'next/router';
import { Menu as MenuType } from '../../.tina/__generated__/types';
import Markdown from 'react-markdown';

interface MenuPageProps {
  menu: MenuType;
  sections: string[];
}

export default function MenuPage({
  menu,
  sections,
}: MenuPageProps): JSX.Element {
  const { pathname } = useRouter();
  if (!menu) {
    return <div>No Menu Found</div>;
  }
  return (
    <>
      <section className="menu-container">
        <div className={styles.header}>
          <h1>{menu.title}</h1>
          {menu.notes && <Markdown>{menu?.notes}</Markdown>}
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
