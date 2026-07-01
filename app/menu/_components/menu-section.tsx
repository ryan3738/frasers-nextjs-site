import { TypographyH2 } from '@/components/ui/typography';
import { MenuItemCard } from './menu-item-card';
import { MenuSections, MenuSectionsItems } from '@/tina/__generated__/types';
import Markdown from 'react-markdown';

interface MenuItemWithFields {
  item: MenuSectionsItems;
  nameField?: string;
  descriptionField?: string;
  priceField?: string;
  modifiersField?: string;
}

interface MenuSectionProps {
  category: string;
  section: MenuSections;
  id: string;
  nameField?: string;
  notesField?: string;
  itemsWithFields?: Array<MenuItemWithFields | undefined>;
}

export const MenuSection = ({
  section,
  id,
  nameField,
  notesField,
  itemsWithFields
}: MenuSectionProps) => {
  if (!section) {
    return <div>No Menu Section Found</div>;
  }
  return (
    <div id={id} className="mb-40 w-full max-w-screen-lg bg-accent/30">
      <div className="mt-8 border-b border-accent-foreground">
        <TypographyH2
          className=" p-4 text-center uppercase"
          data-tina-field={nameField}
        >
          {section?.name}
        </TypographyH2>
        {section.notes && (
          <div data-tina-field={notesField}>
            <Markdown>{section?.notes}</Markdown>
          </div>
        )}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] items-stretch justify-stretch gap-3 p-2">
        {(itemsWithFields ?? section?.items?.map(item => (item ? { item } : undefined)))
          ?.filter(
            (entry): entry is MenuItemWithFields =>
              entry != null && entry.item?.available === true
          )
          .map(({ item, nameField, descriptionField, priceField, modifiersField }) => (
            <MenuItemCard
              key={item.name}
              item={item}
              nameField={nameField}
              descriptionField={descriptionField}
              priceField={priceField}
              modifiersField={modifiersField}
            />
          ))}
      </div>
    </div>
  );
};
