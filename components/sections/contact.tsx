"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, CheckCircle2 } from "lucide-react";
import { fadeUp, slideInRight, staggerContainer, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

const ICONS: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s|\(|\)|-/g, "")}` },
  { icon: MapPin, label: "Location", value: SITE.location, href: undefined },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your form handler / API route of choice.
    setStatus("sent");
  }

  return (
    <section id="contact" className="section bg-surface">
      <div className="container mx-auto max-w-8xl px-6">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Get In Touch
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          >
            Let&rsquo;s build something <span className="text-accent">amazing together</span>
          </motion.h2>
          <span className="heading-underline block" />
          <motion.p variants={fadeUp} className="mt-6 leading-relaxed text-text-sub">
            Have a project in mind, or just want to say hello? I&rsquo;d love to hear
            from you.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Info column */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {CONTACT_INFO.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="card-surface flex items-center gap-4 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-text-sub">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-text hover:text-accent">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-text">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-sub">
                Connect
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = ICONS[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-text transition-all hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-card"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="card-surface p-8 lg:col-span-3"
          >
            <h3 className="mb-6 font-bold text-text">Send Me a Message</h3>
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-success" />
                <p className="font-semibold text-text">Message sent</p>
                <p className="text-sm text-text-sub">
                  Thanks for reaching out — I&rsquo;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-text">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Project inquiry"
                    className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </div>
                <Button type="submit" size="lg" className="gap-2">
                  Send Message <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
