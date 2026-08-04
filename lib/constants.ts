export const SITE = {
  name: "Abishek R",
  role: "Developer",
  tagline: "Twin Peaks Tech Solutions",
  title: "Abishek R — Developer & Founder",
  description:
    "Developer and founder building fast, modern, and scalable web applications with a focus on clean design and real-world impact.",
  url: "https://abishekr.dev",
  email: "abir33856@gmail.com",
  phone: "+91 9751523496",
  location: "Vellore, India",
  birthday: "December 23, 2004",
  resumeUrl: "/resume.pdf",
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Abishek2404", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abishek-raja-/", icon: "linkedin" },
  { label: "Twitter", href: "https://x.com/A1Abishek", icon: "twitter" },
  { label: "Instagram", href: "https://www.instagram.com/programmer_boy_abi", icon: "instagram" },
] as const;

export const HERO_STATS = [
  { label: "Projects", value: 20, suffix: "+" },
  { label: "Clients", value: 15, suffix: "+" },
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
] as const;
