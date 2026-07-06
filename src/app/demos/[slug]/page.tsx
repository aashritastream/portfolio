import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { demos, getDemo } from "@/lib/demos";

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
    <div className="mx-auto max-w-2xl px-6 py-14">
      <p className="text-[13px] font-medium text-pink-800">
        {demo.company} — {demo.role}
      </p>
      <h1 className="mt-2 text-[24px] font-medium">{demo.title}</h1>
      <p className="mt-3 font-serif text-[15px] leading-relaxed text-foreground/70">
        {demo.greeting}
      </p>

      <video
        className="mt-8 w-full rounded-lg border border-black/10"
        src={demo.videoUrl}
        controls
        preload="metadata"
      />

      <section className="mt-8">
        <h2 className="mb-2 text-[13px] font-medium text-pink-800">
          What this shows
        </h2>
        <ul className="space-y-2">
          {demo.highlights.map((point) => (
            <li
              key={point}
              className="flex gap-2 text-[14px] leading-relaxed text-foreground/80"
            >
              <span className="text-pink-400">–</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
