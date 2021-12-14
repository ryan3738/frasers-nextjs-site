import Head from 'next/head';

import { getStaticPropsForTina, gql } from 'tinacms';
import Layout from '../components/Layout';
import Menu from '../components/Menu/MenuPage';
import { Menu as MenuType } from '../.tina/__generated__/types';

export default function MenuPage(props) {
  if (props.data && props.data.getMenuDocument) {
    const menu:MenuType = props.data.getMenuDocument.data;
    return (
      <Layout>
        <Head>
          <title>MENU</title>
        </Head>
        <Menu menu={menu} />
      </Layout>
    );
  }
  return <div>Loading...</div>;
}

export const getMenuQueryFragment = `
  getMenuDocument(relativePath: "dinnerMenu.json") {
          data {
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
`;

export const getStaticProps = async () => {
  const tinaProperties = await getStaticPropsForTina({
    query: gql`
      query MenuQuery {
        ${getMenuQueryFragment}
      }
    `,
    variables: {}
  });
  return {
    props: {
      ...tinaProperties
    }
  };
};
