import Image from 'next/image';
import gallery from '../public/data/gallery-grid.json';

const getGalleryItem = () => (
  <>
    <div className="gallery-container">
      {gallery
        // .filter((e) => e.Category === category)
        //   .filter((e) => e.Available === true)
        .map((data) => (
          <div
            key={data.imageAlt}
            id="image-div"
            // className={data.imageSize}
          >
            <div className="image-overlay"> </div>
            <div className="overlay-text">{data.imageAlt}</div>
            <Image
              className="image"
              src={data.imageSource}
              alt={data.imageAlt}
              layout="responsive"
              objectFit="cover"
              height="560"
              width="560"
              // placeholder="blur"
              // blurDataURL="/public/favicon-32x32.png"
            />
          </div>
        ))}
    </div>
    <style jsx>{`
      .gallery-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: stretch;
        justify-content: center;
        text-align: center;
      }

      .image {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 400;
      }
      #image-div {
        position: relative;
        display: inline-block;
        height: auto;
        max-width: 360px;
        width: 100vw;
        border: 0px solid black;
        padding: 5px;
      }

      .image-overlay {
        position: absolute;
        z-index: 500;
        margin: 0 auto;
        left: 0;
        bottom: 0;
        /* Set the width of the positioned div*/
        width: 100%;
        height: 100%;
        background: var(--background-color);
        opacity: 0;
      }
      #image-div:active .image-overlay,
      #image-div:hover .image-overlay {
        opacity: 0.4;
      }

      #image-div:hover .overlay-text,
      #image-div:active .overlay-text {
        opacity: 1;
      }

      .overlay-text {
        position: absolute;
        z-index: 500;
        margin: 0 auto;
        padding: 1.5rem;
        left: 0;
        bottom: 0;
        text-align: left;
        /* Set the width of the positioned div*/
        width: 100%;
        text-transform: uppercase;
        line-height: 1.2;
        font-size: 2em;
        color: var(-high-emphasis-text);
        font-weight: bold;
        opacity: 0;
      }
    `}</style>
    {/* <style jsx>{`
        .gallery-container {
          margin-top: 2rem;
          display: grid;
          grid-gap: 5px;
          grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
          grid-auto-rows: 120px;
          grid-auto-flow: dense;
        }
        #image-div {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          color: #ffeead;
        }

        .image {
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
      `}</style> */}
  </>
);

export default function GalleryGrid() {
  return <>{getGalleryItem(gallery)}</>;
}
