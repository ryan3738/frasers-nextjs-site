import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import MenuSection from '../components/mention-section';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <MenuSection category='Starters' />
      <MenuSection category='Entrees' />
      <MenuSection category='Desserts' />
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
