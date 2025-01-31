export default function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <footer className="grid h-fit w-full place-items-center overflow-x-auto bg-accent p-4">
      {children}
      <div className="grid w-full items-center justify-center gap-1">
        <span>© 2022 Frasers Gourmet Hideaway</span>
        <span className="flex items-center justify-center gap-1">
          <span>Built by:</span>
          <a
            className="text-foreground/80"
            href="https://github.com/ryan3738"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ryan Fraser
          </a>
        </span>
      </div>
    </footer>
  );
}
