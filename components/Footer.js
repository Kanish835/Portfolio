import { Github, Linkedin, Code2 } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="text-muted text-sm font-mono">
          <span className="text-textSecondary font-semibold">KBM</span>
          <span className="text-border mx-2">·</span>
          &copy; {new Date().getFullYear()} Kanish B M. All rights reserved.
        </div>

        {/* Built with */}
        <div className="text-muted text-xs font-mono text-center">
          Built with{" "}
          <span className="text-accent">Next.js</span>
          {" + "}
          <span className="text-accent">Tailwind CSS</span>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Kanish835"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/kanish-baskaran-b86171329/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://leetcode.com/u/KANISH_B_M/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LeetCode"
          >
            <Code2 size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
