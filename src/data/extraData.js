import {
  Award,
  ShieldCheck,
  Cloud,
  BrainCircuit,
  Zap,
  Music,
  ChefHat,
  Film,
} from "lucide-react";

export const categories = [
  {
    id: "achievements",
    title: "Glory & Wins",
    subtitle: "01 / Competitions",
    description: "Recognized for innovation and technical excellence.",
    accentColor: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
    bgHover:
      "group-hover:bg-gradient-to-r group-hover:from-amber-50/50 group-hover:to-transparent dark:group-hover:from-amber-900/10",
    items: [
      {
        title: "Intelligent Automation Paper",
        desc: "1st Place Winner @ TIETSYMPO 2K23.",
        icon: Award,
      },
      {
        title: "Incognito Tech Challenge",
        desc: "3rd Place @ KNOWMEET 2K23.",
        icon: Zap,
      },
    ],
  },
  {
    id: "learning",
    title: "Knowledge Base",
    subtitle: "02 / Workshops",
    description: "Continuous learning through hands-on technical gatherings.",
    accentColor: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
    bgHover:
      "group-hover:bg-gradient-to-r group-hover:from-cyan-50/50 group-hover:to-transparent dark:group-hover:from-cyan-900/10",
    items: [
      {
        title: "AI Cybersecurity",
        desc: "Workshop @ PSG Tech",
        icon: ShieldCheck,
      },
      {
        title: "AWS Cloud Computing",
        desc: "Workshop @ Knowledge Inst.",
        icon: Cloud,
      },
      {
        title: "Deep Learning",
        desc: "SAMHITA'24 @ MIT India",
        icon: BrainCircuit,
      },
      { title: "GENIO 2K23", desc: "Symposium Participation", icon: Zap },
    ],
  },
  {
    id: "hobbies",
    title: "Life & Soul",
    subtitle: "03 / Passions",
    description: "Fueling creativity through arts and culture.",
    accentColor: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
    bgHover:
      "group-hover:bg-gradient-to-r group-hover:from-rose-50/50 group-hover:to-transparent dark:group-hover:from-rose-900/10",
    items: [
      {
        title: "Music Enthusiast",
        desc: "Exploring genres daily.",
        icon: Music,
      },
      { title: "Cooking", desc: "Like to Cook and Eat.", icon: ChefHat },
      { title: "Cinephile", desc: "Sci-fi & Thrillers.", icon: Film },
    ],
  },
];
