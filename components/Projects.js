"use client";
import { useEffect, useRef } from "react";
import { ExternalLink, Github, Database, Globe, Bot } from "@/components/icons";

const projects = [
  {
    title: "QuickIntel",
    subtitle: "Competitor Intelligence & Analytics Platform",
    description:
      "A scalable ETL pipeline to analyze competitor product visibility on Blinkit using keyword-driven, multi-location search data for regional market intelligence.",
    bullets: [
      "Engineered high-performance web scraping via Playwright API interception & geo-location simulation",
      "Architected a producer-consumer pipeline with parallel workers for scalable data processing",
      "Implemented idempotent processing, retry queues & fault-tolerant workflows",
      "Built interactive analytics dashboard with LLM-based insights engine",
    ],
    tech: ["React.js", "Playwright", "Tailwind CSS", "PostgreSQL", "LLM"],
    icon: Database,
    github: "https://github.com/Kanish835",
    color: "from-blue-500/10 to-transparent",
    borderHover: "hover:border-blue-500/40",
  },
  {
    title: "FinVista",
    subtitle: "AI-Powered Event Discovery & Calendar Integration",
    description:
      "Automated event discovery pipeline for Post Office field workers, integrating news-scraped event data with Google Calendar for campaign planning.",
    bullets: [
      "Built automated event discovery pipeline using Playwright across multiple news sources",
      "Designed scheduled data ingestion workflow running twice daily",
      "Integrated Google Calendar API to auto-create and update field worker event entries",
      "Enabled location & timing-based event detection for regional outreach campaigns",
    ],
    tech: ["Node.js", "Next.js", "Playwright", "MongoDB", "Gemini", "Google Calendar API"],
    icon: Globe,
    github: "https://github.com/Kanish835",
    color: "from-green-500/10 to-transparent",
    borderHover: "hover:border-green-500/40",
  },
  {
    title: "JobFlow",
    subtitle: "AI-Enhanced Job Tracking Platform",
    description:
      "A job tracking platform that aggregates listings from Glassdoor, Naukri, LinkedIn & Indeed, with ATS-compatibility analysis powered by a chatbot.",
    bullets: [
      "Developed job scraping pipeline collecting listings from 4+ platforms by role & location",
      "Enabled direct navigation to company career pages with application state tracking",
      "Integrated chatbot to analyze JDs and tailor resumes for ATS compatibility",
      "Tracked application states: Pending, In-Process, Accepted, Rejected",
    ],
    tech: ["React.js", "Node.js", "Playwright", "MongoDB"],
    icon: Bot,
    github: "https://github.com/Kanish835",
    color: "from-purple-500/10 to-transparent",
    borderHover: "hover:border-purple-500/40",
  },
  {
    title: "HRFlow",
    subtitle: "AI-Powered Multi-Tenant HRMS Platform",
    description:
      "A multi-tenant Human Resource Management System supporting employee management, attendance, leave, payroll, announcements, and AI-powered HR assistance through a unified platform.",
    bullets: [
      "Designed RBAC for ADMIN, HR, and EMPLOYEE roles with JWT auth, OTP, and password hashing",
      "Architected Next.js and Express.js REST API with strict company-scoped data isolation",
      "Implemented attendance, break tracking, approval workflows, payable-day calculations & payslip generation",
      "Integrated a Groq-powered LLaMA 3 AI HR assistant with per-user context for policy queries",
    ],
    tech: ["Next.js", "Express.js", "TypeScript", "MongoDB", "Groq AI"],
    icon: Bot,
    github: "https://github.com/Kanish835/Human-Resource-Management-System.git",
    color: "from-orange-500/10 to-transparent",
    borderHover: "hover:border-orange-500/40",
  },
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 bg-secondary">
      <div ref={ref} className="section-fade max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-accent text-xs font-mono tracking-[0.2em] uppercase mb-4">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary section-title mb-4">
            Projects
          </h2>
          <p className="text-muted max-w-lg">
            Production-level builds focused on data pipelines, automation
            systems, and intelligent full-stack applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`project-card glass-card rounded-2xl border border-border p-8 relative overflow-hidden ${project.borderHover}`}
            >
              {/* Background gradient */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${project.color} rounded-full blur-3xl pointer-events-none`}
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                      <project.icon size={16} className="text-accent" />
                    </div>
                    <span className="text-xs font-mono text-muted uppercase tracking-wider">
                      Project 0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-textPrimary mb-1">
                    {project.title}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-textSecondary text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-surface border border-border text-muted text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — bullets */}
                <div className="bg-surface/50 rounded-xl p-5 border border-border">
                  <p className="text-xs font-mono text-muted uppercase tracking-wider mb-4">
                    Key Highlights
                  </p>
                  <ul className="space-y-3">
                    {project.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-accent mt-1 flex-shrink-0 text-xs">▸</span>
                        <span className="text-textSecondary text-sm leading-relaxed">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action links */}
              <div className="relative flex gap-4 mt-6 pt-5 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-medium"
                >
                  <Github size={15} />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
