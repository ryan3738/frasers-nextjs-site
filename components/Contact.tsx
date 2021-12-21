// import utilStyles from '../styles/utils.module.css'
import Social from './Social';
// import businessInfo from '../public/data/site-data.json';
import NewsLetter from './NewsLetter';
import { BusinessInfo } from '../.tina/__generated__/types';
import Hours from './Hours';
import ContactInfo from './ContactInfo';

interface ContactProps {
  businessInfo: BusinessInfo;
}

export default function Contact({ businessInfo }: ContactProps): JSX.Element {
  return (
    <>
      <div className="contact-content">
        <div id="contact-info">
          <div>
            <ContactInfo
              heading="Location"
              address={businessInfo.address}
              phoneNumber={businessInfo.phoneNumber}
            />
          </div>
          <div>
            <Hours hours={businessInfo.hours} />
          </div>
        </div>

        <div className="social-media-container">
          <NewsLetter />
          <h3>For specials and event info follow us on social media</h3>
          <div className="social-media-contents">
            <Social
              href="https://www.instagram.com/frasersgourmethideaway/"
              img="/images/instagram-logo.png"
              alt="frasers instagram"
              color="--color-instagram"
            />
            <Social
              href="http://facebook.com/frasersgh"
              img="/images/facebook-logo.png"
              alt="frasers facebook"
              color="--color-facebook"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
        }
        #contact-info {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          align-content: space-around;
          width: 100%;
          height: auto;
          margin: 0 0 1.45rem 0;
        }
        .social-media-container {
          display: flex;
          flex-direction: column;
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
