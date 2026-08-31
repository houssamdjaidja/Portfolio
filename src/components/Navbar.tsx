"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isExperiencePage = pathname === "/experience";

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(isExperiencePage ? "Experience" : "Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (isExperiencePage) {
      setActive("Experience");
      return;
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems
        .filter((n) => n.href.startsWith("#"))
        .map((n) => n.href.slice(1));
      const labels = navItems
        .filter((n) => n.href.startsWith("#"))
        .map((n) => n.label);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(labels[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isExperiencePage]);

  const handleClick = (label: string) => {
    setActive(label);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group" onClick={() => handleClick("Home")}>
          <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono text-sm font-bold tracking-tight group-hover:bg-accent/20 transition-colors">
            HD
          </div>
          <span className="font-semibold text-foreground text-sm hidden sm:block">
            Houssam Djaidja
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = active === item.label;
            const isButton = item.href.startsWith("/");
            const className = isButton
              ? "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-accent text-white hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20"
              : `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive ? "text-accent bg-accent/10" : "text-muted hover:text-foreground hover:bg-white/5"
                }`;
            if (item.href.startsWith("/")) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleClick(item.label)}
                  className={className}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleClick(item.label)}
                className={className}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-[20px] h-[2px] bg-foreground rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-[20px] h-[2px] bg-foreground rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
          <span className={`block w-[20px] h-[2px] bg-foreground rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 border-b border-border bg-background/95 backdrop-blur-xl" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-3 flex flex-col gap-0.5">
          {navItems.map((item) => {
            const isActive = active === item.label;
            const isButton = item.href.startsWith("/");
            const className = isButton
              ? "px-4 py-3 rounded-lg text-sm font-medium transition-all bg-accent text-white hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20 text-center"
              : `px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive ? "text-accent bg-accent/10" : "text-muted hover:text-foreground hover:bg-white/5"
                }`;
            if (item.href.startsWith("/")) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleClick(item.label)}
                  className={className}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleClick(item.label)}
                className={className}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
