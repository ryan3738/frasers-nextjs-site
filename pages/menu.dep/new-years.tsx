import Head from 'next/head';
import { meta } from '../../components/Layout';
import Menu from '../../components/Menu/MenuPage';
import { useEffect, useState } from 'react';
import client from '../../tina/__generated__/client';

const sections = [
  'Amuse Bouche',
  'First Course',
  'Second Course',
  'Third Course',
  'Dessert'
];

export default function MenuPage() {
  const [menuResponse, setMenuResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await client.queries.menu({ relativePath: 'newYears.json' });
      console.log('menu response', { res });
      setMenuResponse(res);
    };
    fetchData();
  }, []);

  if (menuResponse?.errors) {
    console.error(menuResponse.errors);
    return <div>Error loading menu</div>;
  }
  if (menuResponse?.data?.menu) {
    const menu = menuResponse?.data?.menu;
    return (
      <>
        <Head>
          <title>
            {menu.title} | {meta.title}
          </title>
        </Head>
        <Menu menu={menu} sections={sections} />
      </>
    );
  }
  return <div>Loading...</div>;
}
