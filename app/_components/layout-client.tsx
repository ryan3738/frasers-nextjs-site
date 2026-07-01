'use client';

import { GlobalQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { useTinaWithForm } from '@/lib/use-tina-with-form';
import { Layout } from './layout';

interface LayoutClientProps extends TinaPayload<GlobalQuery> {
  children: React.ReactNode;
}

export function LayoutClient({ children, ...props }: LayoutClientProps) {
  const { data } = useTinaWithForm(props);

  return <Layout data={data.global}>{children}</Layout>;
}
