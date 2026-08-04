import Image from "next/image";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

const ICONS: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="container mx-auto max-w-8xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm font-bold">{SITE.name}</p>
                <p className="text-xs text-white/60">{SITE.role}</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Building fast, thoughtful web experiences — one project at a time.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/50">
              Quick Links
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/50">
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
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-accent"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
