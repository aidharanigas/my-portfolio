"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Hero", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-tighter cursor-pointer"
        >
          <span className="text-foreground">DHARANI</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
            GA
          </span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-accent hover:to-blue-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block glass px-5 py-2 rounded-full text-sm font-semibold border-accent/20 hover:border-accent/50 text-accent transition-all"
          >
            Get in touch
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
