// Skill Data for AboutSection Component
// import { FaReact, FaNodeJs, FaGithub, FaJava } from "react-icons/fa";
// import { TbApi } from "react-icons/tb";
// import {
//   SiMongodb,
//   SiGraphql,
//   SiTypescript,
//   SiTailwindcss,
//   SiExpress,
//   SiNextdotjs,
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
// } from "react-icons/si";

// Skill Data for SkillSection Component
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiDocker,
  SiPostman,
  SiJavascript,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiNestjs,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

// About Masquerade Skills Data

export const skillsRow1 = [
  { name: "JAVASCRIPT", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "REACT", Icon: FaReact, color: "#61DBFB" },
  { name: "NEXT", Icon: SiNextdotjs, color: "#000000 dark:text-white" },
  { name: "TYPESCRIPT", Icon: SiTypescript, color: "#3178C6" },
  { name: "NODE", Icon: FaNodeJs, color: "#68A063" },
  { name: "TAILWIND", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JAVA", Icon: FaJava, color: "#F80000" },
  { name: "Nest", Icon: SiNestjs, color: "#E0234E" },
];

export const skillsRow2 = [
  { name: "MONGODB", Icon: SiMongodb, color: "#10A37F" },
  { name: "GRAPHQL", Icon: SiGraphql, color: "#E535AB" },
  { name: "EXPRESS", Icon: SiExpress, color: "#000000" },
  { name: "GITHUB", Icon: FaGithub, color: "#181719 dark:text-white" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6" },
  { name: "REST API", Icon: TbApi, color: "#000000 dark:text-white" },
  { name: "MYSQL", Icon: SiMysql, color: "#336791" },
];

// Skill Section Data

export const categories = [
  {
    id: 1,
    title: "Frontend",
    subtitle: "Engineering",
    desc: "Crafting pixel-perfect, accessible, and performant user interfaces.",
    bgPattern:
      "radial-gradient(circle at 50% 50%, #61DBFB20 0%, transparent 70%)",
    skills: [
      { name: "React", icon: FaReact, color: "#61DBFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    id: 2,
    title: "Backend",
    subtitle: "Architecture",
    desc: "Building scalable server-side systems and secure APIs.",
    bgPattern:
      "radial-gradient(circle at 50% 50%, #68A06320 0%, transparent 70%)",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
      { name: "GraphQL", icon: SiGraphql, color: "#E535AB" },
      { name: "REST API", icon: TbApi, color: "#000000 dark:text-white" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
      { name: "MySQL", icon: SiMysql, color: "#336791" },
      { name: "Java", icon: FaJava, color: "#F80000" },
    ],
  },
  {
    id: 3,
    title: "DevOps",
    subtitle: "& Tools",
    desc: "Streamlining deployment, testing, and collaboration workflows.",
    bgPattern:
      "radial-gradient(circle at 50% 50%, #F0503220 0%, transparent 70%)",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
];
