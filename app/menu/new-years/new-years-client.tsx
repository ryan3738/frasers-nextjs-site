'use client';

import { MenuQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { MenuPageClient } from '../_components/menu-page-client';

interface NewYearsClientProps extends TinaPayload<MenuQuery> {
  sections: string[];
}

export function NewYearsClient({ sections, ...props }: NewYearsClientProps) {
  return (
    <MenuPageClient
      {...props}
      relativePath="newYears.json"
      title="New Year's Eve Menu"
      sections={sections}
    />
  );
}
