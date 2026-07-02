'use client';
import { tinaField } from 'tinacms/dist/react';
import { MenuSection } from './menu-section';
import { MenuQuery } from '@/tina/__generated__/types';
import { slugify } from '@/lib/slugify';
import { usePathname } from 'next/navigation';

interface MenuProps {
  sections: string[];
  pathName?: string;
  menu: MenuQuery['menu'];
  clickToEdit?: boolean;
}

export const Menu = ({
  menu,
  sections,
  pathName,
  clickToEdit = false
}: MenuProps) => {
  const pathname = usePathname();
  if (!menu) {
    return <div>No Menu Found</div>;
  }
  const links = menu?.sections?.map(section => {
    return {
      href: `${pathName || pathname}#${slugify(section?.name || '')}`,
      label: section?.name
    };
  });
  return (
    <>
      {sections.map(item => {
        const section = menu?.sections?.find(section => section?.name === item);
        if (!section) return null;
        return (
          <MenuSection
            section={section}
            key={item}
            category={item}
            id={slugify(section?.name || '')}
            nameField={clickToEdit ? tinaField(section, 'name') : undefined}
            notesField={clickToEdit ? tinaField(section, 'notes') : undefined}
            itemsWithFields={section.items?.map(menuItem =>
              menuItem
                ? {
                    item: menuItem,
                    nameField: clickToEdit
                      ? tinaField(menuItem, 'name')
                      : undefined,
                    descriptionField: clickToEdit
                      ? tinaField(menuItem, 'description')
                      : undefined,
                    priceField: clickToEdit
                      ? tinaField(menuItem, 'price')
                      : undefined,
                    modifiersField: clickToEdit
                      ? tinaField(menuItem, 'modifiers')
                      : undefined
                  }
                : undefined
            )}
          />
        );
      })}
      {/* <Header
        showHomeLink={false}
        navLinks={links || []}
        position="sticky"
        location="bottom"
      /> */}
    </>
  );
};
