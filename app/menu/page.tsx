import client from '@/tina/__generated__/client';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import { MenuClient } from './menu-client';

const menuResponse = await client.queries.menu({
  relativePath: 'dinnerMenu.json'
});

export const metadata = pageMetadata({
  title: 'Menu',
  description:
    'View our dinner menu — starters, entrees, and Pacific Northwest-inspired dishes at Frasers Gourmet Hideaway.',
  path: '/menu'
});

export const revalidate = 3600;

const sections = ['Starters', 'Entrees'];

export default function MenuPage() {
  if (!menuResponse?.data?.menu) {
    notFound();
  }

  return <MenuClient {...menuResponse} sections={sections} />;
}
