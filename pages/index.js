import PropTypes from 'prop-types'
import { getDoubleData } from '../lib/posts'
import siteData from '../public/data/site-data.json'
import Home from '../components/Home'

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
