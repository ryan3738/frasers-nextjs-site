import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import Layout, { siteTitle } from './Layout';
import Double from './Double.tsx';
import GalleryGrid from './GalleryGrid';
import Contact from './Contact';
import Button from './Button';
import MenuSection from './MenuSection';
import siteData from '../public/data/site-data.json';
import styles from '../styles/styles.module.css';

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
          <h2 id="about" className={`${styles.header} ${styles.hiddenHeader}`}>
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
                {/* <br />
                <br />
                <Button
                  buttonText="ORDER GIFT CARDS ONLINE"
                  buttonLink="https://frasersgh.square.site/product/gift-card/88"
                /> */}
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
          <div className={styles.header}>
            <h1>MENU</h1>
          </div>
          <MenuSection category="Starters" />
          <MenuSection category="Entrees" />
          {/* <Button buttonText="SEE FULL MENU ==>" buttonLink="/menu" /> */}
        </section>
        <section>
          <div className={styles.header}>
            <h1>Gallery</h1>
          </div>
          <GalleryGrid />
        </section>
        <section id="contact">
          <div className={`${styles.header} ${styles.hiddenHeader}`}>
            <h1>CONTACT</h1>
          </div>
          <Contact />
        </section>
        <style jsx>{`
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
  );
}

Home.propTypes = {
  aboutOwnerData: PropTypes.object,
  aboutBusinessData: PropTypes.object,
  announcement1Data: PropTypes.object,
  announcement2Data: PropTypes.object,
};
