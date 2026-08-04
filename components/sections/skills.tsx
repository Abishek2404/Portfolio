"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Brain } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import skillsData from "@/data/skills.json";

const ICONS: Record<string, typeof Code2> = {
  code: Code2,
  server: Server,
  database: Database,
  wrench: Wrench,
  brain: Brain,
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto max-w-8xl px-6">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            My Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          >
            The technologies I use to build{" "}
            <span className="text-accent">amazing things</span>
          </motion.h2>
          <span className="heading-underline block" />
          <motion.p variants={fadeUp} className="mt-6 leading-relaxed text-text-sub">
            I turn ideas into real-world solutions using a modern, well-tested
            stack — here&rsquo;s what I reach for most.
          </motion.p>
        </motion.div>

        {/* Category cards */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {skillsData.categories.map((cat) => {
            const Icon = ICONS[cat.icon] ?? Code2;
            return (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="card-surface p-6 transition-shadow duration-300 hover:shadow-card-hover"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-semibold text-text">{cat.title}</h3>
                <span className="mt-2 block h-0.5 w-8 rounded-full bg-accent" />
                <ul className="mt-4 space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-text-sub"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Proficiency + logos */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="card-surface p-8"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-accent">
              Skill Proficiency
            </h3>
            <div className="space-y-6">
              {skillsData.proficiency.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-text">{skill.name}</span>
                    <span className="font-semibold text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-border">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={viewportOnce}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="card-surface p-8"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-accent">
              Other Tools I Work With
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {skillsData.logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-border bg-white p-3 text-center transition-colors hover:border-accent"
                >
                  <img
                    src={logo.imageUrl}
                    alt={logo.name}
                    className="h-16 w-16 object-contain"
                  />
                  <span className="text-[11px] font-semibold text-text">{logo.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
