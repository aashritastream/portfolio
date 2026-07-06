import Link from "next/link";
import { LockIcon } from "@/components/icons";

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-background">
      <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-1.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full border border-white/60" />
          <span className="h-2.5 w-2.5 rounded-full border border-white/60" />
          <span className="h-2.5 w-2.5 rounded-full border border-white/60" />
        </div>
        <span className="ml-2 text-[11px] tracking-wide text-white/50">
          aashritanatesan.dev
        </span>
      </div>

      <div className="mx-auto flex max-w-4xl items-stretch justify-between">
        <Link
          href="/"
          className="px-4 py-3 text-[13px] font-medium tracking-tight"
        >
          Aashrita Natesan
        </Link>
        <nav className="flex">
          <NavTab href="/#work" label="Work" />
          <NavTab href="/#contact" label="Contact" />
          <NavTab href="/inquiries" label="Inquiries" />
          <NavTab href="/client-work" label="Client work" icon={<LockIcon />} />
        </nav>
      </div>
    </header>
  );
}

function NavTab({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1.5 border-l border-black/10 px-4 py-3 text-[13px] text-foreground/60 transition-colors hover:bg-black/[0.03] hover:text-foreground"
    >
      {icon}
      {label}
    </Link>
  );
}
