import { TypographyH2, TypographyMuted } from '@/components/ui/typography';
import { BusinessInfoQuery } from '@/tina/__generated__/types';
interface HoursProps {
  hours: BusinessInfoQuery['businessInfo']['hours'];
  hoursField?: string;
  hourItemFields?: Array<
    { day?: string; hours?: string } | undefined
  >;
}

export function Hours({ hours, hoursField, hourItemFields }: HoursProps) {
  if (hours) {
    return (
      <div className="flex flex-col items-center" data-tina-field={hoursField}>
        <div className="border-b border-accent-foreground">
          <TypographyH2 className="flex flex-col items-center">
            HOURS
          </TypographyH2>
        </div>
        <div>
          {hours.map((item, index) => (
            <div
              key={item?.day}
              className="mb-6 mt-2 flex flex-col items-center"
            >
              <div>
                <strong className="uppercase" data-tina-field={hourItemFields?.[index]?.day}>
                  {item?.day}
                </strong>
              </div>
              <div>
                <TypographyMuted
                  className="uppercase"
                  data-tina-field={hourItemFields?.[index]?.hours}
                >
                  {item?.hours}
                </TypographyMuted>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
