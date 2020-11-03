import Head from 'next/head';
import Layout from '../components/layout';
import GalleryGrid from '../components/gallery-grid';

export default function Gallery() {
  return (
    <Layout>
      <Head>
        <title>Gallery</title>
      </Head>
      <section>
        <h1>This is the Gallery</h1>
        <GalleryGrid />
      </section>
      <style jsx>{`
      
      `}</style>
    </Layout>
  );
}
