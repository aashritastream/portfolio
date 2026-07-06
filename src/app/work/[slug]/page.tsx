import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
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
            ← Back to work
          </Link>

          <h1 className="mt-4 text-[24px] font-medium">{project.title}</h1>
          <p className="mt-2 font-serif text-[15px] leading-relaxed text-foreground/70">
            {project.oneLiner}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-black/5 px-2 py-0.5 text-[11px] text-foreground/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.videoUrl && (
            <video
              className="mt-8 w-full rounded-lg border border-black/10"
              src={project.videoUrl}
              controls
              preload="metadata"
            />
          )}

          <section className="mt-10">
            <h2 className="mb-2 text-[13px] font-medium text-pink-800">
              The problem
            </h2>
            <p className="text-[14px] leading-relaxed text-foreground/80">
              {project.problem}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-2 text-[13px] font-medium text-pink-800">
              The approach
            </h2>
            <ul className="space-y-2">
              {project.approach.map((step) => (
                <li
                  key={step}
                  className="flex gap-2 text-[14px] leading-relaxed text-foreground/80"
                >
                  <span className="text-pink-400">–</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="mb-2 text-[13px] font-medium text-pink-800">
              The outcome
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
