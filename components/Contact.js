"use client";
import { useEffect, useRef } from "react";
import { Mail, Github, Linkedin, Code2, ArrowUpRight } from "@/components/icons";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@Kanish835",
    href: "https://github.com/Kanish835",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "kanish-baskaran",
    href: "https://www.linkedin.com/in/kanish-baskaran-b86171329/",
  },
  {
    icon: Code2,
    label: "LeetCode",
    handle: "KANISH_B_M",
    href: "https://leetcode.com/u/KANISH_B_M/",
  },
];

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background ambience */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div
        ref={ref}
        className="section-fade relative max-w-4xl mx-auto px-6 text-center"
      >
        {/* Pre-label */}
        <p className="text-accent text-xs font-mono tracking-[0.2em] uppercase mb-6">
          Contact &amp; Collaboration
        </p>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
          Let&apos;s build something{" "}
          <span className="gradient-text text-glow">together.</span>
        </h2>

        <p className="text-textSecondary text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Open to software engineering roles, data engineering opportunities,
          internships, and interesting collaborations. Drop a message — I
          usually reply within 24 hours.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:kanishbm15@gmail.com"
          className="inline-flex items-center gap-3 bg-accent text-primary font-bold px-8 py-4 rounded-xl text-base hover:bg-accent/90 hover:shadow-[0_12px_40px_#58a6ff33] transition-all hover:-translate-y-1 mb-12"
        >
          <Mail size={18} />
          kanishbm15@gmail.com
          <ArrowUpRight size={16} />
        </a>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-xs mx-auto mb-10">
          <div className="flex-1 h-[1px] bg-border" />
          <span className="text-muted text-xs font-mono tracking-wider">OR FIND ME ON</span>
          <div className="flex-1 h-[1px] bg-border" />
        </div>

        {/* Social cards */}
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-border bg-surface glass-card hover:border-accent/50 hover:bg-accent/5 transition-all group"
            >
              <s.icon
                size={18}
                className="text-muted group-hover:text-accent transition-colors"
              />
              <div className="text-left">
                <div className="text-textPrimary text-sm font-semibold">
                  {s.label}
                </div>
                <div className="text-muted text-xs font-mono">{s.handle}</div>
              </div>
              <ArrowUpRight
                size={14}
                className="text-muted group-hover:text-accent transition-colors ml-1"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
