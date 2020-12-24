import Image from 'next/image'
import siteData from '../public/data/site-data.json'
// import utilStyles from '../styles/utils.module.css'
import Button from './button'

export default function Hero (props) {
  return (
    <>
      <div id="welcome" className="welcome-container">
        <div className="welcome-box">
          <div className="welcome-inner-box">
            {/* <!-- <div class="welcome-contents"> --> */}
            <p className="spaced-text">Est. | 2006</p>
            <h1 className="title">FRASERS</h1>
            <div className="welcome-logo">
              <Image
                src="/images/frasers-logo.png"
                alt="Frasers Gourmet Hideaway Logo"
                layout="responsive"
                width={228}
                height={104}
                priority={true}
              />
            </div>

            {/* <!-- <h6>HOME OF EXQUISITE<br />TASTES AND SERVICE</h6> --> */}
            <br />
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
            <h2>Now Serving Takeout!</h2>
            <Button
              buttonText="ORDER ONLINE"
              buttonLink="https://frasersgh.square.site/"
            />
            <br />
            <br />
            <a href={`tel:${siteData.phoneNumber}`}>{siteData.phoneNumber}</a>
            <br />
            <br />
            {/* <p>
              <strong> CALL FOR TAKEOUT</strong>
            </p>

            <h4>SEATING TIMES</h4> */}

            {/* <!-- <p> <strong>CLOSED</strong> <br>9/8/20 to 9/9/20</p><br> --> */}
            {/* <p>
              <strong>TUE - THUR</strong> <br />
              <span className='medium-emphasis'>
                4:30 | 5:00 | 5:30 | 7:00 | 7:30
              </span>
              <br />
            </p>
            <p>
              <strong>FRI - SAT</strong>
              <br />
              <span className='medium-emphasis'>
                4:30 | 5:00 | 5:30 | 7:00 | 7:30 | 8:00
              </span>
              <br />
            </p>
            <p>
              <strong>Sun - Mon</strong> |{' '}
              <span className='medium-emphasis'>CLOSED</span>
              <br />
            </p> */}
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
          grid-template-rows: 1fr 20fr 1fr;
          grid-template-areas:
            '. . .'
            '. w .'
            '. . .';
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: none;
          background-color: var(--background-color);
        }

        .welcome-box {
          padding: 10%;
          grid-area: w;
          background: var(--background-color);
          opacity: 0.97;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 250px;
        }

        .welcome-inner-box {
          outline: thin solid var(--primary-color-desaturated);
          padding: 10%;
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
          margin-bottom: 1rem;
        }
        @media (min-width: 460px) {
          .welcome-container {
            background-image: url('images/calamari-blue-cheese-sauce.jpg');
          }
        }
      `}</style>
    </>
  )
}
