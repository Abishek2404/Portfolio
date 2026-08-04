"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Mail, Phone, Target, Lightbulb, BookOpen, Users } from "lucide-react";
import { fadeUp, slideInLeft, staggerContainer, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/constants";

const TRAITS = [
  {
    icon: Target,
    title: "Problem Solver",
    description: "I love solving problems with clean code and structured thinking.",
  },
  {
    icon: Lightbulb,
    title: "Fast Learner",
    description: "I adapt quickly to new technologies and enjoy the process.",
  },
  {
    icon: BookOpen,
    title: "Creative Thinker",
    description: "I turn abstract ideas into practical, well-designed products.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "I collaborate well and enjoy building things alongside others.",
  },
];

const INFO = [
  { icon: Calendar, label: "Birthday", value: SITE.birthday },
  { icon: MapPin, label: "Location", value: SITE.location },
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: Phone, label: "Phone", value: SITE.phone },
];

export function About() {
  return (
    <section id="about" className="section bg-surface">
      <div className="container mx-auto max-w-8xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-700 shadow-card">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <Image
                  src="/abishek-img.png"
                  alt="AR"
                  width={600}
                  height={600}
                  className="h-full w-full object-contain opacity-90"
                />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_60%)]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 left-6 max-w-xs rounded-2xl bg-primary p-5 text-white shadow-card-hover sm:left-10"
            >
              <p className="text-lg leading-snug">
                &ldquo;Code is not just what I do — it&rsquo;s how I solve problems and
                create impact.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.p variants={fadeUp} className="eyebrow">
              About Me
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl"
            >
              I&rsquo;m {SITE.name},<br />
              a <span className="text-accent">Developer &amp; Problem Solver</span>
            </motion.h2>
            <span className="heading-underline block" />

            <motion.p variants={fadeUp} className="mt-6 leading-relaxed text-text-sub">
              I&rsquo;m a developer and founder of {SITE.tagline}, focused on
              building fast, accessible, and thoughtfully designed web applications.
              I care about the details that make a product feel effortless to use.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 leading-relaxed text-text-sub">
              Outside of client work, I&rsquo;m usually learning something new,
              contributing to open source, or mentoring developers earlier in their
              careers.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {INFO.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-text-sub">{item.label}</p>
                    <p className="text-sm font-semibold text-text">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Trait cards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TRAITS.map((trait) => (
            <motion.div
              key={trait.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="card-surface p-6 transition-shadow duration-300 hover:shadow-card-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <trait.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-semibold text-text">{trait.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-sub">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
