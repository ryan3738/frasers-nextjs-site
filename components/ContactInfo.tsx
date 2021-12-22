// import utilStyles from '../styles/utils.module.css'

import {
  BusinessInfo,
  BusinessInfoAddress,
} from '../.tina/__generated__/types';

interface ContactProps {
  heading: string;
  address?: BusinessInfoAddress;
  phoneNumber?: BusinessInfo['phoneNumber'];
}

export default function ContactInfo({
  heading,
  address,
  phoneNumber,
}: ContactProps): JSX.Element {
  return (
    <>
      {heading && (
        <h2 className="header-wrapper">
          {heading}
          <div className="divider" />
        </h2>
      )}
      <div>
        <span className="medium-emphasis">
          {address && (
            <div className="item-detail">
              {`${address.street} ${address.street2}`}
              <br />
              {`${address.city}, ${address.region} ${address.zip}`}
            </div>
          )}
          {phoneNumber && (
            <div className="item-detail">
              <a href={`tel:${phoneNumber}`} title="Click to Get Directions">
                {phoneNumber}
              </a>
            </div>
          )}
          {address?.directions && (
            <div className="item-detail">
              <a
                href={address.directions}
                target="_blank"
                rel="noreferrer noopener"
                className=""
              >
                <b>Get Directions</b>
              </a>
            </div>
          )}
        </span>
      </div>
      <style jsx>{`
        .header-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .item-detail {
          margin: 1.45rem 0 0 0;
        }
        .divider {
          border: 1px solid var(--primary-color-desaturated);
          width: 80%;
          height: 1px;
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
}
