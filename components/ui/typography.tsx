import { cn } from '@/lib/utils';
// Based on samples here: https://ui.shadcn.com/docs/@/components/typography

export function TypographyH1(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}

export function PageHeading(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <TypographyH1 className={cn('mb-2 lg:mb-4', className)} {...rest}>
      {children}
    </TypographyH1>
  );
}

export function TypographyH2(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function TypographyH3(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

export function TypographyH4(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...rest}
    >
      {children}
    </h4>
  );
}

export function TypographyP(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...rest}
    >
      {children}
    </p>
  );
}

export function TypographyBlockquote(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...rest}
    >
      {children}
    </blockquote>
  );
}

export function TypographyInlineCode(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-md font-semibold',
        className
      )}
      {...rest}
    >
      {children}
    </code>
  );
}

export function TypographyLead(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <p className={cn('text-2xl text-muted-foreground', className)} {...rest}>
      {children}
    </p>
  );
}

export function TypographyLarge(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <div className={cn('text-lg font-semibold', className)} {...rest}>
      {children}
    </div>
  );
}

export function TypographyMedium(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <div className={cn('text-md font-semibold', className)} {...rest}>
      {children}
    </div>
  );
}

export function TypographySmall(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <small
      className={cn('text-sm font-medium leading-none', className)}
      {...rest}
    >
      {children}
    </small>
  );
}

export function TypographyMuted(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className, ...rest } = props;
  return (
    <div className={cn('text-md text-muted-foreground', className)} {...rest}>
      {children}
    </div>
  );
}
