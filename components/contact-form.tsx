"use client";

import { useState } from "react";

const subjects = [
  "Hiring / role opportunity",
  "Contract or project-based engagement",
  "Long-term client or consultancy",
  "Open-source collaboration",
  "Personal project",
  "Other",
] as const;

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-line bg-bg p-6 md:p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[16px] font-medium tracking-tightish">
          Send a message
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="eyebrow">Name</span>
          <input
            type="text"
            required
            className="mt-2 w-full bg-transparent border border-line rounded-md px-3 py-2.5 text-[14px] focus:border-line2 focus-glass outline-none"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="eyebrow">Email</span>
          <input
            type="email"
            required
            className="mt-2 w-full bg-transparent border border-line rounded-md px-3 py-2.5 text-[14px] font-mono focus:border-line2 focus-glass outline-none"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block mt-4">
        <span className="eyebrow">Subject</span>
        <select className="mt-2 w-full bg-bg border border-line rounded-md px-3 py-2.5 text-[14px] focus:border-line2 outline-none">
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>

      <label className="block mt-4">
        <span className="eyebrow">Message</span>
        <textarea
          rows={6}
          required
          className="mt-2 w-full bg-transparent border border-line rounded-md px-3 py-2.5 text-[14px] focus:border-line2 focus-glass outline-none resize-none"
          placeholder="Describe the project, role, or idea you'd like to discuss."
        />
      </label>

      <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
        <div className="font-mono text-[11px] text-dim">
          Encrypted in transit · No tracking
        </div>
        <button
          type="submit"
          disabled={sent}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-fg text-bg text-[14px] font-medium hover:bg-fg/90 transition-colors disabled:opacity-70"
        >
          {sent ? "Sent ✓" : "Send message"}
          {!sent && <ArrowRightIcon />}
        </button>
      </div>

      {sent && (
        <p className="mt-4 text-[13px] text-accent font-mono">
          // message queued — I&apos;ll reply within 48h.
        </p>
      )}
    </form>
  );
}
