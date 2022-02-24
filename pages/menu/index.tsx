import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getStaticPropsForTina, gql } from 'tinacms';
import Layout, { layoutQueryFragment, meta } from '../../components/Layout';
import Menu from '../../components/Menu/MenuPage';

export default function MenuPage(props): JSX.Element {
  const sections = ['Starters', 'Entrees'];
  if (props.data && props.data.getMenuDocument) {
    const menu = props.data.getMenuDocument.data;
    return (
      <Layout>
        <Head>
          <title>
            {menu.title} | {meta.title}
          </title>
        </Head>
        <Menu menu={menu} sections={sections} />
      </Layout>
    );
  }
  return <div>Loading...</div>;
}

export const getMenuQueryFragment = `
  getMenuDocument(relativePath: $menuRelativePath) {
          data {
            title
            description
            notes
            sections {
              name
              description
              notes
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

export const getStaticProps: GetStaticProps = async () => {
  const tinaProperties = await getStaticPropsForTina({
    query: gql`
      query MenuQuery($menuRelativePath: String!) {
        ${getMenuQueryFragment}
        ${layoutQueryFragment}
      }
    `,
    variables: { menuRelativePath: 'dinnerMenu.json' },
  });
  return {
    props: {
      ...tinaProperties,
    },
  };
};
