import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GithubMark } from "@/components/icons";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6 py-14">
          <Link
            href="/#work"
            className="text-[13px] text-foreground/50 hover:text-foreground"
          >
            ← back to work
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            <span className="bg-foreground px-2 py-0.5 text-[10px] uppercase tracking-wider text-background">
              Case study
            </span>
            {project.categories.map((category) => (
              <span
                key={category}
                className="border border-black/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-foreground/60"
              >
                {category}
              </span>
            ))}
          </div>

          <h1 className="mt-3 text-[26px] font-medium tracking-tight">
            {project.title}
          </h1>
          <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-foreground/70">
            {project.oneLiner}
          </p>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 border border-foreground px-3 py-1.5 text-[13px] font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            <GithubMark />
            View source on GitHub
          </a>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border border-black/10 bg-black/[0.03] px-2 py-0.5 text-[11px] text-foreground/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.videoUrl && (
            <>
              <video
                className="mt-8 w-full border border-black/15"
                src={project.videoUrl}
                poster={project.screenshot}
                controls
                preload="metadata"
              />
              <p className="mt-2 text-[13px] font-medium leading-relaxed text-foreground/80">
                Disclaimer: all data shown in this demo is synthetic mock data
                and is not representative of any real person or organization.
              </p>
            </>
          )}

          <section className="mt-10">
            <h2 className="mb-2 text-[12px] text-foreground/50">
              {"// the problem"}
            </h2>
            <p className="text-[14px] leading-relaxed text-foreground/80">
              {project.problem}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-2 text-[12px] text-foreground/50">
              {"// the approach"}
            </h2>
            <ul className="space-y-2">
              {project.approach.map((step) => (
                <li
                  key={step}
                  className="flex gap-2 text-[14px] leading-relaxed text-foreground/80"
                >
                  <span className="text-foreground/40">–</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="mb-2 text-[12px] text-foreground/50">
              {"// the outcome"}
            </h2>
            <p className="text-[14px] leading-relaxed text-foreground/80">
              {project.outcome}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
