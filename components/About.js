"use client";
import { useEffect, useRef } from "react";
import { MapPin, GraduationCap, Code2, Trophy } from "@/components/icons";

const stats = [
  { icon: Trophy, value: "SIH 2024", label: "National Finalist" },
  { icon: Trophy, value: "HackFest", label: "Regional Winner" },
  { icon: Code2, value: "400+", label: "LeetCode Problems" },
  { icon: GraduationCap, value: "8.01", label: "CGPA" },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-secondary">
      <div
        ref={ref}
        className="section-fade max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        {/* Left — Text */}
        <div>
          <p className="text-accent text-xs font-mono tracking-[0.2em] uppercase mb-4">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-6 section-title">
            Turning data into
            <br />
            <span className="gradient-text">decisions.</span>
          </h2>

          <div className="space-y-4 text-textSecondary leading-relaxed">
            <p>
              I&apos;m a final-year Computer Science and Engineering student at{" "}
              <span className="text-textPrimary font-medium">
                Bannari Amman Institute of Technology
              </span>
              , passionate about data-driven systems and applying technology to
              solve real-world problems.
            </p>
            <p>
              My focus spans{" "}
              <span className="text-accent">
                ETL pipelines, data ingestion, web automation
              </span>
              , and scalable data processing. I enjoy working at the intersection
              of full-stack development and data engineering — building systems
              that are not just functional, but intelligent.
            </p>
            <p>
              I participate actively in hackathons to sharpen my problem-solving
              under pressure and continuously practice DSA to strengthen my
              algorithmic thinking.
            </p>
          </div>

          {/* Location + Education */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-muted text-sm">
              <MapPin size={14} className="text-accent flex-shrink-0" />
              <span>Tamil Nadu, India</span>
            </div>
            <div className="flex items-start gap-3 text-muted text-sm">
              <GraduationCap size={14} className="text-accent flex-shrink-0 mt-0.5" />
              <span>
                B.E. Computer Science &amp; Engineering — BIT (2023–2027)
              </span>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="mailto:kanishbm15@gmail.com"
              className="btn-outline text-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right — Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 achievement-card border border-border"
            >
              <s.icon size={20} className="text-accent mb-3" />
              <div className="text-2xl font-bold text-textPrimary mb-1">
                {s.value}
              </div>
              <div className="text-xs text-muted font-mono uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}

          {/* Extra card spanning both columns */}
          <div className="glass-card rounded-xl p-5 col-span-2 border border-border flex items-center gap-5">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Code2 size={18} className="text-accent" />
            </div>
            <div>
              <div className="text-textPrimary font-semibold text-sm">
                3+ Hackathons Participated
              </div>
              <div className="text-muted text-xs mt-0.5">
                Consistently building under pressure in fast-paced environments
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
