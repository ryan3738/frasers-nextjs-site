import { TypographyH2, TypographyMuted } from '@/components/ui/typography';
import { BusinessInfoQuery } from '@/tina/__generated__/types';
interface HoursProps {
  hours: BusinessInfoQuery['businessInfo']['hours'];
}

export function Hours({ hours }: HoursProps) {
  if (hours) {
    return (
      <div className="flex flex-col items-center">
        <div className="border-b border-accent-foreground">
          <TypographyH2 className="flex flex-col items-center">
            HOURS
          </TypographyH2>
        </div>
        <div>
          {hours.map(item => (
            <div
              key={item?.day}
              className="mb-6 mt-2 flex flex-col items-center"
            >
              <div>
                <strong className="uppercase">{item?.day}</strong>
              </div>
              <div>
                <TypographyMuted className="uppercase">
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
