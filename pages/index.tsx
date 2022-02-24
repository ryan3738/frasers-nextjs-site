import { GetStaticProps } from 'next';
import { staticRequest } from 'tinacms';
import Home from '../components/Home';
import { layoutQueryFragment } from '../components/Layout';
import { getMenuQueryFragment } from './menu/index';

export default function HomePage(props): JSX.Element {
  if (
    props.data &&
    props.data.getMenuDocument &&
    props.data.getBusinessInfoDocument &&
    props.data.getGalleryGridDocument
  ) {
    const menu = props.data.getMenuDocument.data;
    const businessInfo = props.data.getBusinessInfoDocument.data;
    const galleryImages = props.data.getGalleryGridDocument.data.images || [];
    return (
      <>
        <Home
          menu={menu}
          businessInfo={businessInfo}
          galleryImages={galleryImages}
        />
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
        src
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

export const getStaticProps: GetStaticProps = async () => {
  const query = `
      query MenuQuery($menuRelativePath: String!){
        ${getMenuQueryFragment}
        ${getBusinessInfoQueryFragment}
        ${getGalleryGridFragment}
        ${getDoubleFeatureListFragment}
        ${layoutQueryFragment}
      }
    `;
  const variables = { menuRelativePath: 'dinnerMenu.json' };
  const data = {};
  try {
    await staticRequest({
      query,
      variables,
    });
  } catch {
    // swallow errors related to document creation
  }
  return {
    props: {
      query,
      variables,
      data,
      // myOtherProp: 'some-other-data',
    },
  };
};
