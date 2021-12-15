import Image from 'next/image';
import { BusinessInfo } from '../.tina/__generated__/types';
import Hours from './Hours';
interface HeroProps {
  businessInfo?: BusinessInfo;
}

export default function Hero({ businessInfo }: HeroProps) {
  return (
    <>
      <div id="welcome" className="welcome-container">
        <div className="welcome-box">
          <div className="welcome-inner-box">
            <p className="spaced-text">Est. | 2006</p>
            <br />
            <h1 className="title">FRASERS</h1>
            <div className="welcome-logo">
              <Image
                src="/images/frasers-logo.png"
                alt="Frasers Gourmet Hideaway Logo"
                layout="responsive"
                width={228}
                height={104}
                priority
              />
            </div>
            <br />
            {/* <h6>HOME OF EXQUISITE<br />TASTES AND SERVICE</h6> */}
            <a
              href={businessInfo.address.directions}
              target="_blank"
              rel="noreferrer noopener"
            >
              {`${businessInfo.address.street} ${businessInfo.address.street2}`}
              <br />
              {`${businessInfo.address.city}, ${businessInfo.address.region} ${businessInfo.address.zip}`}
            </a>
            <br />
            <br />
            <h3>Reservations Recommended</h3>
            <p>
              <strong> CALL FOR TAKEOUT</strong>
              <br />
            </p>
            {/* <Button
              buttonText="ORDER ONLINE"
              buttonLink={siteData.websites.onlineStore}
            /> */}
            <a href={`tel:${businessInfo.phoneNumber}`}>{businessInfo.phoneNumber}</a>
            <br />
            <br />
            <div>
              <Hours hours={businessInfo.hours} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .welcome-container {
          display: grid;
          justify-content: center;
          align-content: center;
          grid-template-columns: 2vw auto 2vw;
          grid-template-rows: 1fr 50fr 1fr;

          grid-template-areas:
            '. . .'
            '. w .'
            '. . .';
          background-color: var(--background-color);
          background-image: url('images/stars.png');
          width: 100%;
        }

        .welcome-box {
          padding: 1rem;
          grid-area: w;
          background: var(--background-color);
          background-image: url('images/stars.png');
          background-position: center center;
          opacity: 0.97;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 250px;
        }

        .welcome-inner-box {
          outline: thin solid var(--primary-color-desaturated);
          padding: 1rem;
        }

        .welcome-logo {
          max-width: 100%;
          max-height: auto;
          margin: auto;
          display: block;
        }

        .title {
          /* font-size: 3rem; */
          color: var(--primary-color);
          text-align: center;
          display: none;
        }
        .spaced-text {
          letter-spacing: 0.5rem;
          margin-bottom: 0;
        }
        @media (min-width: 460px) {
          .welcome-container {
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: none;
            background-image: url('images/calamari-blue-cheese-sauce.jpg');
          }
        }
      `}</style>
    </>
  );
}
