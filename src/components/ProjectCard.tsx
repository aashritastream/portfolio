import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border border-black/15 bg-background transition-colors hover:border-black/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-black/15 bg-black/[0.03]">
        <Image
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 640px) 33vw, 100vw"
          className="object-cover object-top grayscale transition-all duration-200 group-hover:grayscale-0"
        />
      </div>
      <div className="p-4">
        <div className="mb-3 flex flex-wrap items-center gap-1.5">
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
        <h3 className="mb-1.5 text-[15px] font-medium">{project.title}</h3>
        <p className="text-[13px] leading-relaxed text-foreground/60">
          {project.oneLiner}
        </p>
      </div>
    </Link>
  );
}
