'use client';

import { useEditState } from 'tinacms/dist/react';
import { MenuQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { formIdFromCollectionPath } from '@/lib/preview-path';
import { useActivePreviewFormId } from '@/lib/use-active-preview-form-id';
import { Menu } from './_components/menu';
import { TypographyH1 } from '@/components/ui/typography';
import { TinaLive } from '@/app/_components/tina-live';

const MENU_FORM_ID = formIdFromCollectionPath(
  'content/menus',
  'dinnerMenu.json'
);

interface MenuClientProps extends TinaPayload<MenuQuery> {
  sections: string[];
}

export function MenuClient({ sections, ...props }: MenuClientProps) {
  const { edit } = useEditState();
  const activeFormId = useActivePreviewFormId();

  return (
    <TinaLive
      payload={props}
      formId={MENU_FORM_ID}
      enabled={!activeFormId || activeFormId === MENU_FORM_ID}
    >
      {data => {
        const menu = data.menu;

        if (!menu) {
          return null;
        }

        return (
          <>
            <TypographyH1 className="mt-12 text-center">Menu</TypographyH1>
            <Menu
              menu={menu}
              sections={sections}
              clickToEdit={edit}
            />
          </>
        );
      }}
    </TinaLive>
  );
}
