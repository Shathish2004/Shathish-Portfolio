import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";

export const sitemap = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const projects = [
  { name: "IMDB Clone", href: "#projects" },
  { name: "Weather App", href: "#projects" },
  { name: "E-Commerce", href: "#projects" },
  { name: "AI Learning App", href: "#projects" },
];

export const socials = [
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/shathish-kumaran/",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    href: "https://github.com/SHATHISH-07",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:shathishkumaran07@gmail.com",
  },
];
