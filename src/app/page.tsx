import Link from "next/link";
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
        <section
          className="border-b border-black/15"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        >
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-3 text-[12px] text-foreground/50">
                  $ whoami
                </p>
                <h1 className="text-[36px] font-medium leading-[1.1] tracking-tight sm:text-[44px]">
                  Aashrita Natesan
                </h1>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-foreground/70">
                  I build AI tools that perform beyond the demo — an AI
                  analyst focused on agents, evals, and shipping Claude-powered
                  products that hold up outside a demo.
                </p>
                <div className="mt-6 flex gap-3">
                  <a
                    href="#work"
                    className="border border-foreground bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-colors hover:bg-background hover:text-foreground"
                  >
                    View work
                  </a>
                  <Link
                    href="/inquiries"
                    className="border border-black/20 bg-background px-4 py-2 text-[13px] font-medium transition-colors hover:border-foreground"
                  >
                    Inquiries
                  </Link>
                </div>
              </div>
              <Avatar size={104} />
            </div>

            <div className="mt-10 flex items-center gap-2 border-t border-black/10 pt-4 text-[11px] text-foreground/50">
              <span className="h-1.5 w-1.5 bg-foreground" />
              status: open to AI analyst roles
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-4xl px-6 py-16">
          <p className="mb-5 text-[12px] text-foreground/50">
            {"// featured work"}
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
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
