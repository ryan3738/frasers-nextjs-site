import { getStaticPropsForTina, gql } from 'tinacms';
import Home from '../components/Home';
import { getMenusQueryFragment } from './menu';

export default function HomePage(props) {
  if (props.data && props.data.getMenuCollectionDocument) {
    const { menus } = props.data.getMenuCollectionDocument.data;
    return (
      <>
        <Home menus={menus} />
      </>
    );
  }
  return <div>Loading...</div>;
}

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
