"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LockIcon } from "@/components/icons";

// Each private entry has its own password — one company's password only
// unlocks that company's card, not the others.
const PASSWORD_HASHES: Record<string, string> = {
  "alpaca-support-analyst":
    "95981161dd2b38ec00eef3736153bd89b182237042f8bdab897c4aa2ca3ef1a6",
};

const STORAGE_PREFIX = "client-work-unlocked-";
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

function scramble(length: number) {
  return Array.from(
    { length },
    () => SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)],
  ).join("");
}

async function sha256Hex(text: string) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

type Entry = {
  slug: string;
  company: string;
  title: string;
  screenshot: string;
};

export function ClientWorkGate({ entries }: { entries: Entry[] }) {
  const [unlocked, setUnlocked] = useState<Record<string, boolean>>({});
  const [scrambled] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      entries.map((entry) => [entry.slug, scramble(entry.title.length)]),
    ),
  );

  useEffect(() => {
    // One-time sync from sessionStorage on mount (SSR has no sessionStorage,
    // so this can't be a lazy useState initializer).
    const initial: Record<string, boolean> = {};
    for (const entry of entries) {
      if (sessionStorage.getItem(STORAGE_PREFIX + entry.slug) === "1") {
        initial[entry.slug] = true;
      }
    }
    if (Object.keys(initial).length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUnlocked(initial);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="text-[26px] font-medium tracking-tight">Client work</h1>
      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-foreground/70">
        Private walkthroughs built for specific companies. Each one has its
        own password.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {entries.map((entry) => (
          <EntryCard
            key={entry.slug}
            entry={entry}
            scrambledTitle={scrambled[entry.slug]}
            isUnlocked={!!unlocked[entry.slug]}
            onUnlock={() =>
              setUnlocked((prev) => ({ ...prev, [entry.slug]: true }))
            }
          />
        ))}
      </div>
    </div>
  );
}

function EntryCard({
  entry,
  scrambledTitle,
  isUnlocked,
  onUnlock,
}: {
  entry: Entry;
  scrambledTitle: string;
  isUnlocked: boolean;
  onUnlock: () => void;
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const hash = await sha256Hex(password);
    if (hash === PASSWORD_HASHES[entry.slug]) {
      setError(false);
      sessionStorage.setItem(STORAGE_PREFIX + entry.slug, "1");
      onUnlock();
    } else {
      setError(true);
    }
  }

  const card = (
    <div className="border border-black/15 bg-background transition-colors hover:border-black/40">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-black/15 bg-black/[0.03]">
        <Image
          src={entry.screenshot}
          alt=""
          fill
          priority
          sizes="(min-width: 640px) 50vw, 100vw"
          className={`object-cover object-top transition-all ${
            isUnlocked ? "grayscale-0" : "grayscale blur-[6px]"
          }`}
        />
      </div>
      <div className="p-4">
        <h3 className="text-[15px] font-medium">
          {isUnlocked ? entry.title : scrambledTitle}
        </h3>
        {isUnlocked && (
          <p className="mt-1 text-[12px] text-foreground/50">
            {entry.company}
          </p>
        )}
      </div>
    </div>
  );

  if (isUnlocked) {
    return <Link href={`/demos/${entry.slug}`}>{card}</Link>;
  }

  return (
    <div>
      {card}
      <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
        <div className="relative w-full">
          <LockIcon className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-foreground/40" />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="password"
            className="w-full border border-black/20 bg-background py-2 pl-9 pr-3 text-[14px] focus:border-foreground focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="shrink-0 border border-foreground bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-colors hover:bg-background hover:text-foreground"
        >
          Unlock
        </button>
      </form>
      {error && (
        <p className="mt-1.5 text-[12px] text-foreground/60">
          Incorrect password.
        </p>
      )}
    </div>
  );
}
