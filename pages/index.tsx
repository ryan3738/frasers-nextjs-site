import { getStaticPropsForTina, gql } from 'tinacms';
import Home from '../components/Home';
import { getMenuQueryFragment } from './menu';

export default function HomePage(props) {
  if (props.data && props.data.getMenuDocument) {
    const menu = props.data.getMenuDocument.data;
    return (
      <>
        <Home menu={menu} />
      </>
    );
  }
  return <div>Loading...</div>;
}

export const getBusinessInfoQueryFragment = `
  getBusinessInfoDocument(relativePath: "businessInfo.json"){
    data {
      name
      phoneNumber
      address {
        name
      }
    }
  }
`;

export const getStaticProps = async () => {
  const tinaProperties = await getStaticPropsForTina({
    query: gql`
      query MenuQuery{
        ${getMenuQueryFragment}
        ${getBusinessInfoQueryFragment}
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
