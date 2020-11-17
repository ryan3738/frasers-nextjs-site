import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function Hero(props) {
  return (
    <>
      <div id='welcome' className='welcome-container'>
        <div className='welcome-box'>
          <p className='scroll-text'>SCROLL DOWN</p>
          <div className='welcome-inner-box'>
            {/* <!-- <div class="welcome-contents"> --> */}
            <p className={utilStyles.spacedText}>Est. | 2006</p>
            <h1 className='title'>FRASERS</h1>

            <img
              className='welcome-logo'
              src='images/frasers-logo.gif'
              alt='Frasers Gourmet Hideaway Logo'
            />

            {/* <!-- <h6>HOME OF EXQUISITE<br />TASTES AND SERVICE</h6> --> */}
            <br />
            <a
              href='https://www.google.com/maps/dir//Frasers+Gourmet+Hideaway+1191+SE+Dock+St+STE+101,+Oak+Harbor,+WA+98277'
              target='_blank'
              rel='noreferrer noopener'
            >
              1191 SE Dock St #101
              <br />
              Oak Harbor, WA 98277
            </a>
            <br />
            <br />
            <a href='tel:13602791231'>360-279-1231</a>
            <br />
            <br />
            <p>
              <strong> CALL FOR TAKEOUT</strong>
            </p>

            <h4>SEATING TIMES</h4>

            {/* <!-- <p> <strong>CLOSED</strong> <br>9/8/20 to 9/9/20</p><br> --> */}
            <p>
              <strong>TUE - THUR</strong> <br />
              {/* <!-- <span style="white-space: nowrap;"> --> */}
              4:30 | 5:00 | 5:30 | 7:00 | 7:30
              {/* <!-- </span> --> */}
              <br />
              <br />
            </p>
            <p>
              <strong>FRI - SAT</strong>
              <br />
              {/* <!-- <span style="white-space: nowrap;"> --> */}
              4:30 | 5:00 | 5:30 | 7:00 | 7:30 | 8:00
              {/* <!-- </span> --> */}
              <br />
              <br />
            </p>
            <p>
              {' '}
              <strong>Sun - Mon</strong> | CLOSED
              <br />
            </p>
            {/* <!-- </div> --> */}
          </div>
        </div>
      </div>
      <style jsx>{`
      .scroll-text{
        font-size: 0.5rem;
        margin: 1% 0 1%;
        /* position: absolute; */
        /* padding: 10%; */
        /* margin: 10%; */
      }
        .welcome-container {
          margin-top: 4em;
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
          width: minmax(240px, auto);
          padding: 0 10% 10%;
          grid-area: w;
          background: var(--secondary-color);
        }

        .welcome-inner-box {
          outline: thin solid var(--primary-color);
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
          color: var(--main-white);
          text-align: center;
          display: none;
        }
        @media (min-width: 460px) {
          .welcome-container {
            background-image: url('images/calamari-blue-cheese-sauce.jpg');
        }
      `}</style>
    </>
  );
}
