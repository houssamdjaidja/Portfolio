"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-border bg-card text-xs font-mono text-accent mb-4 tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s Build Something <span className="text-accent">Great Together</span>
          </h2>
          <p className="text-muted max-w-md mx-auto">
            Have a project in mind or just want to connect? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 max-w-4xl mx-auto">
          <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-5">
            <a
              href="mailto:houssameddinedjaidja10@gmail.com"
              className="group p-4 sm:p-5 rounded-xl border border-border bg-card hover:border-accent/20 transition-all duration-300 flex items-center gap-3 sm:gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">Email</p>
                <p className="text-xs text-muted font-mono">houssameddinedjaidja10@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/houssamdjaidja"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 sm:p-5 rounded-xl border border-border bg-card hover:border-accent/20 transition-all duration-300 flex items-center gap-3 sm:gap-4"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">GitHub</p>
                <p className="text-xs text-muted font-mono">github.com/houssamdjaidja</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/djaidja-houssameddine-1bb57232a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 sm:p-5 rounded-xl border border-border bg-card hover:border-accent/20 transition-all duration-300 flex items-center gap-3 sm:gap-4"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">LinkedIn</p>
                <p className="text-xs text-muted font-mono">linkedin.com/in/djaidja-houssameddine</p>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-4">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 rounded-xl border border-success/20 bg-success/5">
                <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">Message Sent!</p>
                  <p className="text-sm text-muted mt-1">I&apos;ll get back to you soon.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="px-5 py-2 rounded-lg border border-border text-sm text-muted hover:text-foreground hover:border-dim transition-all"
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-dim focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-dim focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-dim focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="self-start px-7 py-3.5 bg-accent hover:bg-accent-dim disabled:opacity-50 text-white rounded-xl font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 flex items-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </>
                  )}
                </button>
                {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again.</p>}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
