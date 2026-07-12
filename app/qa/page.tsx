"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import QA from "@/components/QA";
import React from "react";
import { Navbar } from "@/components/navbar";

const Page = () => {
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
        <QA />
      </div>

      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
      </div>
    </main>
  );
};

export default Page;
