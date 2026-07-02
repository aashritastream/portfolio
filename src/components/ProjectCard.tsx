import Link from "next/link";
import type { Project } from "@/lib/projects";

const accentClasses: Record<Project["accent"], string> = {
  coral: "bg-coral-50 text-coral-800",
  purple: "bg-purple-50 text-purple-800",
  teal: "bg-teal-50 text-teal-800",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-xl border border-black/10 bg-white p-5 transition hover:border-black/20"
    >
      <div
        className={`mb-4 inline-flex h-8 items-center rounded-md px-2.5 text-[11px] font-medium ${accentClasses[project.accent]}`}
      >
        Case study
      </div>
      <h3 className="mb-1.5 text-[15px] font-medium">{project.title}</h3>
      <p className="mb-4 text-[13px] leading-relaxed text-foreground/60">
        {project.oneLiner}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-black/5 px-2 py-0.5 text-[11px] text-foreground/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
