import Image from 'next/image'
import PropTypes from 'prop-types'

export default function Social(props) {
  return (
    <div className="social">
      <a href={props.href} target="_blank" rel="noreferrer noopener">
        <Image
          // style='max-width:100%; max-height: auto;'
          src={props.img}
          alt={props.alt}
          layout="fixed"
          objectFit="cover"
          height="45"
          width="45"
          quality="100"
        />
      </a>
      <style jsx>{`
        .social {
        }
        .social:hover {
        }
      `}</style>
    </div>
  )
}
Social.propTypes = {
  href: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  color: PropTypes.string,
}
