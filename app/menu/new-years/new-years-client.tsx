'use client';

import { MenuQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { formIdFromCollectionPath } from '@/lib/preview-path';
import { useActivePreviewFormId } from '@/lib/use-active-preview-form-id';
import { Menu } from '../_components/menu';
import { TypographyH1 } from '@/components/ui/typography';
import { TinaLive } from '@/app/_components/tina-live';

const NEW_YEARS_FORM_ID = formIdFromCollectionPath(
  'content/menus',
  'newYears.json'
);

interface NewYearsClientProps extends TinaPayload<MenuQuery> {
  sections: string[];
}

export function NewYearsClient({ sections, ...props }: NewYearsClientProps) {
  const activeFormId = useActivePreviewFormId();

  return (
    <TinaLive
      payload={props}
      formId={NEW_YEARS_FORM_ID}
      enabled={!activeFormId || activeFormId === NEW_YEARS_FORM_ID}
    >
      {data => {
        const menu = data.menu;

        if (!menu) {
          return null;
        }

        return (
          <>
            <TypographyH1 className="mt-12 text-center">
              New Year&apos;s Eve Menu
            </TypographyH1>
            <Menu menu={menu} sections={sections} />
          </>
        );
      }}
    </TinaLive>
  );
}
