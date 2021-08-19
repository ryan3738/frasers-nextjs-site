import Head from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'

// import Image from 'next/image'
import Layout, { siteTitle } from './Layout'
// import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts';
// import Date from '../components/date';
// import MenuSection from '../components/menu-section'
import Double from './Double.tsx'
import GalleryGrid from './GalleryGrid'
import Contact from './Contact'
import Button from './Button'
import MenuSection from './MenuSection'
// import doubleItems from '../public/data/double.json';

// import announcementPath from '../public/data/site-data.json'
import siteData from '../public/data/site-data.json'
// import ImageLightBox from '../components/image-light-box'

export default function Home({
  aboutOwnerData,
  aboutBusinessData,
  announcement1Data,
  announcement2Data,
}) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Head>
        <section className="container">
          <h2 id="about" className="anchor hidden-header">
            About
          </h2>
          {/* <ImageLightBox /> */}
          <div className="double-wrapper">
            <Double
              id="takeout"
              title="Now Open for Dine In Service!"
              subtitle="To make a reservation call us at 360-279-1231 "
              imageSource="/images/pig-were-back.jpg"
              imageAlt="Pig holding a sign that says were back"
            >
              <div>
                <h3>Takeout Still Available</h3>
                <p>
                  Call {siteData.phoneNumber} during normal business hours to
                  place an order
                </p>
              </div>
              {/* <Button
                buttonText="ORDER ONLINE"
                buttonLink={siteData.websites.onlineStore}
              /> */}
              <br />
              <br />
              <h4>Sign up for our newsletter to receive future updates</h4>
              <Button
                buttonText="SIGN UP"
                buttonLink="https://squareup.com/outreach/sgPDT7/subscribe"
              />
              <br />
              <br />
              <p>We respect your privacy</p>
            </Double>
            <Double
              id="gift-cards"
              title="Gift Cards Available"
              subtitle=""
              imageSource="/images/gift-card-square.jpg"
              imageAlt="frasers gift card closeup"
              imageLeft
            >
              <div>
                To purchase a gift card please call us at{' '}
                <span className="nowrap">{siteData.phoneNumber}</span>
                <br />
                <br />
                <Button
                  buttonText="ORDER GIFT CARDS ONLINE"
                  buttonLink="https://frasersgh.square.site/product/gift-card/88"
                />
              </div>
            </Double>
            <Double
              id="about"
              title={aboutBusinessData.title}
              subtitle={aboutBusinessData.subtitle}
              imageSource={aboutBusinessData.imageSource}
              imageAlt={aboutBusinessData.imageAlt}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: aboutBusinessData.contentHtml,
                }}
              />
            </Double>
            <Double
              title={aboutOwnerData.title}
              subtitle={aboutOwnerData.subtitle}
              imageSource={aboutOwnerData.imageSource}
              imageAlt={aboutOwnerData.imageAlt}
              imageLeft
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: aboutOwnerData.contentHtml,
                }}
              />
            </Double>
          </div>
          {/* <Button buttonText='LEARN MORE ABOUT FRASERS' buttonLink='/about' /> */}
        </section>
        <section id="menu" className="container">
          <h1 className="header hidden-header">MENU</h1>
          <MenuSection category="Starters" />
          <MenuSection category="Entrees" />
          {/* <Button buttonText="SEE FULL MENU ==>" buttonLink="/menu" /> */}
        </section>
        <section>
          <GalleryGrid />
        </section>
        <section id="contact">
          <div className="header">
            <h1>CONTACT US</h1>
          </div>
          <Contact />
        </section>
        <style jsx>{`
          .header {
            padding: 5rem 0 0;
            color: var(--primary-color-desaturated);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 5px;
          }
          .hidden-header {
            padding: 0;
            visibility: hidden;
          }
          .container {
            width: 100%;
            max-width: 1120px;
            background-color: var(--surface-color);
            /* background: var(--background-color); */
          }
          .double-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .special-menu {
            list-style-type: none;
            padding: 0;
            margin: 0;
            background-color: var(--surface-color);
            padding: 10px;
            border-radius: 7px;
          }
          .special-menu li {
            background-color: var(--surface-color);
            padding: 10px;
            border-radius: 7px;
          }
          @media (min-width: 460px) {
          }
        `}</style>
      </Layout>
    </>
  )
}

Home.propTypes = {
  aboutOwnerData: PropTypes.object,
  aboutBusinessData: PropTypes.object,
  announcement1Data: PropTypes.object,
  announcement2Data: PropTypes.object,
}
