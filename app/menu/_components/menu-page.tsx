import styles from '../../styles/styles.module.css';
import { MenuQuery } from '@/tina/__generated__/types';
import { Menu } from './menu';
import { useRouter } from 'next/router';

import Markdown from 'react-markdown';

interface MenuPageProps {
  menu: MenuQuery['menu'];
  sections: string[];
}

export const MenuPage = ({ menu, sections }: MenuPageProps) => {
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
};
