"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhatIDo } from "@/components/what-i-do";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative min-h-screen bg-background">
      {/* Global Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-60 origin-left shadow-[0_0_10px_rgba(var(--ring),0.8)]"
        style={{ scaleX }}
      />

      <Navbar />

      <div className="flex flex-col">
        <Hero />

        <div className="relative z-10 bg-background">
          <WhatIDo />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
      </div>
    </main>
  );
}
