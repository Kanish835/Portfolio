"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Code2 } from '@/components/icons';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) ref.current.classList.add("visible");
    }, 100);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accentDim/5 blur-[100px] pointer-events-none" />

      <div
        ref={ref}
        className="section-fade max-w-6xl mx-auto px-6 pt-28 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left — Text */}
        <div>
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block w-6 h-[1px] bg-accent" />
            <span className="text-accent text-xs font-mono font-medium tracking-[0.2em] uppercase">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-4">
            <span className="gradient-text">KANISH</span>
            <br />
            <span className="text-textPrimary">B M</span>
            <span className="text-accent">.</span>
          </h1>

          {/* Role */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm sm:text-base font-mono text-muted tracking-[0.15em] uppercase">
              Software Developer
            </span>
            <span className="text-border">—</span>
            <span className="text-sm font-mono text-muted tracking-wider">
              Data Engineering
            </span>
          </div>

          {/* Tagline */}
          <p className="text-textSecondary text-lg leading-relaxed max-w-md mb-8">
            I like turning ideas into working systems, figuring out the hard
            parts, and experimenting with new technologies.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#contact" className="btn-primary">
              Let&apos;s Connect
              <ArrowRight size={16} />
            </a>
            <a href="#projects" className="btn-outline">
              View My Work
            </a>
          </div>

          {/* Social links row */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted font-mono tracking-wider">
              FIND ME ON
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/Kanish835"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-surface text-muted hover:text-accent hover:border-accent/50 transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/kanish-baskaran-b86171329/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-surface text-muted hover:text-accent hover:border-accent/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://leetcode.com/u/KANISH_B_M/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-surface text-muted hover:text-accent hover:border-accent/50 transition-all"
                aria-label="LeetCode"
              >
                <Code2 size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right — Visual Card */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-full max-w-[400px]">
            {/* Rotating border ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-accentDim/10 blur-md" />

            <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs font-mono text-muted">
                  kanish.dev
                </span>
              </div>

              {/* Code snippet */}
              <pre className="font-mono text-xs leading-7 text-textSecondary">
                <code>
                  <span className="text-muted">// Who I am</span>
                  {"\n"}
                  <span className="text-accent">const</span>{" "}
                  <span className="text-textPrimary">developer</span> = {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-textSecondary">name</span>:{" "}
                  <span className="text-green-400/80">
                    &quot;Kanish B M&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span className="text-textSecondary">role</span>:{" "}
                  <span className="text-green-400/80">
                    &quot;Software Developer&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span className="text-textSecondary">focus</span>: [{"\n"}
                  {"    "}
                  <span className="text-green-400/80">
                    &quot;ETL Pipelines&quot;
                  </span>
                  ,{"\n"}
                  {"    "}
                  <span className="text-green-400/80">
                    &quot;Data Engineering&quot;
                  </span>
                  ,{"\n"}
                  {"    "}
                  <span className="text-green-400/80">
                    &quot;Full-Stack&quot;
                  </span>
                  ,{"\n"}
                  {"  "}],{"\n"}
                  {"  "}
                  <span className="text-textSecondary">status</span>:{" "}
                  <span className="text-green-400/80">
                    &quot;open to work&quot;
                  </span>
                  {"\n"}
                  {"}"};{"\n"}
                </code>
              </pre>

              {/* Stat row */}
              <div className="mt-5 pt-4 border-t border-border grid grid-cols-3 gap-3 text-center">
                {[
                  { val: "400+", label: "LeetCode" },
                  { val: "3+", label: "Hackathons" },
                  { val: "8.01", label: "CGPA" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-accent font-bold text-lg">{s.val}</div>
                    <div className="text-muted text-[10px] font-mono uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-mono text-muted tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
