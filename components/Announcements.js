import Button from './Button';
import Double from './Double.tsx';

export default function Announcements() {
  return (
    <>
      <Double
        id="announcement"
        title="Frasers Closed"
        subtitle="Starting January 3rd"
        imageSource="/images/closed-square.jpg"
        imageAlt="closed sign in window"
        imageLeft
      >
        <div>
          <p>
            Frasers will be closing for a bit starting January 3rd to allow our
            staff to take a much-needed break. Stay tuned for updates on when we
            will be reopening. We hope everyone had a good holiday season and
            was able to safely connect with friends and family. Happy New Year &
            thank you so much for all of your support!
          </p>
          {/* <Button
                  buttonText="ORDER GIFT CARDS ONLINE"
                  buttonLink="https://frasersgh.square.site/product/gift-card/88"
                /> */}
        </div>
      </Double>
      <Double
        // id="new-years"
        title={"Four Course NEW YEAR'S EVE DINNER"}
        subtitle="$65 Per Person"
        imageSource="/images/new-years-square.jpg"
        imageAlt="Fireworks in the night sky"
      >
        <div>
          <ul className="special-menu">
            <li>
              <strong>DUCK & PHEASANT PATE</strong>
              <p>Blackberry mustard, pickled vegetables, tapioca ink chips</p>
            </li>
            <li>
              <strong>CIOPPINO</strong>
              <p>
                Prawns, scallops, octopus, crab, tomato saffron seafood broth
              </p>
            </li>
            <li>
              <strong>CORNISH GAME HEN</strong>
              <p>
                Wild mushroom mousse, Butternut squash orzo, asparagus, sauce
                Forestiere
              </p>
              <b>OR</b>
              <br />
              <br />
              <strong>FILET MIGNON</strong>
              <p>
                Brie stuffed wrapped in prosciutto, garlic mash, veg, braising
                reduction
              </p>
            </li>
            <li>
              <strong>CHOCOLATE TARTE</strong>
              <p>Hazelnut mousse, white chocolate pips, tuille</p>
            </li>
            <li>
              <Button
                buttonText="PREORDER NOW"
                buttonLink="https://frasersgh.square.site/s/order?location=11eb3e7a2d8bba1b964a0cc47a2ae124"
              />
            </li>
          </ul>
        </div>
      </Double>
      <Double
        id="christmas"
        title="FOUR COURSE CHRISTMAS DINNER"
        subtitle="$55 Per Person"
        imageSource="/images/happy-holidays-pig-square.jpg"
        imageAlt="Frasers pig happy holidays"
      >
        <div>
          <ul className="special-menu">
            <li>
              <strong>TOMATO BURRATA SALAD</strong>
              <p>
                Oven-roasted tomatoes, burrata mozzarella, pickled asparagus,
                prosciutto, baba ghanouj
              </p>
            </li>
            <li>
              <strong>SMOKED ONION SOUP</strong>
              <p>
                Applewood smoked Walla Walla Onions, crème fraîche, crispy
                shallots
              </p>
            </li>
            <li>
              <strong>SRF KUROBUTA PORK CHOP</strong>
              <p>
                Spaetzle, asparagus, pickled red cabbage, Dijonnaise cream sauce
              </p>
              <b>OR</b>
              <br />
              <br />
              <strong>TEXAS LONG BONE SHORT RIB</strong>
              <p>
                Tender giant bone-in short rib, garlic mash, vegetables,
                braising reduction
              </p>
            </li>
            <li>
              <strong>SWEET POTATO PECAN PIE</strong>
              <p>Caramel sauce, maple whip</p>
            </li>
          </ul>
        </div>
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
