import utilStyles from '../styles/utils.module.css';
import Social from './social';

export default function Contact() {
  return (
    <>
      {/* <div className='contact-header'> */}
      {/* <h3 className={utilStyles.lightText}>CONTACT US</h3> */}
      {/* </div> */}
      <div className='contact-content'>
        <div id='contact-info'>
          <h2>LOCATION</h2>
          <p>
            <span className='medium-emphasis'>
              1191 SE DOCK ST STE 101
              <br />
              OAK HARBOR, WA 98277
              <br />
              <br />
              <a href='tel:13602791231'>360-279-1231</a>
              <br />
              <br />
              <b>
                <a
                  href='https://www.google.com/maps/dir//Frasers+Gourmet+Hideaway+1191+SE+Dock+St+STE+101,+Oak+Harbor,+WA+98277'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  Get Directions
                </a>
              </b>
            </span>
          </p>
        </div>

        <div className='social-media-container'>
          <h3>For specials and event info follow us on social media</h3>
          <div className='social-media-contents'>
            <Social
              href='https://www.instagram.com/frasersgourmethideaway/'
              img='images/instagram-logo.png'
              alt='frasers instagram'
              color='--color-instagram'
            />
            <Social
              href='http://facebook.com/frasersgh'
              img='images/facebook-logo.png'
              alt='frasers facebook'
              color='--color-facebook'
            />
          </div>
        </div>
      </div>
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
