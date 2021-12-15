import { getStaticPropsForTina, gql } from 'tinacms';
import Home from '../components/Home';
import { getMenuQueryFragment } from './menu';

export default function HomePage(props) {
  if (
    props.data &&
    props.data.getMenuDocument &&
    props.data.getBusinessInfoDocument &&
    props.data.getDoubleFeatureDocument
  ) {
    const menu = props.data.getMenuDocument.data;
    const businessInfo = props.data.getBusinessInfoDocument.data;
    // const aboutBusiness = props.data.getDoubleFeatureDocument.data;
    // console.log('ABOUT BUSINESS', aboutBusiness);
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
      elemntId
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
    getDoubleFeatureList(first: 0, last: 1 ){
    totalCount
    edges {
      node {
        data {
          title
          subtitle
        }
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
        ${getGalleryGridFragment}
        ${getDoubleFeatureFragment}
        ${getDoubleFeatureListFragment}
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
