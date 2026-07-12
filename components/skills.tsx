"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Layout,
  Terminal,
  Database,
  Zap,
  Layers,
  Activity,
  Server,
  GitBranch,
  ExternalLink,
  Code2,
  Braces,
  Cpu,
  Globe,
  Bot,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="h-10 w-10 text-emerald-400" />,
    skills: [
      { name: "Python", icon: <Code2 className="h-3 w-3" /> },
      { name: "Java", icon: <Code2 className="h-3 w-3" /> },
      { name: "JavaScript", icon: <Braces className="h-3 w-3" /> },
    ],
    glow: "rgba(16, 185, 129, 0.2)",
    accent: "emerald",
  },
  {
    title: "Frameworks & Libraries",
    icon: <Braces className="h-10 w-10 text-purple-400" />,
    skills: [
      { name: "Django", icon: <Layers className="h-3 w-3" /> },
      { name: "Django REST Framework", icon: <Layers className="h-3 w-3" /> },
      { name: "FastAPI", icon: <Zap className="h-3 w-3" /> },
      { name: "ReactJS", icon: <Layout className="h-3 w-3" /> },
      { name: "Bootstrap", icon: <Layout className="h-3 w-3" /> },
    ],
    glow: "rgba(168, 85, 247, 0.2)",
    accent: "purple",
  },
  {
    title: "Databases",
    icon: <Database className="h-10 w-10 text-blue-400" />,
    skills: [
      { name: "MySQL", icon: <Database className="h-3 w-3" /> },
      { name: "SQLite", icon: <Database className="h-3 w-3" /> },
    ],
    glow: "rgba(59, 130, 246, 0.2)",
    accent: "blue",
  },
  {
    title: "Tools & Platforms",
    icon: <Terminal className="h-10 w-10 text-amber-400" />,
    skills: [
      { name: "Git", icon: <GitBranch className="h-3 w-3" /> },
      { name: "GitHub", icon: <ExternalLink className="h-3 w-3" /> },
      { name: "VS Code", icon: <Terminal className="h-3 w-3" /> },
      { name: "Postman", icon: <Activity className="h-3 w-3" /> },
      { name: "Vercel", icon: <Server className="h-3 w-3" /> },
      { name: "Google Colab", icon: <Server className="h-3 w-3" /> },
    ],
    glow: "rgba(245, 158, 11, 0.2)",
    accent: "amber",
  },
  {
    title: "Concepts",
    icon: <Cpu className="h-10 w-10 text-rose-400" />,
    skills: [
      { name: "REST APIs", icon: <Globe className="h-3 w-3" /> },
      { name: "NLP", icon: <Bot className="h-3 w-3" /> },
      { name: "OOP", icon: <Braces className="h-3 w-3" /> },
      { name: "MVC/MVT Architecture", icon: <Layers className="h-3 w-3" /> },
      { name: "Prompt Engineering", icon: <Zap className="h-3 w-3" /> },
      { name: "LLM Integration", icon: <Bot className="h-3 w-3" /> },
    ],
    glow: "rgba(244, 63, 94, 0.2)",
    accent: "rose",
  },
];

const allTech = [
  "Python",
  "Java",
  "JavaScript",
  "Django",
  "Django REST Framework",
  "FastAPI",
  "ReactJS",
  "Bootstrap",
  "MySQL",
  "SQLite",
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "Vercel",
  "Google Colab",
  "REST APIs",
  "NLP",
  "OOP",
  "MVC/MVT",
  "Prompt Engineering",
  "LLM Integration",
];

function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden border-y border-accent/20 bg-accent/5 backdrop-blur-sm mb-20 pointer-events-none select-none">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap py-4"
      >
        {[...allTech, ...allTech].map((tech, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-bold tracking-[0.2em] text-accent/60 uppercase"
          >
            {tech} <span className="ml-8 text-accent/20">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY }}
        className="relative h-full group"
      >
        <Card className="glass relative overflow-hidden p-8 border-accent/10 hover:border-accent/40 transition-colors duration-500 h-full backdrop-blur-xl">
          {/* Spotlight Effect */}
          <motion.div
            className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(var(--ring-rgb),0.1),transparent_40%)]"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) =>
                  `radial-gradient(400px circle at ${((x as number) + 0.5) * 100
                  }% ${((y as number) + 0.5) * 100}%, ${category.glow
                  }, transparent)`
              ),
            }}
          />

          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-accent/5 border border-accent/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {category.icon}
              </div>
              <div className="text-[10px] font-mono text-accent/40 tracking-widest uppercase py-1 px-2 border border-accent/10 rounded-full">
                Module {index + 1}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 tracking-tight group-hover:text-accent transition-colors">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-background/50 border border-muted hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default group/pill"
                >
                  <span className="text-accent/50 group-hover/pill:text-accent transition-colors">
                    {skill.icon}
                  </span>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Animated corner decals */}
          <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
            <div className="absolute top-4 right-4 w-[2px] h-8 bg-gradient-to-b from-accent/40 to-transparent group-hover:h-12 transition-all duration-700" />
            <div className="absolute top-4 right-4 w-8 h-[2px] bg-gradient-to-l from-accent/40 to-transparent group-hover:w-12 transition-all duration-700" />
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-[1px] w-8 bg-accent/50" />
            <span className="text-xs font-mono tracking-[0.4em] text-accent uppercase">
              Expertise
            </span>
            <div className="h-[1px] w-8 bg-accent/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            CORE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
              ENGINEERING
            </span>{" "}
            STACK
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed"
          >
            Building high-performance, scalable applications with modern
            toolsets and a focus on exceptional developer experience.
          </motion.p>
        </div>

        <Marquee />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
    </section>
  );
}
