import Head from 'next/head';
import React from 'react';
import Layout, { meta } from './Layout';
import Double from './Double';
import GalleryGrid from './GalleryGrid';
import Contact from './Contact';
import siteData from '../public/data/site-data.json';
import styles from '../styles/styles.module.css';
import images from '../public/data/gallery-grid.json';
import { Menu } from './Menu/Menu';
import {Menu as MenuType, BusinessInfo} from '../.tina/__generated__/types';

const { aboutBusiness, aboutOwner } = siteData;

interface HomeProps {
  menu: MenuType;
  businessInfo: BusinessInfo;
}

export default function Home({ menu, businessInfo }: HomeProps) {
  const { phoneNumber } = businessInfo;
  return (
    <>
      <Layout home businessInfo={businessInfo}>
        <Head>
          <title>{meta.title}</title>
        </Head>
        <section className="container">
          <h2 id="about" className={`${styles.header} ${styles.hiddenHeader}`}>
            About
          </h2>
          <div className="double-wrapper">
            <Double
              id="about"
              title="Open New Year's Eve"
              subtitle="Special 5 Course Menu"
              imageSource="/images/gift-card-square.jpg"
              imageAlt="frasers gift card closeup"
            >
              <div>
                <p>Please call for details!</p>
                <h3>Gift Cards Available</h3>
                To purchase a gift card please call us at{' '}
                <span className="nowrap">{phoneNumber}</span>
              </div>
            </Double>
            <Double
              id="announcements"
              title="Open for Dine In Service"
              subtitle="To make a reservation call us at 360-279-1231"
              imageSource="/images/pig-were-back.jpg"
              imageAlt="Pig holding a sign that says were back"
            >
              <div>
                <h3>Takeout Is Still Available</h3>
                <p>
                  Call {phoneNumber} during normal business hours to place an
                  order
                </p>
              </div>
              <br />
              <br />
            </Double>

            <Double
              id="about"
              title={aboutBusiness.title}
              subtitle={aboutBusiness.subtitle}
              imageSource={aboutBusiness.src}
              imageAlt={aboutBusiness.alt}
            >
              <div>{aboutBusiness.content}</div>
            </Double>
            <Double
              title={aboutOwner.title}
              subtitle={aboutOwner.subtitle}
              imageSource={aboutOwner.src}
              imageAlt={aboutOwner.alt}
              imageLeft
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: aboutOwner.content
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
          <Menu menu={menu} pathName="/" categories={['Starters', 'Entrees']} />
        </section>
        <section id="gallery">
          <div className={styles.header}>
            <h1>Gallery</h1>
          </div>
          <GalleryGrid images={images} />
        </section>
        <section id="contact">
          <div className={`${styles.header} ${styles.hiddenHeader}`}>
            <h1>CONTACT</h1>
          </div>
          <Contact businessInfo={businessInfo} />
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
        `}</style>
      </Layout>
    </>
  );
}
