import client from '@/tina/__generated__/client';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import { NewYearsClient } from './new-years-client';

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
  if (!menuResponse?.data?.menu) {
    notFound();
  }

  return <NewYearsClient {...menuResponse} sections={sections} />;
}
