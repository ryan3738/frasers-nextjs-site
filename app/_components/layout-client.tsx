'use client';

import { GlobalQuery } from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { useTinaWithForm } from '@/lib/use-tina-with-form';
import { LayoutEditable } from './layout-editable';

interface LayoutClientProps extends TinaPayload<GlobalQuery> {
  children: React.ReactNode;
}

export function LayoutClient({ children, ...props }: LayoutClientProps) {
  const { data } = useTinaWithForm(props);

  return <LayoutEditable global={data.global}>{children}</LayoutEditable>;
}
