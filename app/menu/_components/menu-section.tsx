import { TypographyH2 } from '@/components/ui/typography';
import { MenuItemCard } from './menu-item-card';
import { MenuSections } from '@/tina/__generated__/types';
import Markdown from 'react-markdown';

interface MenuSectionProps {
  category: string;
  section: MenuSections;
  id: string;
}

export const MenuSection = ({ section, id }: MenuSectionProps) => {
  if (!section) {
    return <div>No Menu Section Found</div>;
  }
  return (
    <div id={id} className="w-full max-w-screen-lg bg-accent/30">
      <div className="mt-8 border-b border-accent-foreground">
        <TypographyH2 className=" p-4 text-center uppercase">
          {section?.name}
        </TypographyH2>
        {section.notes && <Markdown>{section?.notes}</Markdown>}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] items-stretch justify-stretch gap-3 p-2">
        {section?.items
          ?.filter(item => item?.available === true)
          .map(item =>
            item ? <MenuItemCard key={item.name} item={item} /> : null
          )}
      </div>
    </div>
  );
};
