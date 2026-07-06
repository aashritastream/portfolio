export type Demo = {
  slug: string;
  company: string;
  role: string;
  title: string;
  videoUrl: string;
  greeting: string;
  highlights: string[];
};

// Unlisted pages built for a specific job application. Not linked from any
// public page or nav — share the exact /demos/[slug] URL directly.
export const demos: Demo[] = [
  {
    slug: "alpaca-support-analyst",
    company: "Alpaca",
    role: "Support AI Analyst",
    title: "Alpaca support copilot",
    videoUrl:
      "https://ruvox6zvh1q9m4en.public.blob.vercel-storage.com/demos/alpaca-support-analyst-FMtocDzUqPGOyfR0at41PL4AWsW1qL.mp4",
    greeting:
      "Hi Alpaca team — this is a walkthrough built specifically for the Support AI Analyst role, using Alpaca's own public docs as the domain.",
    highlights: [
      "Customer bot answers questions against Alpaca's docs with inline citations, and declines to answer rather than guess when retrieval confidence is low.",
      "Agent copilot drafts a reply for a support ticket plus a confidence score, category tag, and escalation flag — fraud, large-sum, and legal-language patterns override the model's own judgment.",
      "KPI dashboard computes deflection rate, category breakdown, confidence distribution, and escalation reasons from real logged runs, not hardcoded numbers.",
      "A separate resolution-accuracy evaluation pass checks whether the copilot was actually correct against hand-filled ground truth, not just how confident it claimed to be.",
      "A prompt-versioning harness runs 3 prompt iterations against the same ticket set and scores them against ground-truth labels.",
    ],
  },
];

export function getDemo(slug: string) {
  return demos.find((d) => d.slug === slug);
}
