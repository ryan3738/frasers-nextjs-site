import { ThemeToggle } from '@/components/theme-toggle';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle
} from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <ThemeToggle />
        </CardHeader>
        <CardContent className="w-56 space-y-2">
          <div className="bg-background text-foreground">Default</div>
          <div className="bg-primary text-primary-foreground">Primary</div>
          {/* <div className="bg-primary/80 text-primary-foreground">
            Primary/80
          </div> */}
          <div className="bg-secondary text-secondary-foreground">
            Secondary
          </div>
          <div className="bg-accent text-accent-foreground">Accent</div>
          <div className="bg-muted text-muted-foreground">Muted</div>
          <div className="bg-popover text-popover-foreground">Popover</div>
          <div className="bg-card text-card-foreground">Card</div>
          <div className="border-2">Border</div>
          <div className="bg-facebook">Facebook</div>
          <div className="bg-instagram">Instagram</div>
          <div className="bg-destructive text-destructive-foreground">
            Destructive
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
