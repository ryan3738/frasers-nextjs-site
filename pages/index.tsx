import Home from '../components/Home';
import { useEffect, useState } from 'react';
import client from '../tina/__generated__/client';

export default function HomePage() {
  const [menuResponse, setMenuResponse] = useState(null);
  const [businessInfoResponse, setBusinessInfoResponse] = useState(null);
  const [galleryGridResponse, setGalleryGridResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const menuResponse = await client.queries.menu({
        relativePath: 'dinnerMenu.json'
      });
      setMenuResponse(menuResponse);
      const businessInfoResponse = await client.queries.businessInfo({
        relativePath: 'businessInfo.json'
      });
      setBusinessInfoResponse(businessInfoResponse);
      const galleryGridResponse = await client.queries.galleryGrid({
        relativePath: 'galleryGrid.json'
      });
      setGalleryGridResponse(galleryGridResponse);
      // console.log("homepage responses", { menuResponse, businessInfoResponse, galleryGridResponse });
    };
    fetchData();
  }, []);

  if (
    menuResponse?.data?.menu &&
    businessInfoResponse?.data?.businessInfo &&
    galleryGridResponse?.data?.galleryGrid
  ) {
    const menu = menuResponse?.data?.menu;
    const businessInfo = businessInfoResponse?.data?.businessInfo;
    const galleryImages = galleryGridResponse?.data?.galleryGrid?.images || [];
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
