import { getStaticPropsForTina, gql } from 'tinacms';
import Home from '../components/Home';
import { getMenuQueryFragment } from './menu';

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

export const getStaticProps = async () => {
  const tinaProperties = await getStaticPropsForTina({
    query: gql`
      query MenuQuery{
        ${getMenuQueryFragment}
        ${getBusinessInfoQueryFragment}
        ${getGalleryGridFragment}
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
