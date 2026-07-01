import client from '@/tina/__generated__/client';
import { Menu } from './_components/menu';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import { TypographyH1 } from '@/components/ui/typography';

const menuResponse = await client.queries.menu({
  relativePath: 'dinnerMenu.json'
});

export const metadata = pageMetadata({
  title: 'Menu',
  description:
    'View our dinner menu — starters, entrees, and Pacific Northwest-inspired dishes at Frasers Gourmet Hideaway.',
  path: '/menu'
});

const sections = ['Starters', 'Entrees'];

export default function MenuPage() {
  const menu = menuResponse?.data?.menu;
  if (!menu) notFound();
  return (
    <>
      <TypographyH1 className="mt-12 text-center">Menu</TypographyH1>
      <Menu menu={menu} sections={sections} />
    </>
  );
}
