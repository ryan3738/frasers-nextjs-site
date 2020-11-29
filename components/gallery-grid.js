import gallery from '../public/data/gallery-grid.json';
import Image from 'next/image';

const getGalleryItem = (gallery) => {
  return (
    <>
      <div className='gallery-container'>
        {gallery
          // .filter((e) => e.Category === category)
          //   .filter((e) => e.Available === true)
          .map((data) => {
            return (
              <div
                key={data.imageAlt}
                id='image-div'
                className={data.imageSize}
              >
                <img
                  className='image'
                  src={data.imageSource}
                  alt={data.imageAlt}
                  // layout='fill'
                  // objectFit='cover'
                  // height='250'
                  // width='250'
                  // unoptimized={true}
                  // unsized='true'
                />
              </div>
            );
          })}
      </div>
      <style jsx>{`
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
      `}</style>
    </>
  );
};

export default function GalleryGrid() {
  return <>{getGalleryItem(gallery)}</>;
}
