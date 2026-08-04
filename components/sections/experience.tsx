"use client";

import { motion } from "framer-motion";
import { Rocket, Code2, BookOpen, GraduationCap, Target, Lightbulb, Users, GaugeCircle } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import experienceData from "@/data/experience.json";

const ICONS: Record<string, typeof Rocket> = {
  rocket: Rocket,
  code: Code2,
  book: BookOpen,
  graduation: GraduationCap,
  target: Target,
  lightbulb: Lightbulb,
  users: Users,
};

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto max-w-8xl px-6">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            My Experience
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          >
            My journey so far, and where <span className="text-accent">I&rsquo;m heading</span>
          </motion.h2>
          <span className="heading-underline block" />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[15px] top-2 h-[calc(100%-2rem)] w-px bg-border" aria-hidden="true" />
            <div className="space-y-10">
              {experienceData.timeline.map((item, i) => {
                const Icon = ICONS[item.icon] ?? Code2;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="relative pl-12"
                  >
                    <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-accent text-white shadow-card">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <div className="rounded-2xl border border-border bg-white/70 p-6 shadow-soft backdrop-blur-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-xs font-semibold text-accent">{item.period}</p>
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="mt-2 font-bold text-text">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-sub">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="card-surface p-6">
              <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-accent">
                Core Strengths
              </h3>
              <div className="grid grid-cols-2 gap-5">
                {experienceData.coreStrengths.map((s) => {
                  const Icon = ICONS[s.icon] ?? Target;
                  return (
                    <div key={s.title}>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h4 className="mt-3 text-sm font-semibold text-text">{s.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-text-sub">
                        {s.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="card-surface flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="font-semibold text-text">{experienceData.education.degree}</h4>
                  <p className="text-xs text-text-sub">
                    {experienceData.education.school} · {experienceData.education.period}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-text-sub">GPA</p>
                <p className="font-bold text-accent">{experienceData.education.gpa}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-border bg-white p-8 shadow-soft sm:grid-cols-4"
        >
          {experienceData.stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <GaugeCircle className="h-5 w-5" />
              </div>
              <div className="text-2xl font-bold text-primary sm:text-3xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-xs text-text-sub sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
