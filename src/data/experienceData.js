import itl from "/assets/experienceImg/itl.jpg";
import besant from "/assets/experienceImg/besant.png";
import amdox from "/assets/experienceImg/amdox.jpg";

export const experiences = [
  {
    id: "idealtech",
    company: "Ideal Tech Labs",
    role: "Full Stack Developer",
    period: "Feb 2026 - Present",
    location: "Chennai, India",
    imageId: itl,

    summary:
      "Developing enterprise-grade full-stack applications for port and terminal operations using React, Node.js, TypeScript, and PostgreSQL. Building scalable REST APIs, real-time systems, geospatial visualizations, and machine learning–driven analytics for production environments.",

    projects: [
      {
        name: "DeckOptimizer",
        desc: "Developed an intelligent stowage planning and vessel analytics platform with stay-time prediction, crane utilization analysis, heatmaps, and operational dashboards for port optimization. A Real Time Terminal 3D map to View the Active Yard containers and vessels and recommendations.",
      },
      {
        name: "Terminal Tracker",
        desc: "Built a real-time GPS tracking system featuring live device monitoring, WebSocket-based location updates, interactive terminal maps, XML yard layout parsing, and geospatial visualization.",
      },
    ],

    stack: [
      "React",
      "TypeScript",
      "Three.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "WebSocket",
      "Python",
      "Machine Learning",
      "REST APIs",
      "Git",
    ],
  },

  {
    id: "besant",
    company: "Besant Technologies",
    role: "MERN Stack Intern",
    period: "Aug 2025 - Jan 2026",
    location: "Chennai, India",
    imageId: besant,
    summary:
      "Engineered full-stack applications using the MERN stack, focusing on RESTful API architecture and optimized MongoDB schema design. Implemented secure JWT authentication and crafted responsive, dynamic user interfaces.",

    projects: [
      {
        name: "CRUD Management System",
        desc: "Secure full-stack application featuring JWT authentication, protected routing, and a dynamic React frontend.",
      },
    ],

    stack: ["React", "Node.js", "MongoDB", "JWT", "Git"],
  },

  {
    id: "amdox",
    company: "Amdox Technologies",
    role: "Web Development Intern",
    period: "Dec 2025 - Jan 2026",
    location: "Remote",
    imageId: amdox,
    summary:
      "Developed scalable recruitment platforms featuring role-based access control (RBAC) and optimized bulk-data processing workflows. Enhanced system efficiency, automated data handling, and ensured secure application architecture.",

    projects: [
      {
        name: "Job Listing Portal",
        desc: "Dynamic recruitment dashboard featuring RBAC and real-time applicant tracking.",
      },
      {
        name: "Certificate Verification System",
        desc: "Automated utility for bulk Excel data processing and dynamic PDF certificate generation.",
      },
    ],

    stack: ["React", "Node.js", "MongoDB", "JWT"],
  },
];
