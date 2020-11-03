export default function GalleryGrid(props) {
  return (
    <>
      <div className='gallery-container'>
        <div className='big'>
          <img src='images/lobster_tail_paella.jpg' alt='lobster tail paella' />
        </div>
        <div>
          <img src='images/pork_rillettes.jpg' alt='pork rilletes' />
        </div>
        <div className='vertical'>
          <img
            src='images/wine-takeout-bag.jpg'
            alt='wine takeout bag with frasers logo'
          />
        </div>
        <div>
          <img src='images/wild_boar.jpg' alt='wild boar with broccolini' />
        </div>
        <div>
          <img src='images/fanny_bay_oysters.jpg' alt='raw fanny bay oysters' />
        </div>
        <div>
          <img src='images/samosa.jpg' alt='samosa appetizer' />
        </div>
        <div className='big'>
          <img
            src='images/beef_pork_cheek_burger.jpg'
            alt='beef pork cheek burger'
          />
        </div>
        <div>
          <img src='images/ahi_poke.jpg' alt='ahi poke appetizer' />
        </div>
        <div className='vertical'>
          <img src='images/crab-claw.jpg' alt='crab claw appetizer' />
        </div>
        <div>
          <img src='images/bananas_foster.jpg' alt='bananas foster dessert' />
        </div>
        <div className='big'>
          <img
            src='images/meyer-lemon-tart.jpg'
            alt='meyer lemon tart dessert'
          />
        </div>
        <div className='horizontal'>
          <img
            src='images/profiterole-pumpkin-ice-cream.jpg'
            alt='profiterole with pumpkin ice creem'
          />
        </div>
        <div>
          <img src='images/ramos_gin_fizz.jpg' alt='ramos gin fiz drink' />
        </div>
        <div>
          <img src='images/lamb.jpg' alt='lamb entree' />
        </div>
        <div className='horizontal'>
          <img src='images/wild-boar-ragout.jpg' alt='wild boar ragout' />
        </div>
        <div>
          <img src='images/cappuccino.jpg' alt='cappuccino' />
        </div>
        <div>
          <img src='images/squash-blossom.jpg' alt='squash blossom appetizer' />
        </div>
        <div>
          <img src='images/escargot.jpg' alt='escargot appetizer' />
        </div>
        <div>
          <img
            src='images/mustache-biscuit.jpg'
            alt='biscuit with mustache design'
          />
        </div>
        <div>
          <img
            src='images/neah-bay-salmon-blueberry-beurre-blanc.jpeg'
            alt='neah bay salmon bluebeery beurre blanc'
          />
        </div>
        <div>
          <img src='images/fish-lentils-sauce.jpg' alt='fish lentils sauce' />
        </div>
        <div className='big'>
          <img src='images/nehi_cocktail.jpg' alt='nehi cocktail' />
        </div>
        <div>
          <img src='images/pan_seared_venison.jpg' alt='pan seared venison' />
        </div>
        <div>
          <img
            src='images/pan_seared_wild_ling_cod.jpg'
            alt='pan seared wild ling cod'
          />
        </div>
        <div>
          <img
            src='images/frasers_art.jpg'
            alt='art hanging at frasers gourmet hideaway'
          />
        </div>
        <div>
          <img src='images/albacore_tuna.jpg' alt='albacore tuna entree' />
        </div>
        <div>
          <img
            src='images/ice-cream-strawberrry-rhubarb.jpg'
            alt='strawberry rhubarb dessert'
          />
        </div>
      </div>
      <style jsx>{`
        .gallery-container {
          margin-top: 2rem;
          grid-area: c5;
          display: grid;
          grid-gap: 5px;
          grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
          grid-auto-rows: 120px;
          grid-auto-flow: dense;
        }

        .gallery-container > div {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          color: #ffeead;
        }

        .gallery-container > div > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .horizontal {
          grid-column: span 2;
        }

        .vertical {
          grid-row: span 2;
        }

        .big {
          grid-column: span 2;
          grid-row: span 2;
        }
      `}</style>
    </>
  );
}
