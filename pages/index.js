import Head from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'

// import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts';
// import Date from '../components/date';
// import MenuSection from '../components/menu-section'
import Double from '../components/double.tsx'
import GalleryGrid from '../components/gallery-grid'
import Contact from '../components/contact'
import Button from '../components/button'
// import doubleItems from '../public/data/double.json';
import { getDoubleData } from '../lib/posts'
// import announcementPath from '../public/data/site-data.json'
import siteData from '../public/data/site-data.json'
// import ImageLightBox from '../components/image-light-box'

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
        </Head>
        <section className="container">
          <h2 id="about" className="anchor hidden-header">
            About
          </h2>
          {/* <ImageLightBox /> */}
          <div className="double-wrapper">
            <Double
              id="takeout"
              title="FRASERS TAKEOUT"
              // subtitle='To purchase a gift card please visit our online store or call us at 360-279-1231 '
              imageSource="/images/wine-takeout-bag-square.jpg"
              imageAlt="Picture of frasers gourmet hideaway takeout bag and a glass of wine"
            >
              <div>
                <ul>
                  <li>Precooked Ready to Reheat Meals</li>
                  <li>Place orders by Thursday at 10 pm</li>
                  <li>Pickup Saturday from 2-4 pm</li>
                  <li>Place Orders Online</li>
                  <li>Or Call {siteData.phoneNumber}</li>
                </ul>
              </div>
              <Button
                buttonText="ORDER ONLINE"
                buttonLink={siteData.websites.onlineStore}
              />
              <br />
              <br />
              <br />
              <h4>Sign up for our newsletter to receive updates</h4>
              <Button
                buttonText="SIGN UP"
                buttonLink="https://squareup.com/outreach/sgPDT7/subscribe"
              />
              <br />
              <br />
              <p>We respect your privacy</p>
            </Double>
            <Double
              id="valentines"
              title="Four Course VALENTINE'S DINNER"
              subtitle="$65 Per Person"
              imageSource="/images/chocolate-covered-strawberry-bombe-square.jpg"
              imageAlt="Chocolate covered strawberry bombe with chocolate heart"
            >
              <div>
                <ul className="special-menu">
                  <li>
                    <strong>WARM GOAT CHEESE SALAD</strong>
                    <p>
                      Cypress Grove aged goat cheese, arugula, cipollini onions
                    </p>
                  </li>
                  <li>
                    <strong>BRAISED SHORT RIB & BEET SOUP</strong>
                    <p>Crème Fraiche, Parmesan heart</p>
                  </li>
                  <li>
                    <strong>WAGYU FLAT IRON STEAK</strong>
                    <p>
                      Potato pave, wild mushroom bread pudding, veg, Brandy
                      peppercorn sauce
                    </p>
                    <b>OR</b>
                    <br />
                    <br />
                    <strong>SEAFOOD PAELLA</strong>
                    <p>
                      Scallops, prawns, lobster, clams, mussels, Spanish rice,
                      chorizo cream sauce
                    </p>
                  </li>
                  <li>
                    <strong>DARK CHOCOLATE PATE</strong>
                    <p>Cherry Compote, meringue, chocolate pretzels</p>
                  </li>
                  <li>
                    <Button
                      buttonText="ORDER NOW"
                      buttonLink="https://frasersgh.square.site/valentines-day?location=11ea7f380b303525a95a0cc47a2aeaec"
                    />
                  </li>
                </ul>
              </div>
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
                To purchase a gift card please visit our online store or call us
                at <span className="nowrap">{siteData.phoneNumber}</span>
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
          {/* <MenuSection category="Entrees" /> */}
          {/* <MenuSection category="Starters" /> */}
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
