import Head from 'next/head';

import { getStaticPropsForTina, gql } from 'tinacms';
import Layout from '../components/Layout';
import Menu from '../components/Menu/MenuPage';

export default function MenuPage(props) {
  if (props.data && props.data.getMenuCollectionDocument) {
    const { menus } = props.data.getMenuCollectionDocument.data;
    return (
      <Layout>
        <Head>
          <title>MENU</title>
        </Head>
        <Menu menus={menus} />
      </Layout>
    );
  }
  return <div>Loading...</div>;
}

export const getMenusQueryFragment = `
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
`;

export const getStaticProps = async () => {
  const tinaProperties = await getStaticPropsForTina({
    query: gql`
      query MenuQuery($relativePath: String!) {
        ${getMenusQueryFragment}
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
