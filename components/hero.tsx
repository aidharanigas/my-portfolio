"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 px-6 text-center pb-20"
      >
        {/* <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-accent border-accent/20">
            Available for Projects
          </span>
        </motion.div> */}

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]"
        >
          ENGINEERING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent bg-[length:200%_auto] animate-gradient">
            PYTHON / DJANGO
          </span>{" "}
          <br />
          SOLUTIONS
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
          Recent Computer Science Engineering graduate building scalable
          applications with Python, full-stack development, and AI automation.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={"#projects"}
            className="rounded-full flex items-center justify-center px-8 h-14 text-base font-bold bg-accent hover:bg-accent/90 text-accent-foreground neon-glow transition-all hover:scale-105"
          >
            View Projects <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
          <Link
            href="#contact"
            className="rounded-full px-8 h-14 flex items-center justify-center text-base font-bold glass border-accent/20 hover:border-accent/50 transition-all hover:scale-105"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
