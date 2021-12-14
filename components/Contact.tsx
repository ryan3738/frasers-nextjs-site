// import utilStyles from '../styles/utils.module.css'
import Social from './Social';
// import businessInfo from '../public/data/site-data.json';
import NewsLetter from './NewsLetter';
import { BusinessInfo } from '../.tina/__generated__/types';

interface ContactProps {
  businessInfo: BusinessInfo;
}

export default function Contact({ businessInfo }: ContactProps) {
  return (
    <>
      <div className="contact-content">
        <div id="contact-info">
          <div>
            <h2>LOCATION</h2>
            <p>
              <span className="medium-emphasis">
                {`${businessInfo.address.street} ${businessInfo.address.street2}`}
                <br />
                {`${businessInfo.address.city}, ${businessInfo.address.region} ${businessInfo.address.zip}`}
                <br />
                <br />
                <a href="tel:13602791231">{businessInfo.phoneNumber}</a>
                <br />
                <br />
                <b>
                  <a
                    href={businessInfo.address.directions}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Get Directions
                  </a>
                </b>
              </span>
            </p>
          </div>
          <div>
            <h2>HOURS</h2>

            { businessInfo.hours && <div>
              {businessInfo.hours.map(item => (
                <div key={item.day}>
                  <div>
                    <strong>{item.day}</strong>
                  </div>
                  <div>
                    <span className="medium-emphasis">{item.hours}</span>
                  </div>
                  <br />
                </div>
              ))}
            </div>}
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
