export function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-10 text-center">
        <p className="text-[13px] text-foreground/60">
          Open to AI engineering roles — always happy to talk about agents, evals, or
          the projects below.
        </p>
        <div className="flex gap-5 text-[13px]">
          <a
            href="mailto:aashrita.natesan@gmail.com"
            className="text-pink-600 hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/aashrita-natesan/"
            className="text-pink-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/aashritastream"
            className="text-pink-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
