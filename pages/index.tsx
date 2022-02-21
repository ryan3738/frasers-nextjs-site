import { getStaticPropsForTina, gql } from 'tinacms';
import Home from '../components/Home';
import { getMenuQueryFragment } from './menu/index';

export default function HomePage(props) {
  if (
    props.data &&
    props.data.getMenuDocument &&
    props.data.getBusinessInfoDocument
  ) {
    const menu = props.data.getMenuDocument.data;
    const businessInfo = props.data.getBusinessInfoDocument.data;
    return (
      <>
        <Home menu={menu} businessInfo={businessInfo} />
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
        street
        street2
        city
        region
        zip
        directions
      }
      hours {
        day
        hours
      }
    }
  }
  `;

export const getGalleryGridFragment = `
    getGalleryGridDocument(relativePath: "galleryGrid.json"){
      data {
        images {
        alt
        image
        format
      }
    }
  }
  `;

export const getDoubleFeatureFragment = `
    getDoubleFeatureDocument(relativePath: "aboutBusiness.mdx"){
    data {
      elementId
      title
      subtitle
      image {
        src
        alt
      }
      body
    }
  }
`;

export const getDoubleFeatureListFragment = `
    getDoubleFeatureList(first: 0, last: 1){
    totalCount
    edges {
      node {
        id
        data {
          title
        }
      }
    }
  }
`;

export const getStaticProps = async () => {
  const tinaProperties = await getStaticPropsForTina({
    query: gql`
      query MenuQuery($menuRelativePath: String!){
        ${getMenuQueryFragment}
        ${getBusinessInfoQueryFragment}
        ${getGalleryGridFragment}
        ${getDoubleFeatureListFragment}
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
