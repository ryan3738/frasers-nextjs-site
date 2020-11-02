import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import MenuSection from '../components/mention-section';
import Image from 'next/image'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>MENU</title>
      </Head>
      <h1>MENU</h1>
      <MenuSection category='Starters' />
      {/* <MenuSection category='Entrees' /> */}
      {/* <MenuSection category='Desserts' /> */}
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
