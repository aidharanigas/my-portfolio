"use client";

import { motion } from "framer-motion";
import { Code2, Bot, Sparkles, MonitorSmartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
    {
        title: "Full-Stack Development",
        description: "Crafting robust, scalable web applications with high-performance architectures and clean code standards.",
        icon: <Code2 className="h-8 w-8 text-blue-400" />,
        glow: "rgba(59, 130, 246, 0.15)",
    },
    {
        title: "AI Integration",
        description: "Implementing intelligent solutions and automation workflows using state-of-the-art LLMs and custom AI agents.",
        icon: <Bot className="h-8 w-8 text-emerald-400" />,
        glow: "rgba(16, 185, 129, 0.15)",
    },
    {
        title: "Product Architecture",
        description: "Designing intuitive user experiences and high-fidelity interfaces that bridge the gap between form and function.",
        icon: <MonitorSmartphone className="h-8 w-8 text-purple-400" />,
        glow: "rgba(168, 85, 247, 0.15)",
    },
];

export function WhatIDo() {
    return (
        <section id="what-i-do" className="py-32 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-accent/20 bg-accent/5"
                    >
                        <Sparkles className="h-4 w-4 text-accent" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-accent uppercase font-bold">
                            Services & Expertise
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
                    >
                        DRIVING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                            DIGITAL IMPACT
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed"
                    >
                        I specialize in building future-ready applications that solve complex problems
                        through elegant design and cutting-edge engineering.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                        >
                            <Card className="group relative glass h-full p-10 border-accent/10 hover:border-accent/40 transition-all duration-500 overflow-hidden cursor-default">
                                {/* Glow Background */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{ background: `radial-gradient(circle at 50% 0%, ${service.glow}, transparent 70%)` }}
                                />

                                <div className="relative z-10">
                                    <div className="mb-8 inline-flex p-4 rounded-2xl bg-accent/5 border border-accent/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                </div>

                                {/* Animated progress bar at bottom */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700 ease-in-out" />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Grid Pattern Background */}
            <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />
        </section>
    );
}
