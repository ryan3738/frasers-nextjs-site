import client from '@/tina/__generated__/client';
import { Menu } from '../_components/menu';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const sections = [
  'Amuse Bouche',
  'First Course',
  'Second Course',
  'Third Course',
  'Dessert'
];

const menuResponse = await client.queries.menu({
  relativePath: 'newYears.json'
});

export const metadata = {
  title: `New Year's Eve Menu`
} satisfies Metadata;

export default function MenuPage() {
  const menu = menuResponse?.data?.menu;
  if (!menu) notFound();
  return <Menu menu={menu} sections={sections} />;
}
