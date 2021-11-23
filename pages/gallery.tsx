import Head from 'next/head'
import Layout from '../components/Layout'
import GalleryGrid from '../components/GalleryGrid'
import images from '../public/data/gallery-grid.json';
// import Image from 'next/image'



export default function GalleryPage() {
  return (
    <Layout>
      <Head>
        <title>Gallery</title>
      </Head>
      <section>
        <h1>Gallery</h1>
        <GalleryGrid images={images} />
      </section>
    </Layout>
  )
}
