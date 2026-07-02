import { Nav } from "@/components/Nav";
import { Avatar } from "@/components/Avatar";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        <section className="bg-pink-50">
          <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center">
            <Avatar />
            <p className="mt-6 text-[13px] font-medium text-pink-800">
              Hi, I&apos;m Aashrita
            </p>
            <h1 className="mt-2 max-w-xl text-[28px] font-medium leading-tight text-balance">
              I build AI tools that perform beyond the demo
            </h1>
            <p className="mt-4 max-w-md font-serif text-[15px] leading-relaxed text-foreground/70">
              AI analyst focused on agents, evals, and shipping Claude-powered
              products that hold up outside a demo.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href="#work"
                className="rounded-md bg-foreground px-4 py-2 text-[13px] font-medium text-background"
              >
                See what I&apos;ve built
              </a>
              <a
                href="#contact"
                className="rounded-md border border-black/15 px-4 py-2 text-[13px] font-medium"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-3xl px-6 py-16">
          <p className="mb-5 text-[13px] text-foreground/60">
            Things I&apos;ve shipped
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
