import Head from 'next/head';
import { getStaticPropsForTina, gql } from 'tinacms';
import Layout from '../../components/Layout';
import Menu from '../../components/Menu/MenuPage';

export default function MenuPage(props) {
  const sections = ['Starters', 'Entrees'];
  if (props.data && props.data.getMenuDocument) {
    const menu = props.data.getMenuDocument.data;
    return (
      <Layout>
        <Head>
          <title>MENU</title>
        </Head>
        <Menu menu={menu} sections={sections} />
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
