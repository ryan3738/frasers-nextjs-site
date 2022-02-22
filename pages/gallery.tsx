import Head from 'next/head';
import Layout from '../components/Layout';
import GalleryGrid from '../components/GalleryGrid';
import { getStaticPropsForTina, gql } from 'tinacms';
import { GetStaticProps } from 'next';

export default function GalleryPage(props): JSX.Element {
  if (props.data && props.data.getGalleryGridDocument) {
    const galleryImages = props.data.getGalleryGridDocument.data.images || [];
    return (
      <Layout>
        <Head>
          <title>Gallery</title>
        </Head>
        <section>
          <h1>Gallery</h1>
          <GalleryGrid images={galleryImages} />
        </section>
      </Layout>
    );
  }
}

export const getGalleryGridFragment = `
    getGalleryGridDocument(relativePath: "galleryGrid.json"){
      data {
        images {
        alt
        src
        format
      }
    }
  }
  `;

export const getStaticProps: GetStaticProps = async () => {
  const tinaProperties = await getStaticPropsForTina({
    query: gql`
      query GalleryQuery{
        ${getGalleryGridFragment}
      }
    `,
  });
  return {
    props: {
      ...tinaProperties,
    },
  };
};
