'use client';

import { MenuQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import {
  formIdFromCollectionPath,
  MENU_FORM_ID,
  NEW_YEARS_FORM_ID,
  shouldSelectForm
} from '@/lib/preview-path';
import { useSyncPreviewForm } from '@/lib/use-sync-preview-form';
import { TinaLive } from '@/app/_components/tina-live';
import { Menu } from './menu';
import { TypographyH1 } from '@/components/ui/typography';

const MENU_FORM_IDS = {
  'dinnerMenu.json': MENU_FORM_ID,
  'newYears.json': NEW_YEARS_FORM_ID
} as const;

interface MenuPageClientProps extends TinaPayload<MenuQuery> {
  relativePath: keyof typeof MENU_FORM_IDS;
  title: string;
  sections: string[];
}

export function MenuPageClient({
  relativePath,
  title,
  sections,
  ...props
}: MenuPageClientProps) {
  const activeFormId = useSyncPreviewForm();
  const formId =
    MENU_FORM_IDS[relativePath] ??
    formIdFromCollectionPath('content/menus', relativePath);

  return (
    <TinaLive
      payload={props}
      formId={formId}
      enabled={shouldSelectForm(activeFormId, formId, true)}
    >
      {data => {
        const menu = data.menu;

        if (!menu) {
          return null;
        }

        return (
          <>
            <TypographyH1 className="mt-12 text-center">{title}</TypographyH1>
            <Menu menu={menu} sections={sections} />
          </>
        );
      }}
    </TinaLive>
  );
}
