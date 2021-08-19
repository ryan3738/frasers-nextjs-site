// import utilStyles from '../styles/utils.module.css'

import Double from './orig.double';

export default function Contact(props) {
  return (
    <>
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

      <style jsx>{`
        /* .contact-container {
          display: flex;
          flex-direction: column;
        } */
        /* .contact-header {
          padding: 3rem 0 0;
        } */

        .contact-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
        }
        .social-media-container {
          display: flex;
          flex-direction: column;
          /* justify-content: flex-start; */
          /* align-items: flex-start; */
          margin: 10px;
        }
        .social-media-contents {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
