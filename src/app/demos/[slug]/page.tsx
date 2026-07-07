import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GithubMark } from "@/components/icons";
import { demos, getDemo } from "@/lib/demos";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = getDemo(slug);

  if (!demo) {
    notFound();
  }

  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6 py-14">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="bg-foreground px-2 py-0.5 text-[10px] uppercase tracking-wider text-background">
              Private link
            </span>
            {demo.categories.map((category) => (
              <span
                key={category}
                className="border border-black/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-foreground/60"
              >
                {category}
              </span>
            ))}
          </div>

          <p className="mt-3 text-[13px] text-foreground/50">
            {demo.company} — {demo.role}
          </p>
          <h1 className="mt-1 text-[26px] font-medium tracking-tight">
            {demo.title}
          </h1>
          <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-foreground/70">
            {demo.greeting}
          </p>

          <a
            href={demo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 border border-foreground px-3 py-1.5 text-[13px] font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            <GithubMark />
            View source on GitHub
          </a>

          <video
            className="mt-8 w-full border border-black/15"
            src={demo.videoUrl}
            poster={demo.screenshot}
            controls
            preload="metadata"
          />
          <p className="mt-2 text-[11px] leading-relaxed text-foreground/50">
            Disclaimer: all data shown in this demo is synthetic mock data and
            is not representative of any real person or organization.
          </p>

          <section className="mt-10">
            <h2 className="mb-2 text-[12px] text-foreground/50">
              {"// what this shows"}
            </h2>
            <ul className="space-y-2">
              {demo.highlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-[14px] leading-relaxed text-foreground/80"
                >
                  <span className="text-foreground/40">–</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t border-black/15 pt-8">
            <h2 className="mb-4 text-[12px] text-foreground/50">
              {"// my other work"}
            </h2>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="text-[14px] underline decoration-black/20 underline-offset-4 hover:decoration-foreground"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className="mt-4 inline-block text-[13px] text-foreground/50 hover:text-foreground"
            >
              ← back to the full portfolio
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
