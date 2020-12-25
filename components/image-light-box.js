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
              src="/images/2020-christmas-takeout.jpeg"
              alt="Christmas four course meal"
            />
          </div>
          <div className="image">
            <img
              src="/images/tomato-burrata-salad.jpeg"
              alt="Tomato burrata salad"
            />
          </div>
          <div className="image">
            <img src="/images/smoked-onion-soup.jpeg" alt="Smoked onion soup" />
          </div>
          <div className="image">
            <img
              src="/images/srf-kurobuta-pork-chop.jpeg"
              alt="Kurobuta pork chop"
            />
          </div>
          <div className="image">
            <img
              src="/images/texas-long-bone-short-rib-christmas.jpeg"
              alt="Texax long bone short ribs"
            />
          </div>
          <div className="image">
            <img
              src="/images/sweet-potato-pecan-pie.jpeg"
              alt="Sweet potato pecan pie"
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
