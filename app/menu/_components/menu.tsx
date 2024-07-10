'use client';
import { MenuSection } from './menu-section';
import { MenuQuery } from '@/tina/__generated__/types';
import { slugify } from '@/lib/slugify';
import { Header } from '@/app/_components/header';
import { usePathname } from 'next/navigation';

interface MenuProps {
  sections: string[];
  pathName?: string;
  menu: MenuQuery['menu'];
}

export const Menu = ({ menu, sections, pathName }: MenuProps) => {
  const pathname = usePathname();
  if (!menu) {
    return <div>No Menu Found</div>;
  }
  const links = menu.sections.map(section => {
    return {
      href: `${pathName || pathname}#${slugify(section.name)}`,
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
      <Header
        showHomeLink={false}
        navLinks={links}
        position="sticky"
        location="bottom"
      />
    </>
  );
};
