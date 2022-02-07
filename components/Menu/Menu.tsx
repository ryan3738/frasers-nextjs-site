import MenuSection from './MenuSection';
import NavBar from '../NavBar';
import { Menu as MenuType } from '../../.tina/__generated__/types';
import { slugify } from '../../lib/slugify';

interface MenuProps {
  sections: string[];
  pathName: string;
  menu: MenuType;
}

const Menu = ({ menu, sections, pathName }: MenuProps): JSX.Element => {
  if (!menu) {
    return <div>No Menu Found</div>;
  }
  const links = menu.sections.map(section => {
    return { href: `${pathName}#${slugify(section.name)}`, text: section.name };
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
        links={links}
        position="sticky"
        location="bottom"
      />
    </>
  );
};

export { Menu };
