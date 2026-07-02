import Link from "next/link";

export function Nav() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-[15px] font-medium">
          Aashrita Natesan
        </Link>
        <nav className="flex gap-5 text-[13px] text-foreground/60">
          <Link href="/#work" className="hover:text-foreground">
            Work
          </Link>
          <Link href="/#contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
