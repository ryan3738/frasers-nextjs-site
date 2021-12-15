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
            <div key={item.day}>
              <div>
                <strong>{item.day}</strong>
              </div>
              <div>
                <span className="medium-emphasis">{item.hours}</span>
              </div>
              <br />
            </div>
          ))}
        </div>
      </>
    )};
}
