export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  categories: string[];
  tags: string[];
  problem: string;
  approach: string[];
  outcome: string;
  stack: string[];
  videoUrl?: string;
  screenshot: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "job-application-helper",
    title: "Job application helper",
    oneLiner:
      "Upload a resume and a job posting, get back a keyword gap analysis and a tailored cover letter.",
    categories: ["AI", "Automation"],
    tags: ["Claude API", "FastAPI", "React"],
    problem:
      "Tailoring a resume and cover letter to every job posting is repetitive and easy to do badly under time pressure.",
    approach: [
      "Parse an uploaded resume PDF and either a pasted job description or a fetched posting URL.",
      "Run a keyword/skills gap analysis between the resume and the posting with Claude.",
      "Generate a tailored cover letter and export it as a formatted document.",
    ],
    outcome:
      "A working end-to-end flow from PDF upload to a downloadable, tailored application document.",
    stack: ["FastAPI", "React", "TypeScript", "Claude API"],
    videoUrl:
      "https://ruvox6zvh1q9m4en.public.blob.vercel-storage.com/work/job-application-helper-9i5GOjyymMT9MiDBlhaA7KrietAzg9.mp4",
    screenshot: "/screenshots/job-application-helper.jpg",
    githubUrl: "https://github.com/aashritastream/job-application-helper",
  },
  {
    slug: "shelter-intake-automation",
    title: "Shelter intake automation",
    oneLiner:
      "Claude-assisted intake and triage for a fictional women's shelter, with a discreet mode built in.",
    categories: ["AI", "Automation"],
    tags: ["Claude API", "FastAPI", "React"],
    problem:
      "Intake for a shelter has to move fast, triage accurately, and stay safe for people who may be in danger from whoever is watching their screen.",
    approach: [
      "Model intake submissions, triage records, room/bed assignment, and shelter configuration.",
      "Use Claude to run triage and draft follow-up messages from intake data.",
      "Build a discreet mode that changes what's shown on screen for situations where privacy is a safety issue, not just a preference.",
    ],
    outcome:
      "A working intake-to-triage-to-room-assignment flow, with the discreet mode as the deliberate, safety-driven design choice.",
    stack: ["FastAPI", "SQLModel", "React", "Claude API"],
    videoUrl:
      "https://ruvox6zvh1q9m4en.public.blob.vercel-storage.com/work/shelter-intake-automation-CI5tOZdsCD3fUYwn9ZfYPG5eiqLSAW.mp4",
    screenshot: "/screenshots/shelter-intake-automation.jpg",
    githubUrl: "https://github.com/aashritastream/shelter-intake",
  },
  {
    slug: "compensation-analytics-dashboard",
    title: "Compensation analytics dashboard",
    oneLiner:
      "An AI-powered comp analytics dashboard for a fictional healthcare company, with a natural-language chat interface backed by exact computation.",
    categories: ["AI", "Analytics", "HR Tech"],
    tags: ["Claude API", "FastAPI", "pandas", "React"],
    problem:
      "Compensation questions ('average total comp for female physicians in Texas vs. male physicians') are easy to ask in plain English and hard to answer without a real analytics layer underneath.",
    approach: [
      "Built 6 dashboard views (overview, pay by role, geography, pay equity, FT/PT parity, merit planning) over ~1,200 synthetic employee records.",
      "Chat interface where Claude translates a plain-English question into a strict query spec, validated against a schema whitelist.",
      "The query itself runs as an exact pandas computation — Claude never does the math, only the translation and the write-up of results already computed.",
      "Deliberately used a seeded, deterministic data generator instead of prompting Claude for synthetic records, and a grouped bar chart instead of a choropleth map, to keep the demo fast and dependency-light.",
    ],
    outcome:
      "6 working dashboard views plus a chat interface that answers ambiguous natural-language questions with numbers that are always exactly right, because Claude never touches the arithmetic.",
    stack: ["FastAPI", "pandas", "React", "Recharts", "Claude API"],
    videoUrl:
      "https://ruvox6zvh1q9m4en.public.blob.vercel-storage.com/work/compensation-analytics-dashboard-aAJCOcHUPfFFK7YkevmTzCGc3jTRD7.mp4",
    screenshot: "/screenshots/compensation-analytics-dashboard.jpg",
    githubUrl: "https://github.com/aashritastream/comp-analytics-dashboard",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
