"use client";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "C", "SQL", "Python"],
  },
  {
    title: "Development & Automation",
    skills: [
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "Playwright",
      "Selenium",
      "JWT Auth",
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "AWS S3",
      "AWS Glue",
      "AWS EC2",
      "Databricks",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "ETL Pipelines",
      "Data Ingestion",
      "Data Processing",
      "Data Transformation",
      "Data Modeling",
      "Parallel Pipelines",
    ],
  },
  {
    title: "CS Fundamentals",
    skills: [
      "DSA",
      "OOP",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
    ],
  },
  {
    title: "Tools & Distributed Systems",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Concurrency Control",
      "Fault Tolerance",
      "Idempotency",
      "High-Throughput Processing",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

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
    <section id="skills" className="py-24 bg-primary">
      <div
        ref={ref}
        className="section-fade max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <div className="mb-14">
          <p className="text-accent text-xs font-mono tracking-[0.2em] uppercase mb-4">
            Skills &amp; Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary section-title mb-4">
            What I work with
          </h2>
          <p className="text-muted max-w-lg">
            A full-stack skill set spanning core programming, modern web
            frameworks, cloud infrastructure, and data engineering.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium tracking-wide transition-all ${
                active === i
                  ? "bg-accent/15 text-accent border border-accent/40"
                  : "bg-surface text-muted border border-border hover:border-borderLight hover:text-textSecondary"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active category pills */}
        <div className="glass-card rounded-2xl p-8 border border-border min-h-[160px]">
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-5">
            {skillCategories[active].title}
          </p>
          <div className="flex flex-wrap gap-3">
            {skillCategories[active].skills.map((skill) => (
              <span
                key={skill}
                className="skill-pill px-4 py-2 rounded-lg border border-border bg-surfaceLight text-textSecondary text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* All skills overview grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-xl border transition-all ${
                active === i
                  ? "border-accent/40 bg-accent/5"
                  : "border-border bg-surface hover:border-borderLight"
              }`}
            >
              <div
                className={`text-xs font-mono font-semibold uppercase tracking-wider mb-2 ${
                  active === i ? "text-accent" : "text-muted"
                }`}
              >
                {cat.title}
              </div>
              <div className="text-textSecondary text-xs leading-relaxed line-clamp-2">
                {cat.skills.slice(0, 4).join(" · ")}
                {cat.skills.length > 4 && " · ..."}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
