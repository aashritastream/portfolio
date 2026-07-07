import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-black/15">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-10 text-center">
        <p className="text-[13px] text-foreground/60">
          Open to AI analyst roles — always happy to talk about agents, evals, or
          the projects above.
        </p>
        <div className="flex gap-5 text-[13px]">
          <a
            href="mailto:aashrita.natesan@gmail.com"
            className="underline decoration-black/20 underline-offset-4 hover:decoration-foreground"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/aashrita-natesan/"
            className="underline decoration-black/20 underline-offset-4 hover:decoration-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/aashritastream"
            className="underline decoration-black/20 underline-offset-4 hover:decoration-foreground"
          >
            GitHub
          </a>
          <Link
            href="/inquiries"
            className="underline decoration-black/20 underline-offset-4 hover:decoration-foreground"
          >
            Inquiries
          </Link>
        </div>
      </div>
    </footer>
  );
}
