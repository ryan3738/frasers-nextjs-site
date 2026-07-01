'use client';

import { tinaField } from 'tinacms/dist/react';
import { GlobalQuery } from '@/tina/__generated__/types';
import { Layout } from './layout';

interface LayoutEditableProps {
  global: GlobalQuery['global'];
  children: React.ReactNode;
}

export function LayoutEditable({ global, children }: LayoutEditableProps) {
  const linkFields = global?.navigation?.links?.map(link =>
    link
      ? {
          label: tinaField(link, 'label'),
          href: tinaField(link, 'href')
        }
      : undefined
  );

  return (
    <Layout data={global} linkFields={linkFields}>
      {children}
    </Layout>
  );
}
