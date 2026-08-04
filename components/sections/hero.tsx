"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Code2, Rocket, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { HERO_STATS, SITE } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const headline = "I build modern digital products.";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(37,99,235,.10), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/4 top-16 h-3 w-3 rounded-full bg-accent/30 animate-float" />
        <div className="absolute right-1/3 top-40 h-2 w-2 rounded-full bg-primary/30 animate-float [animation-delay:1.5s]" />
      </div>

      <div className="container mx-auto grid max-w-8xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left: copy */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Hello, I&rsquo;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-primary sm:text-6xl lg:text-7xl"
          >
            {SITE.name}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-2xl font-semibold text-text sm:text-3xl"
          >
            {SITE.role} <span className="text-accent">&amp; {SITE.tagline}</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-sub"
          >
            {SITE.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Magnetic>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Button size="lg" className="gap-2">
                  View My Work <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </Magnetic>
            <Magnetic>
              <a href={SITE.resumeUrl} download>
                <Button size="lg" variant="secondary">
                  Download Resume
                </Button>
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-primary sm:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-xs text-text-sub sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
        >
          <div className="absolute inset-0 rounded-full border border-dashed border-primary/15 animate-spin-slow" />
          <div className="relative flex h-[85%] w-[85%] items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-700 p-6 shadow-2xl">
            <Image
              src="/abishek-img.png"
              alt="AR"
              width={500}
              height={500}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Floating icon badges */}
          <motion.div
            className="absolute left-2 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-white shadow-card animate-float"
            aria-hidden="true"
          >
            <Code2 className="h-6 w-6 text-accent" />
          </motion.div>
          <motion.div
            className="absolute -left-6 bottom-16 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-white shadow-card animate-float [animation-delay:2s]"
            aria-hidden="true"
          >
            <Rocket className="h-6 w-6 text-accent" />
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -right-4 top-10 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-card sm:-right-10"
          >
            <Users className="h-5 w-5 text-accent" />
            <div>
              <p className="text-sm font-bold text-primary">15+ Clients</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -right-2 bottom-6 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-card sm:-right-8"
          >
            <Trophy className="h-5 w-5 text-accent" />
            <div>
              <p className="text-sm font-bold text-primary">98% Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-sub"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to About section"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
