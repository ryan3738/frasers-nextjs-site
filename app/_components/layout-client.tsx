'use client';

import { useTina } from 'tinacms/dist/react';
import { GlobalQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { Layout } from './layout';

interface LayoutClientProps extends TinaPayload<GlobalQuery> {
  children: React.ReactNode;
}

export function LayoutClient({ children, ...props }: LayoutClientProps) {
  const { data } = useTina(props);

  return <Layout data={data.global}>{children}</Layout>;
}
