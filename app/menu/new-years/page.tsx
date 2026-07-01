import client from '@/tina/__generated__/client';
import { Menu } from '../_components/menu';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import { TypographyH1 } from '@/components/ui/typography';

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

export const metadata = pageMetadata({
  title: `New Year's Eve Menu`,
  description:
    "Celebrate New Year's Eve at Frasers Gourmet Hideaway with our special multi-course holiday menu in Oak Harbor, Washington.",
  path: '/menu/new-years'
});

export default function MenuPage() {
  const menu = menuResponse?.data?.menu;
  if (!menu) notFound();
  return (
    <>
      <TypographyH1 className="mt-12 text-center">New Year&apos;s Eve Menu</TypographyH1>
      <Menu menu={menu} sections={sections} />
    </>
  );
}
