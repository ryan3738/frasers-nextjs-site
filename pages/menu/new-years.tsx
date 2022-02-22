import Head from 'next/head';
import { getStaticPropsForTina, gql } from 'tinacms';
import { getMenuQueryFragment } from './index';
import Layout, { meta } from '../../components/Layout';
import Menu from '../../components/Menu/MenuPage';
import { GetStaticProps } from 'next';

export default function MenuPage(props): JSX.Element {
  const sections = [
    'Amuse Bouche',
    'First Course',
    'Second Course',
    'Third Course',
    'Dessert',
  ];
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

export const getStaticProps: GetStaticProps = async () => {
  const tinaProperties = await getStaticPropsForTina({
    query: gql`
      query MenuQuery($menuRelativePath: String!) {
        ${getMenuQueryFragment}
      }
    `,
    variables: { menuRelativePath: 'newYears.json' },
  });
  return {
    props: {
      ...tinaProperties,
    },
  };
};
