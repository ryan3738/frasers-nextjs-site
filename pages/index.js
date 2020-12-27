import Head from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'

import Image from 'next/image'
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
import ImageLightBox from '../components/image-light-box'

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
          {/* <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script> */}
        </Head>
        <section className="container">
          {/* <h1 className="header hidden-header-off">
            Christmas Four Course Plating
          </h1>
          <ImageLightBox /> */}
          <div className="double-wrapper">
            <Double
              id="new-years"
              title={"Four Course NEW YEAR'S EVE DINNER"}
              subtitle="$65 Per Person"
              imageSource="/images/new-years-square.jpg"
              imageAlt="Fireworks in the night sky"
            >
              <div>
                <ul className="special-menu">
                  <li>
                    <strong>DUCK & PHEASANT PATE</strong>
                    <p>
                      Blackberry mustard, pickled vegetables, tapioca ink chips
                    </p>
                  </li>
                  <li>
                    <strong>CIOPPINO</strong>
                    <p>
                      Prawns, scallops, octopus, crab, tomato saffron seafood
                      broth
                    </p>
                  </li>
                  <li>
                    <strong>CORNISH GAME HEN</strong>
                    <p>
                      Wild mushroom mousse, Butternut squash orzo, asparagus,
                      sauce Forestiere
                    </p>
                    <b>OR</b>
                    <br />
                    <br />
                    <strong>FILET MIGNON</strong>
                    <p>
                      Brie stuffed wrapped in prosciutto, garlic mash, veg,
                      braising reduction
                    </p>
                  </li>
                  <li>
                    <strong>CHOCOLATE TARTE</strong>
                    <p>Hazelnut mousse, white chocolate pips, tuille</p>
                  </li>
                  <li>
                    <Button
                      buttonText="PREORDER NOW"
                      buttonLink="https://frasersgh.square.site/s/order?location=11eb3e7a2d8bba1b964a0cc47a2ae124"
                    />
                  </li>
                </ul>
              </div>
            </Double>

            {/* <Double
              id='takeout'
              title='FRASERS TAKEOUT'
              // subtitle='To purchase a gift card please visit our online store or call us at 360-279-1231 '
              imageSource='/images/wine-takeout-bag-square.jpg'
              imageAlt='Picture of frasers gourmet hideaway takeout bag and a glass of wine'
            >
              <div>
                <ul>
                  <li>Precooked Ready to Reheat Meals</li>
                  <li>Place orders by Thursday at 6 pm</li>
                  <li>Pickup Saturday from 2-4 pm</li>
                  <li>Place Orders Online</li>
                  <li>Or Call {siteData.phoneNumber}</li>
                </ul>
              </div>
              <Button
                buttonText='ORDER ONLINE'
                buttonLink='https://frasersgh.square.site/s/order?location=11ea7f380b303525a95a0cc47a2aeaec'
              />
              <br />
              <br />
              <br />
              <h4>Sign up for our newsletter to receive updates</h4>
              <Button
                buttonText='SIGN UP'
                buttonLink='https://squareup.com/outreach/sgPDT7/subscribe'
              />
              <br />
              <br />
              <p>We respect your privacy</p>
            </Double> */}
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
                <br />
                <br />
                Happy Holidays and thank you for your support!
              </div>
            </Double>

            {/* <a className='anchor' id='new-years'></a> */}
          </div>
          <a className="anchor" id="christmas" />
          <h2 className="header hidden-header-off">
            Christmas Four Course Plating
          </h2>
          <ImageLightBox />
          <div className="double-wrapper">
            <Double
              // id="christmas"
              title="FOUR COURSE CHRISTMAS DINNER"
              subtitle="$55 Per Person"
              imageSource="/images/happy-holidays-pig-square.jpg"
              imageAlt="Frasers pig happy holidays"
            >
              <div>
                <ul className="special-menu">
                  <li>
                    <strong>TOMATO BURRATA SALAD</strong>
                    <p>
                      Oven-roasted tomatoes, burrata mozzarella, pickled
                      asparagus, prosciutto, baba ghanouj
                    </p>
                  </li>
                  <li>
                    <strong>SMOKED ONION SOUP</strong>
                    <p>
                      Applewood smoked Walla Walla Onions, crème fraîche, crispy
                      shallots
                    </p>
                  </li>
                  <li>
                    <strong>SRF KUROBUTA PORK CHOP</strong>
                    <p>
                      Spaetzle, asparagus, pickled red cabbage, Dijonnaise cream
                      sauce
                    </p>
                    <b>OR</b>
                    <br />
                    <br />
                    <strong>TEXAS LONG BONE SHORT RIB</strong>
                    <p>
                      Tender giant bone-in short rib, garlic mash, vegetables,
                      braising reduction
                    </p>
                  </li>
                  <li>
                    <strong>SWEET POTATO PECAN PIE</strong>
                    <p>Caramel sauce, maple whip</p>
                  </li>
                </ul>
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
          {/* <MenuSection category='Entrees' /> */}
          {/* <Button buttonText='SEE FULL MENU ==>' buttonLink='/menu' /> */}
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
            width: 100vw;
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
  aboutOwnerData: PropTypes.string,
  aboutBusinessData: PropTypes.string,
  announcement1Data: PropTypes.string,
  announcement2Data: PropTypes.string,
}
