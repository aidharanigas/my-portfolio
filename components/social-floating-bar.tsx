"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

export function SocialFloatingBar() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/aidharanigas",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aidharanigas/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:dharaniga23@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <>
      {/* Desktop Floating Bar - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4"
      >
        <div className="flex flex-col items-center gap-2 p-2 glass rounded-full border-accent/10">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target={link.name === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full hover:bg-accent/10 transition-all text-muted-foreground hover:text-accent"
            >
              <link.icon className="w-5 h-5 transition-transform group-hover:scale-110" />

              {/* Tooltip */}
              <span className="absolute right-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-popover/80 backdrop-blur-sm border border-border/50 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
                {link.name}
              </span>
            </Link>
          ))}

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download="Dharaniga_Resume.pdf"
            className="group relative p-3 rounded-full hover:bg-accent/10 transition-all text-muted-foreground hover:text-accent"
          >
            <Download className="w-5 h-5 transition-transform group-hover:scale-110" />

            {/* Tooltip */}
            <span className="absolute right-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-popover/80 backdrop-blur-sm border border-border/50 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
              Resume
            </span>
          </a>

          {/* Vertical Line Decoration */}
          <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
        </div>
      </motion.div>

      {/* Mobile Bottom Bar (Optional, can be removed if not needed since we have footer links) 
          Keeping it hidden on mobile for now as per plan to avoid clutter, 
          but can be enabled if requested.
      */}
    </>
  );
}
