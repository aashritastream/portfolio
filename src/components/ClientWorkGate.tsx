"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LockIcon, LockOpenIcon } from "@/components/icons";

const PASSWORD_HASH =
  "95981161dd2b38ec00eef3736153bd89b182237042f8bdab897c4aa2ca3ef1a6";
const STORAGE_KEY = "client-work-unlocked";
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
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [scrambled] = useState<string[]>(() =>
    entries.map((entry) => scramble(entry.title.length)),
  );

  useEffect(() => {
    // One-time sync from sessionStorage on mount (SSR has no sessionStorage,
    // so this can't be a lazy useState initializer).
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUnlocked(true);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const hash = await sha256Hex(password);
    if (hash === PASSWORD_HASH) {
      setUnlocked(true);
      setError(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
    } else {
      setError(true);
    }
  }

  return (
    <div>
      <h1 className="text-[26px] font-medium tracking-tight">Client work</h1>
      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-foreground/70">
        Private walkthroughs built for specific companies. Enter the password
        to view.
      </p>

      {!unlocked && (
        <form onSubmit={handleSubmit} className="mt-6 flex max-w-sm gap-2">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="password"
            className="w-full border border-black/20 bg-background px-3 py-2 text-[14px] focus:border-foreground focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 border border-foreground bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-colors hover:bg-background hover:text-foreground"
          >
            Unlock
          </button>
        </form>
      )}
      {error && (
        <p className="mt-2 text-[12px] text-foreground/60">
          Incorrect password.
        </p>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {entries.map((entry, i) => {
          const content = (
            <div className="border border-black/15 bg-background transition-colors hover:border-black/40">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-black/15 bg-black/[0.03]">
                <Image
                  src={entry.screenshot}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className={`object-cover object-top transition-all ${
                    unlocked ? "grayscale-0" : "grayscale blur-[6px]"
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                  {unlocked ? (
                    <LockOpenIcon className="h-6 w-6 text-white" />
                  ) : (
                    <LockIcon className="h-6 w-6 text-white" />
                  )}
                </div>
              </div>
              <div className="p-4">
                <p className="text-[12px] text-foreground/50">
                  {unlocked ? entry.company : "••••••••"}
                </p>
                <h3 className="mt-1 text-[15px] font-medium">
                  {unlocked ? entry.title : scrambled[i]}
                </h3>
              </div>
            </div>
          );

          return unlocked ? (
            <Link key={entry.slug} href={`/demos/${entry.slug}`}>
              {content}
            </Link>
          ) : (
            <div key={entry.slug} className="cursor-not-allowed select-none">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
