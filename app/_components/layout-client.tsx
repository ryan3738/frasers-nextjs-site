'use client';

import { useEffect } from 'react';
import { GlobalQuery } from '@/tina/__generated__/types';
import { bindPreviewClickToEdit } from '@/lib/preview-click-to-edit';
import { TinaPayload } from '@/lib/tina-page-props';
import { GLOBAL_FORM_ID, shouldSelectForm } from '@/lib/preview-path';
import { useSyncPreviewForm } from '@/lib/use-sync-preview-form';
import { useEditState } from 'tinacms/dist/react';
import { Layout } from './layout';
import { TinaLive } from './tina-live';

interface LayoutClientProps extends TinaPayload<GlobalQuery> {
  children: React.ReactNode;
}

export function LayoutClient({ children, ...props }: LayoutClientProps) {
  const { edit } = useEditState();
  const activeFormId = useSyncPreviewForm();

  useEffect(() => {
    if (!edit) {
      return;
    }

    return bindPreviewClickToEdit();
  }, [edit]);

  return (
    <TinaLive
      payload={props}
      formId={GLOBAL_FORM_ID}
      enabled={shouldSelectForm(activeFormId, GLOBAL_FORM_ID)}
    >
      {data => <Layout data={data.global}>{children}</Layout>}
    </TinaLive>
  );
}
