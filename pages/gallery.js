import Head from 'next/head'
import Layout from '../components/layout'
import GalleryGrid from '../components/gallery-grid'
// import Image from 'next/image'

export default function Gallery () {
  return (
        <Layout>
            <Head>
                <title>Gallery</title>
            </Head>
            <section>
                <h1>Gallery</h1>
                <GalleryGrid />
            </section>
            <style jsx>{''}</style>
        </Layout>
  )
}
