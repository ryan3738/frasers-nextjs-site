import { BusinessInfoHours } from '../.tina/__generated__/types';
interface HoursProps {
  hours: BusinessInfoHours[];
}

export default function Hours({ hours }: HoursProps): JSX.Element {
  if (hours) {
    return (
      <div className="hours-container">
        <h3 className="header-wrapper">
          HOURS
          <div className="divider" />
        </h3>
        <div>
          {hours.map(item => (
            <div key={item.day} className="item-detail">
              <div>
                <strong className="uppercase">{item.day}</strong>
              </div>
              <div>
                <span className="medium-emphasis uppercase">{item.hours}</span>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .header-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .uppercase {
            text-transform: uppercase;
          }
          .item-detail {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 0 1.45rem 0;
          }

          .hours-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .divider {
            border: 1px solid var(--primary-color-desaturated);
            width: 100%;
            height: 1px;
            margin-top: 1rem;
          }
        `}</style>
      </div>
    );
  }
}
