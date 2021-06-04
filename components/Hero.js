import Image from 'next/image'
import siteData from '../public/data/site-data.json'
// import utilStyles from '../styles/utils.module.css'
import Button from './Button'

export default function Hero(props) {
  return (
    <>
      <div id="welcome" className="welcome-container">
        <div className="welcome-box">
          <div className="welcome-inner-box">
            {/* <!-- <div class="welcome-contents"> --> */}
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
              href={siteData.address.directions}
              target="_blank"
              rel="noreferrer noopener"
            >
              {`${siteData.address.street} ${siteData.address.street2}`}
              <br />
              {`${siteData.address.city}, ${siteData.address.state} ${siteData.address.zipCode}`}
            </a>
            <br />
            <br />
            <h3>Call To Make a Reservation</h3>
            <p>
              <strong> CALL FOR TAKEOUT</strong>
              <br />
            </p>
            {/* <Button
              buttonText="ORDER ONLINE"
              buttonLink={siteData.websites.onlineStore}
            /> */}
            <a href={`tel:${siteData.phoneNumber}`}>{siteData.phoneNumber}</a>
            <br />
            <br />
            {/* <strong>TUE - SAT</strong> <br /> */}
            {/* <p> <strong>CLOSED</strong> <br/>9/8/20 to 9/9/20</p><br/> */}
            {/* <p>
              <span className='medium-emphasis'>
                4:30 | 5:00 | 5:30 | 7:00 | 7:30
              </span>
              <br />
            </p> */}
            <p>
              <strong>JUNE 27 - JULY 12</strong>
              <br />
              <span className="medium-emphasis">CLOSED</span>
              <br />
              <br />
              <strong>TUE - SAT</strong>
              <br />
              <span className="medium-emphasis">OPEN AT 4:30</span>
              <br />
              <br />
              <strong>TUE - THURS</strong>
              <br />
              <span className="medium-emphasis">LAST SEATING AT 7:30</span>
              <br />
              <br />
              <strong>FRI - SAT</strong>
              <br />
              <span className="medium-emphasis">LAST SEATING AT 8:00</span>
            </p>
            <p>
              <strong>SUN - MON</strong> |{' '}
              <span className="medium-emphasis">CLOSED</span>
            </p>
            {/* <!-- </div> --> */}
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
  )
}
