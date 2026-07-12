"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

const experiences = [
  {
    company: "SocialMM",
    role: "Developer Intern",
    date: "Dec 2025 - Feb 2026",
    location: "Remote",
    description: [
      "Working on web development tasks involving frontend and backend components.",
      "Collaborating with team members to implement features, fix bugs, and improve application performance.",
      "Gaining hands-on experience in real-world software development workflows and deployment practices.",
    ],
    tech: [
      "Web Development",
      "Frontend",
      "Backend",
      "Git",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    company: "Cognifyz Technologies",
    role: "Python Development Intern",
    date: "Sep 2025 - Oct 2025",
    location: "Remote",
    description: [
      "Solved real-world Python programming challenges, improving debugging, data handling, and algorithmic thinking.",
      "Implemented clean, modular Python code following best practices.",
    ],
    tech: [
      "Python",
      "Algorithms",
      "Data Structures",
      "Debugging",
    ],
    color: "from-violet-500 to-purple-400",
  },
  {
    company: "Kottravai Enterprises Pvt Ltd",
    role: "Python Full Stack Intern",
    date: "Jul 2025 - Jul 2025",
    location: "Puliangudi, India",
    description: [
      "Built an AI-powered PPT generator using Python and LLM-based automation, reducing manual slide creation time.",
      "Collaborated using Git/GitHub for version control and task management.",
      "Worked on backend logic, prompt engineering, and automation workflows.",
    ],
    tech: [
      "Python",
      "LLM",
      "Automation",
      "Git",
      "Backend",
    ],
    color: "from-amber-500 to-orange-400",
  },
];

interface Experience {
  company: string;
  role: string;
  date: string;
  location: string;
  description: string[];
  tech: string[];
  color: string;
}

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
    >
      {/* Timeline Node (Desktop) */}
      <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 hidden md:flex flex-col items-center justify-center z-20">
        <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <div
            className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} shadow-[0_0_15px_rgba(255,255,255,0.5)]`}
          />
          <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
        </div>
      </div>

      {/* Content Side */}
      <div className={`w-full md:w-[calc(50%-32px)] group`}>
        <div className="relative p-8 md:p-10 rounded-[2rem] glass border border-white/5 hover:border-white/10 transition-all duration-500 bg-background/40 hover:bg-background/60 overflow-hidden">
          {/* Gradient Glow */}
          <div
            className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
          />
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-colors duration-500" />

          {/* Header */}
          <div className="relative z-10 mb-6">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/5 border border-white/5 text-muted-foreground flex items-center gap-2">
                <Calendar className="w-3 h-3" /> {exp.date}
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/5 border border-white/5 text-muted-foreground flex items-center gap-2">
                <MapPin className="w-3 h-3" /> {exp.location}
              </span>
            </div>

            <h3 className="text-3xl font-black mb-2 tracking-tight">
              {exp.company}
            </h3>
            <p
              className={`text-lg font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent flex items-center gap-2`}
            >
              <Briefcase className="w-4 h-4 text-muted-foreground" /> {exp.role}
            </p>
          </div>

          {/* Description */}
          <ul className="space-y-4 mb-8 relative z-10">
            {exp.description.map((item: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-3 text-muted-foreground/80 leading-relaxed text-sm md:text-base"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 relative z-10">
            {exp.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-white/20 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Empty Side for Desktop Layout */}
      <div className="hidden md:block w-[calc(50%-32px)]" />
    </motion.div>
  );
};

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    {
      stiffness: 100,
      damping: 30,
    }
  );

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6"
          >
            <Sparkles className="w-4 h-4" /> History
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
          >
            PROFESSIONAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent animate-gradient bg-[length:200%_auto]">
              TIMELINE
            </span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-7xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 transform md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-accent via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(var(--accent),0.5)]"
            />
          </div>

          <div className="flex flex-col gap-24 relative z-10 pl-8 md:pl-0">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
