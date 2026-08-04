"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import projectsData from "@/data/projects.json";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All Projects",
  "Frontend",
  "Web Development",
  "AI Platform",
  "AI/ML",
  "Generative AI",
  "Creative Web",
  "Business Application"
] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All Projects");

  const filtered = useMemo(() => {
    if (active === "All Projects") return projectsData;
    return projectsData.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="section bg-surface">
      <div className="container mx-auto max-w-8xl px-6">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            My Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          >
            Projects that solve <span className="text-accent">real-world problems</span>
          </motion.h2>
          <span className="heading-underline block" />
          <motion.p variants={fadeUp} className="mt-6 leading-relaxed text-text-sub">
            A selection of things I&rsquo;ve built that showcase my range, from
            client-facing products to internal tools.
          </motion.p>
        </motion.div>

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap gap-3" role="tablist" aria-label="Project categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-xl border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                active === cat
                  ? "border-primary bg-primary text-white shadow-card"
                  : "border-border bg-white text-text hover:border-accent hover:text-accent"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group card-surface overflow-hidden transition-shadow duration-300 hover:shadow-card-hover"
              >
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary to-primary-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-lg font-semibold text-white">{project.title}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-primary/0 opacity-0 transition-all duration-300 group-hover:bg-primary/70 group-hover:opacity-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary transition-transform hover:scale-110"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary transition-transform hover:scale-110"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-text">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-sub">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-text-sub"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
