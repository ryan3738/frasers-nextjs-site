import Head from 'next/head';
import { useRouter } from 'next/router';
import { getStaticPropsForTina, gql } from 'tinacms';
import Layout from '../components/Layout';
import Menu from '../components/MenuPage';

export default function MenuPage(properties) {
  const { menus } = properties.data.getMenuCollectionDocument.data;
  const { pathname } = useRouter();
  const menuCategories = ['Starters', 'Entrees'];
  if (properties.data && properties.data.getMenuCollectionDocument.data) {
    return (
      <Layout>
        <Head>
          <title>MENU</title>
        </Head>
        <section className="menu-container">
          <Menu menus={menus} pathName={pathname} categories={menuCategories} />
        </section>
        <style jsx>{`
          .menu-container {
            width: 100vw;
            max-width: 1200px;
            place-self: center;
          }
        `}</style>
      </Layout>
    );
  }
  return <div>Loading...</div>;
}

export const getStaticProps = async ({ params }) => {
  const tinaProperties = await getStaticPropsForTina({
    query: gql`
      query MenuQuery($relativePath: String!) {
        getMenuCollectionDocument(relativePath: $relativePath) {
          data {
            menus {
              name
              description
              sections {
                name
                items {
                  name
                  description
                  price
                  dietary
                  modifiers {
                    name
                    price
                  }
                  images {
                    name
                    src
                  }
                  dietary
                  available
                }
              }
            }
          }
        }
      }
    `,
    variables: { relativePath: `menus.json` }
  });
  return {
    props: {
      ...tinaProperties
    }
  };
};
