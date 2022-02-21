import Image from 'next/image';
import { GalleryGridImages } from '../.tina/__generated__/types';
interface GridProps {
  images: GalleryGridImages[];
}

export default function GalleryGrid({ images }: GridProps): JSX.Element {
  return (
    <>
      <div className="gallery-container">
        {images.map(
          image =>
            image.src && (
              <div
                key={image.alt}
                id="image-div"
                // className={data.size}
              >
                <div className="image-overlay"> </div>
                <div className="overlay-text">{image.alt}</div>
                <Image
                  className="image"
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  objectFit="cover"
                  height="560"
                  width="560"
                />
              </div>
            )
        )}
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
        }
        #image-div {
          position: relative;
          display: inline-block;
          height: auto;
          max-width: 360px;
          width: 100vw;
          border: 0px solid black;
          outline-offset: -3px;
          outline: 0px solid var(--primary-color);
          padding: 12px;
          transition: all 0.3s ease-in-out;
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
          transition: all 0.3s ease-in-out;
        }

        #image-div:hover,
        #image-div:active {
          outline-offset: -12px;
          outline: 2px solid var(--primary-color);
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
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
}
