import MenuSection from './MenuSection';
import NavBar from '../Header';
import { MenuQuery } from '../../tina/__generated__/types';
import { slugify } from '../../lib/slugify';

interface MenuProps {
  sections: string[];
  pathName: string;
  menu: MenuQuery['menu'];
}

/**
 *
 * @deprecated
 */
const Menu = ({ menu, sections, pathName }: MenuProps): JSX.Element => {
  if (!menu) {
    return <div>No Menu Found</div>;
  }
  const links = menu.sections.map(section => {
    return {
      href: `${pathName}#${slugify(section.name)}`,
      label: section.name
    };
  });
  return (
    <>
      {sections.map(item => {
        const section = menu?.sections?.find(section => section.name === item);
        return (
          <MenuSection
            section={section}
            key={item}
            category={item}
            id={slugify(section.name)}
          />
        );
      })}
      <NavBar
        showHomeLink={false}
        navLinks={links}
        position="sticky"
        location="bottom"
      />
    </>
  );
};

export { Menu };
