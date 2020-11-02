export default function Contact() {
  return (
    <>
      <div className='contact-header'>
        <h2 className='light-text'>CONTACT US</h2>
      </div>
      <div className='contact-content'>
        <div id='contact-info'>
          <h3>LOCATION</h3>
          <p>
            <span className='light-text'>
              1191 SE DOCK ST STE 101
              <br />
              OAK HARBOR, WA 98277
              <br />
              <br />
              <a href='tel:13602791231'>360-279-1231</a>
              <br />
              <h3>
                <a href='https://www.google.com/maps/dir//Frasers+Gourmet+Hideaway+1191+SE+Dock+St+STE+101,+Oak+Harbor,+WA+98277'>
                  Get Directions
                </a>
              </h3>
            </span>
          </p>
        </div>

        <div className='social-media-container'>
          <h3>For specials and event info follow us on social media</h3>
          <div className='social-media-contents'>
            <div className='facebook'>
              <a href='http://facebook.com/frasersgh'>
                <img
                  // style='max-width:100%; max-height: auto;'
                  src='images/facebook-logo.png'
                  alt='facebook'
                />
              </a>
            </div>
            <div className='instagram'>
              <a href='https://www.instagram.com/frasersgourmethideaway/'>
                <img
                  // style='max-width:100%; max-height: auto;'
                  src='images/instagram-logo.png'
                  alt='instagram'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
