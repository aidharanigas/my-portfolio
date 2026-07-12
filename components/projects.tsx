"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Django Blog Application",
    description:
      "A secure blog platform with authentication, password reset, and role-based dashboards using Django MVT architecture.",
    tech: ["Django", "Bootstrap", "REST APIs"],
    link: "#",
    github: "https://github.com/aidharanigas/django-blog-app.git",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered tool that analyzes resumes against job descriptions, providing instant feedback on ATS compatibility and skill alignment.",
    tech: ["Python", "FastAPI", "REST APIs", "HTML/CSS/JS"],
    link: "https://ai-resume-analyzer-frontend-two.vercel.app/",
    github: "https://github.com/aidharanigas/ai-resume-analyzer-frontend",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Student Management System",
    description:
      "CRUD-based system for managing student records using Django ORM with registration and record management features.",
    tech: ["Python", "Django", "SQLite/MySQL"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Institute Website",
    description:
      "Responsive institute website with mobile-first design, featuring courses and faculty sections with clean UI layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/aidharanigas/FrontEndProject.git",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Lumina Travel Connoisseur",
    description:
      "An AI-powered travel recommendation engine that crafts personalized itineraries and discovers hidden gems based on user preferences.",
    tech: ["Next.js", "OpenAI", "Tailwind CSS", "Framer Motion"],
    link: "https://lumina-travel-connoisseur.vercel.app/",
    github: "https://github.com/aidharanigas/lumina-travel-connoisseur.git",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1000",
  },
];

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section
      ref={targetRef}
      id="projects"
      className="relative h-[300vh] bg-background"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-12">
          {/* Header Card */}
          <div className="w-[400px] shrink-0 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
            >
              FEATURED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                PROJECTS
              </span>
            </motion.h2>
            <p className="text-muted-foreground text-lg mb-8">
              Explore a collection of high-impact digital solutions and
              experimental interfaces.
            </p>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[450px] md:w-[600px] h-[500px] shrink-0"
            >
              <div className="group relative w-full h-full glass rounded-3xl overflow-hidden border-accent/10 hover:border-accent/40 transition-all duration-700">
                {/* Background Image with Parallax effect simulation on hover */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4 flex gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 glass text-[10px] font-bold uppercase tracking-wider rounded-full border-accent/20 text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-black mb-3 tracking-tight group-hover:text-glow transition-all">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <Button
                      asChild
                      size="sm"
                      className="rounded-full bg-accent text-accent-foreground neon-glow"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="rounded-full glass border-accent/20"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub <Github className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-accent/30 rounded-tr-2xl group-hover:w-16 group-hover:h-16 transition-all duration-500" />
              </div>
            </div>
          ))}

          {/* Footer Spacer/Card */}
          <div className="w-[300px] shrink-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 rounded-full glass flex items-center justify-center border-accent/20 cursor-pointer group"
            >
              <span className="text-accent group-hover:text-glow font-black text-center text-xs uppercase tracking-widest">
                More <br /> Soon
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Progress Indicator */}
      {/* <div className="absolute bottom-10 left-12 right-12 h-1 bg-accent/10 rounded-full overflow-hidden">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="h-full bg-accent origin-left shadow-[0_0_10px_rgba(var(--ring),0.8)]"
        />
      </div> */}
    </section>
  );
}
