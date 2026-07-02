'use client';
import { useEditState, tinaField } from 'tinacms/dist/react';
import { MenuSection } from './menu-section';
import { MenuQuery } from '@/tina/__generated__/types';
import { slugify } from '@/lib/slugify';
import { usePathname } from 'next/navigation';

interface MenuProps {
  sections: string[];
  pathName?: string;
  menu: MenuQuery['menu'];
}

export const Menu = ({ menu, sections, pathName }: MenuProps) => {
  const { edit } = useEditState();
  const pathname = usePathname();

  if (!menu) {
    return <div>No Menu Found</div>;
  }

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
            nameField={edit ? tinaField(section, 'name') : undefined}
            notesField={edit ? tinaField(section, 'notes') : undefined}
            itemsWithFields={section.items?.map(menuItem =>
              menuItem
                ? {
                    item: menuItem,
                    nameField: edit ? tinaField(menuItem, 'name') : undefined,
                    descriptionField: edit
                      ? tinaField(menuItem, 'description')
                      : undefined,
                    priceField: edit ? tinaField(menuItem, 'price') : undefined,
                    modifiersField: edit
                      ? tinaField(menuItem, 'modifiers')
                      : undefined
                  }
                : undefined
            )}
          />
        );
      })}
    </>
  );
};
