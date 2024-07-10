import client from '@/tina/__generated__/client';
import { Menu } from './_components/menu';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const menuResponse = await client.queries.menu({
  relativePath: 'dinnerMenu.json'
});

export const metadata = {
  title: 'Menu'
} satisfies Metadata;

const sections = ['Starters', 'Entrees'];

export default function MenuPage() {
  const menu = menuResponse?.data?.menu;
  if (!menu) notFound();
  return <Menu menu={menu} sections={sections} />;
}
