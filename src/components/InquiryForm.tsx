"use client";

import { useState } from "react";

const CONTACT_EMAIL = "aashrita.natesan@gmail.com";

export function InquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${name || "a visitor"}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-md space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-[12px] text-foreground/50"
        >
          {"// name"}
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-black/20 bg-background px-3 py-2 text-[14px] focus:border-foreground focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-[12px] text-foreground/50"
        >
          {"// your email"}
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-black/20 bg-background px-3 py-2 text-[14px] focus:border-foreground focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-[12px] text-foreground/50"
        >
          {"// message"}
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none border border-black/20 bg-background px-3 py-2 text-[14px] focus:border-foreground focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="border border-foreground bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-colors hover:bg-background hover:text-foreground"
      >
        Send inquiry
      </button>
      <p className="text-[11px] text-foreground/40">
        Opens your email client with this pre-filled, addressed to{" "}
        {CONTACT_EMAIL}.
      </p>
    </form>
  );
}
