'use client';

import { MenuQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { MenuPageClient } from './_components/menu-page-client';

interface MenuClientProps extends TinaPayload<MenuQuery> {
  sections: string[];
}

export function MenuClient({ sections, ...props }: MenuClientProps) {
  return (
    <MenuPageClient
      {...props}
      relativePath="dinnerMenu.json"
      title="Menu"
      sections={sections}
    />
  );
}
