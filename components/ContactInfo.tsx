// import utilStyles from '../styles/utils.module.css'

import { BusinessInfo, BusinessInfoAddress } from "../.tina/__generated__/types";


interface ContactProps {
    heading: string;
    address?: BusinessInfoAddress;
    phoneNumber?: BusinessInfo["phoneNumber"];

}

export default function ContactInfo({ heading, address, phoneNumber }: ContactProps) {
    return (
            <>
                {heading && <h2>{heading}</h2>}
                <p>
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
                        <a href={`tel:${phoneNumber}`} title="Click to Get Directions">{phoneNumber}</a>
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
                                <b >
                                Get Directions
                                </b>
                            </a>
                        </div>
                        )}
                    </span>
                </p>
        <style jsx>{`
            .item-detail {
            margin: 1.45rem 0 0 0;
          }
      `}</style>
    </>

    );
}
