"use client";
import { useEffect, useRef } from "react";
import { Trophy, Award, Leaf, Code2 } from "@/components/icons";

const achievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon 2024",
    badge: "National Finalist",
    description:
      "Ranked in the Top 5 nationwide out of 500+ teams. Delivered an AI-powered solution within a fast-paced and ambiguous problem environment.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/8",
    border: "border-yellow-400/20",
  },
  {
    icon: Award,
    title: "HackFest 2024",
    badge: "Regional Winner",
    description:
      "Presented a blockchain-based solution for transparent and traceable disaster relief fund utilization, focusing on accountability and fraud prevention.",
    color: "text-accent",
    bg: "bg-accent/8",
    border: "border-accent/20",
  },
  {
    icon: Leaf,
    title: "Bag-It Hackathon",
    badge: "Semi-Finalist",
    description:
      "Designed an eco-friendly 'Ripped Cloth Blend Manjappai Bag' using textile waste, promoting sustainability and circular economy practices.",
    color: "text-green-400",
    bg: "bg-green-400/8",
    border: "border-green-400/20",
  },
  {
    icon: Code2,
    title: "LeetCode Problem Solving",
    badge: "400+ Solved",
    description:
      "Consistent problem-solving practice across Data Structures & Algorithms, demonstrating proficiency in algorithmic thinking and code optimization.",
    color: "text-orange-400",
    bg: "bg-orange-400/8",
    border: "border-orange-400/20",
  },
];

export default function Achievements() {
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
    <section id="achievements" className="py-24 bg-primary">
      <div ref={ref} className="section-fade max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-accent text-xs font-mono tracking-[0.2em] uppercase mb-4">
            Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary section-title mb-4">
            Achievements
          </h2>
          <p className="text-muted max-w-lg">
            Milestones earned through competition, consistency, and building
            things that matter.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <div
              key={i}
              className={`achievement-card glass-card rounded-2xl border ${a.border} p-7 relative overflow-hidden`}
            >
              {/* Background circle */}
              <div
                className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${a.bg} blur-xl pointer-events-none`}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${a.bg} border ${a.border}`}>
                    <a.icon size={20} className={a.color} />
                  </div>
                  <span
                    className={`text-xs font-mono font-semibold px-3 py-1 rounded-full ${a.bg} ${a.color} border ${a.border}`}
                  >
                    {a.badge}
                  </span>
                </div>

                <h3 className="text-textPrimary font-bold text-lg mb-2">
                  {a.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {a.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
