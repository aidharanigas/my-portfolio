"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="pt-24 pb-10 relative overflow-hidden bg-surface/20"
    >
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Side: Info */}
          <div className="w-full md:w-1/3">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8 tracking-tighter"
            >
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                TRANSCEND?
              </span>
            </motion.h2>

            <p className="text-muted-foreground text-lg mb-10">
              Let&apos;s build something that pushes the boundaries of digital
              experience.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center border-accent/20 group-hover:border-accent/50 transition-all">
                  <Mail className="text-accent h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                    Email
                  </p>
                  <a
                    href="mailto:dharaniga23@gmail.com"
                    className="text-foreground font-medium"
                  >
                    dharaniga23@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                {[
                  { icon: Github, link: "https://github.com/aidharanigas" },
                  {
                    icon: Linkedin,
                    link: "https://www.linkedin.com/in/aidharanigas/",
                  },
                ].map((data, i) => (
                  <motion.a
                    key={i}
                    href={data.link}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-2xl glass flex items-center justify-center border-accent/10 hover:border-accent/40 text-muted-foreground hover:text-accent transition-all"
                  >
                    <data.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-2/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[2.5rem] border-accent/10 relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground ml-4">
                      Full Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      className="h-14 bg-background/50 border-accent/10 focus:border-accent/50 focus:ring-accent/20 rounded-2xl px-6 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground ml-4">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="h-14 bg-background/50 border-accent/10 focus:border-accent/50 focus:ring-accent/20 rounded-2xl px-6 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground ml-4">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your vision..."
                    className="min-h-[150px] bg-background/50 border-accent/10 focus:border-accent/50 focus:ring-accent/20 rounded-2xl p-6 transition-all resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-2xl bg-accent text-accent-foreground font-black text-lg neon-glow hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {submitted
                      ? "MISSION COMPLETE"
                      : isSubmitting
                        ? "TRANSMITTING..."
                        : "SEND MESSAGE"}
                    {!submitted && !isSubmitting && (
                      <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                  </span>

                  {/* Button Background Animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent via-emerald-400 to-accent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ opacity: isSubmitting ? 0.5 : 0 }}
                  />
                </Button>
              </form>

              {/* Decorative Background */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="container px-6 mx-auto mt-24 pt-8 border-t border-border/40 text-center">
        <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
          DESIGNED FOR THE FUTURE.
        </p>
      </div>
    </section>
  );
}
