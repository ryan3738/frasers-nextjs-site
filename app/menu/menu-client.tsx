'use client';

import { MenuQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { useTinaWithForm } from '@/lib/use-tina-with-form';
import { Menu } from './_components/menu';
import { TypographyH1 } from '@/components/ui/typography';

interface MenuClientProps extends TinaPayload<MenuQuery> {
  sections: string[];
}

export function MenuClient({ sections, ...props }: MenuClientProps) {
  const { data } = useTinaWithForm(props, {
    formId: 'content/menus/dinnerMenu.json'
  });
  const menu = data.menu;

  if (!menu) {
    return null;
  }

  return (
    <>
      <TypographyH1 className="mt-12 text-center">Menu</TypographyH1>
      <Menu menu={menu} sections={sections} />
    </>
  );
}
