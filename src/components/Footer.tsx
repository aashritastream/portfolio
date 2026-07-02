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
            href="mailto:your-email@example.com"
            className="text-pink-600 hover:underline"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/your-handle"
            className="text-pink-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-handle"
            className="text-pink-600 hover:underline"
          >
            GitHub
          </a>
        </div>
        <p className="text-[11px] text-foreground/40">
          Replace the links above with your real email, LinkedIn, and GitHub.
        </p>
      </div>
    </footer>
  );
}
