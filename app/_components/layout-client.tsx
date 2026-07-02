'use client';

import { Suspense } from 'react';
import { GlobalQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { GLOBAL_FORM_ID } from '@/lib/preview-path';
import { useActivePreviewFormId } from '@/lib/use-active-preview-form-id';
import { LayoutEditable } from './layout-editable';
import { PreviewClickToEdit } from './preview-click-to-edit';
import { PreviewFormSelector } from './preview-form-selector';
import { TinaLive } from './tina-live';

interface LayoutClientProps extends TinaPayload<GlobalQuery> {
  children: React.ReactNode;
}

export function LayoutClient({ children, ...props }: LayoutClientProps) {
  const activeFormId = useActivePreviewFormId();

  return (
    <TinaLive
      payload={props}
      formId={GLOBAL_FORM_ID}
      enabled={activeFormId === GLOBAL_FORM_ID}
    >
      {data => (
        <LayoutEditable global={data.global}>
          <Suspense fallback={null}>
            <PreviewFormSelector />
          </Suspense>
          <PreviewClickToEdit />
          {children}
        </LayoutEditable>
      )}
    </TinaLive>
  );
}
