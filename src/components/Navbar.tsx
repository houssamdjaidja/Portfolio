"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(isHome ? "Home" : "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setActive("");
      return;
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((n) => n.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(navItems[i].label);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const handleClick = (label: string, href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);

    const scrollTo = () => {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(label);
    };

    if (isHome) {
      scrollTo();
    } else if (href === "#home") {
      router.push("/");
    } else {
      // Go to homepage then scroll to the section after navigation
      router.push(`/${href}`);
    }
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
        <a
          href="/#home"
          onClick={(e) => handleClick("Home", "#home", e)}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono text-sm font-bold tracking-tight group-hover:bg-accent/20 transition-colors">
            HD
          </div>
          <span className="font-semibold text-foreground text-sm hidden sm:block">
            Houssam Djaidja
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`${!isHome && item.href !== "#home" ? "/" : ""}${item.href}`}
              onClick={(e) => handleClick(item.label, item.href, e)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === item.label
                  ? "text-accent bg-accent/10"
                  : "text-muted hover:text-foreground hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
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
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`${!isHome && item.href !== "#home" ? "/" : ""}${item.href}`}
              onClick={(e) => handleClick(item.label, item.href, e)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                active === item.label
                  ? "text-accent bg-accent/10"
                  : "text-muted hover:text-foreground hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
