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
      "Architecting scalable MERN applications and AI-powered systems utilizing RAG and ML models. Designing robust REST APIs, optimizing backend performance, and streamlining deployment workflows for production environments.",

    projects: [
      {
        name: "RAG AI Assistant",
        desc: "Context-aware AI assistant featuring document ingestion, vector search, and secure REST APIs.",
      },
      {
        name: "ML Forecasting Engine",
        desc: "Predictive engine leveraging regression and time-series ML models for data-driven trend analysis.",
      },
    ],

    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "RAG",
      "ML",
      "Docker",
      "Python",
      "FastAPI",
      "LLM",
      "Vector DB",
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
