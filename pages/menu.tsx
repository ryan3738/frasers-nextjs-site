import Head from 'next/head';
import { useRouter } from 'next/router';
import { getStaticPropsForTina, gql } from 'tinacms';
import Layout from '../components/Layout';
import Menu from '../components/MenuPage';

export default function MenuPage(properties) {
  const { pathname } = useRouter();
  const menuCategories = ['Starters', 'Entrees'];
  return (
    <Layout>
      <Head>
        <title>MENU</title>
      </Head>
      <section className="menu-container">
        <Menu pathName={pathname} categories={menuCategories} />
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

export const getStaticProps = async ({ params }) => {
  const tinaProperties = await getStaticPropsForTina({
    query: gql`
      query MenuQuery($relativePath: String!) {
        getMenuDocument(relativePath: $relativePath) {
          data {
            name
            description
            section {
              name
              item {
                name
                description
                price
                dietary
                modifier {
                  name
                  price
                }
                available
              }
            }
          }
        }
      }
    `,
    variables: { relativePath: `main.md` }
  });
  return {
    props: {
      ...tinaProperties
    }
  };
};
