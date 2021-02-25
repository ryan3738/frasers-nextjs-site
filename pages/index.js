import Head from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'

// import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts';
// import Date from '../components/date';
import MenuSection from '../components/menu-section'
import Double from '../components/double.tsx'
import GalleryGrid from '../components/gallery-grid'
import Contact from '../components/contact'
import Button from '../components/button'
// import doubleItems from '../public/data/double.json';
import { getDoubleData } from '../lib/posts'
// import announcementPath from '../public/data/site-data.json'
import siteData from '../public/data/site-data.json'
// import ImageLightBox from '../components/image-light-box'
import Home from '../components/home'

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData();
  const aboutOwnerData = await getDoubleData('public/data/about-owner.md')
  const aboutBusinessData = await getDoubleData('public/data/about-business.md')
  const announcement1Data = await getDoubleData(siteData.announcement1)
  const announcement2Data = await getDoubleData(siteData.announcement2)

  return {
    props: {
      aboutOwnerData,
      aboutBusinessData,
      announcement1Data,
      announcement2Data,
    },
  }
}

export default function HomePage({
  aboutOwnerData,
  aboutBusinessData,
  announcement1Data,
  announcement2Data,
}) {
  return (
    <>
      <Home
        aboutOwnerData={aboutOwnerData}
        aboutBusinessData={aboutBusinessData}
      />
    </>
  )
}

HomePage.propTypes = {
  aboutOwnerData: PropTypes.object,
  aboutBusinessData: PropTypes.object,
  announcement1Data: PropTypes.object,
  announcement2Data: PropTypes.object,
}
