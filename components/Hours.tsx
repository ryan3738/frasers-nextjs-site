import { BusinessInfoHours} from '../.tina/__generated__/types'

interface HoursProps {
    hours: BusinessInfoHours[];
}

export default function Hours({ hours }: HoursProps) {
    if (hours) {
    return (
      <>
        <h3>HOURS</h3>
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
        .uppercase {
          text-transform: uppercase;
        }
        .item-detail {
            margin: 1.45rem 0 0 0;
          }
      `}</style>
      </>
    )};
}
