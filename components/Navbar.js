"use client";
import { useState, useEffect } from "react";
import { Github, Linkedin, Code2, Menu, X } from '@/components/icons';

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-textPrimary font-bold text-lg tracking-widest hover:text-accent transition-colors"
        >
          KBM<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium text-muted ${
                active === link.href.replace("#", "") ? "active text-accent" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Kanish835"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-muted hover:text-accent hover:bg-surface transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/kanish-baskaran-b86171329/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-muted hover:text-accent hover:bg-surface transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://leetcode.com/u/KANISH_B_M/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-muted hover:text-accent hover:bg-surface transition-all"
            aria-label="LeetCode"
            title="LeetCode"
          >
            <Code2 size={18} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-muted hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-primary/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-textSecondary hover:text-accent text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 pt-2 border-t border-border mt-2">
              <a href="https://github.com/Kanish835" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/kanish-baskaran-b86171329/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent"><Linkedin size={18} /></a>
              <a href="https://leetcode.com/u/KANISH_B_M/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent"><Code2 size={18} /></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
