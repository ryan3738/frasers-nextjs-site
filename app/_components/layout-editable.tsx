'use client';

import { GlobalQuery } from '@/tina/__generated__/types';
import { Layout } from './layout';

interface LayoutEditableProps {
  global: GlobalQuery['global'];
  children: React.ReactNode;
}

export function LayoutEditable({ global, children }: LayoutEditableProps) {
  return <Layout data={global}>{children}</Layout>;
}
