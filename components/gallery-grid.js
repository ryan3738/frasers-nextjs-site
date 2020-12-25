import Image from 'next/image'
import gallery from '../public/data/gallery-grid.json'

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
            <Image
              className="image"
              src={data.imageSource}
              alt={data.imageAlt}
              layout="responsive"
              objectFit="cover"
              height="560"
              width="560"
              // unoptimized={true}
              // unsized='true'
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
      }

      #image-div {
        display: inline-block;
        height: auto;
        max-width: 360px;
        width: 100vw;
        border: 0px solid red;
        padding: 5px;
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
)

export default function GalleryGrid() {
  return <>{getGalleryItem(gallery)}</>
}
