'use client';
import { tinaField } from 'tinacms/dist/react';
import { MenuSection } from './menu-section';
import { MenuQuery } from '@/tina/__generated__/types';
import { slugify } from '@/lib/slugify';
import { useVisualEditMode } from '@/app/_components/preview-mode';

interface MenuProps {
  sections: string[];
  pathName?: string;
  menu: MenuQuery['menu'];
}

export const Menu = ({ menu, sections }: MenuProps) => {
  const { isVisualEditing } = useVisualEditMode();

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
            nameField={
              isVisualEditing ? tinaField(section, 'name') : undefined
            }
            notesField={
              isVisualEditing ? tinaField(section, 'notes') : undefined
            }
            itemsWithFields={section.items?.map(menuItem =>
              menuItem
                ? {
                    item: menuItem,
                    nameField: isVisualEditing
                      ? tinaField(menuItem, 'name')
                      : undefined,
                    descriptionField: isVisualEditing
                      ? tinaField(menuItem, 'description')
                      : undefined,
                    priceField: isVisualEditing
                      ? tinaField(menuItem, 'price')
                      : undefined,
                    modifiersField: isVisualEditing
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
