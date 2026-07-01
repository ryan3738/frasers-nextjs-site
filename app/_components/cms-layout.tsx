import client from '@/tina/__generated__/client';
import { LayoutClient } from './layout-client';

interface CmsLayoutProps {
  children: React.ReactNode;
}

export async function CmsLayout({ children }: CmsLayoutProps) {
  const globalResponse = await client.queries.global({
    relativePath: 'index.json'
  });

  return <LayoutClient {...globalResponse}>{children}</LayoutClient>;
}
