export const experiences = [
  {
    id: "besant",
    company: "BESANT Technologies",
    role: "MERN Stack Intern",
    period: "Aug 2025 - Jan 2026",
    location: "On-site",
    summary:
      "Built and deployed multiple full-stack CRUD applications using the MERN stack. Gained hands-on experience in RESTful API development, MongoDB schema design, authentication using JWT, and frontend state management with React. Strengthened understanding of client-server architecture and version control workflows using Git and GitHub.",

    projects: [
      {
        name: "CRUD Management System",
        desc: "Developed an end-to-end CRUD application with user authentication, protected routes, and dynamic UI updates. Designed REST APIs, structured MongoDB collections, and built responsive interfaces using Tailwind CSS.",
        source: "https://github.com/your-github-link", // optional
      },
    ],

    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT", "Git"],
  },
  {
    id: "amdox",
    company: "AMDOX Technologies",
    role: "Web Development Intern",
    period: "Dec 2025 - Jan 2026",
    location: "Remote",
    summary:
      "Spearheaded the complete architectural overhaul of the company's internal recruitment systems. Transformed abstract business requirements into a high-performance, secure MERN stack ecosystem, establishing role-based access control (RBAC) protocols and reducing bulk processing time by 40%.",
    projects: [
      {
        name: "Job Listing Portal",
        desc: "Recruitment dashboard with multi-tier role auth & real-time tracking.",
        source: "https://github.com/SHATHISH-07/MERN-JOB_PORTAL",
      },
      {
        name: "Certificate Verification System",
        desc: "Automated verification system for bulk Excel uploads & PDF generation.",
        source:
          "https://github.com/SHATHISH-07/certificate-verification-system",
      },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT"],
  },
];
