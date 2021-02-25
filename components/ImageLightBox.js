import Image from 'next/image'
import { SRLWrapper, useLightbox } from 'simple-react-lightbox'
import gallery from '../public/data/gallery-grid.json'

export default function ImageLightBox() {
  return (
    <>
      <SRLWrapper>
        <div className="photo-grid">
          <div className="image">
            <img
              src="/images/new-years-duck-pheasant-pate.jpg"
              alt="Duck & Pheasant Pate | blackberry mustard, pickled vegetables, tapioca ink chips"
              loading="lazy"
            />
          </div>
          <div className="image">
            <img
              src="/images/new-years-cioppino.jpg"
              alt="Seafood Cioppino | Prawns, scallops, octopus, crab, tomato saffron seafood broth"
              loading="lazy"
            />
          </div>
          <div className="image">
            <img
              src="/images/new-years-cornish-game-hen.jpg"
              alt="Cornish Game Hen | wild mushroom mousse, butternut squash orzo, asparagus, sauce forestiere"
              loading="lazy"
            />
          </div>
          <div className="image">
            <img
              src="/images/new-years-filet-mignon.jpg"
              alt="Filet Mignon | brie stuffed wrapped in prosciutto, garlic mash, veg, braising reduction"
              loading="lazy"
            />
          </div>
          <div className="image">
            <img
              src="/images/new-years-chocolate-tarte.jpg"
              alt="Chocolate Tarte | hazelnut mousse, white chocolate pips, tuille"
              loading="lazy"
            />
          </div>
        </div>
      </SRLWrapper>
      <style jsx>{`
        .photo-grid {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(auto-fit, minmax(240px, 360px));
          grid-auto-rows: 50vh;

          margin: 10px;
          justify-content: center;
        }
        .image > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .image > img:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}
