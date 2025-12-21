import { useState, useRef, useEffect } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaFigma, FaGithub } from "react-icons/fa";
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
} from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbApi } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const [activeId, setActiveId] = useState(1);
    const containerRef = useRef(null);

    const categories = [
        {
            id: 1,
            title: "Frontend",
            subtitle: "Engineering",
            desc: "Crafting pixel-perfect, accessible, and performant user interfaces.",
            bgPattern: "radial-gradient(circle at 50% 50%, #61DBFB20 0%, transparent 70%)",
            skills: [
                { name: "React", icon: <FaReact />, color: "#61DBFB" },
                { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
                { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
                { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
                { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
                { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
                { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
                { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
            ],
        },
        {
            id: 2,
            title: "Backend",
            subtitle: "Architecture",
            desc: "Building scalable server-side systems and secure APIs.",
            bgPattern: "radial-gradient(circle at 50% 50%, #68A06320 0%, transparent 70%)",
            skills: [
                { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
                { name: "GraphQL", icon: <SiGraphql />, color: "#E535AB" },
                { name: "REST API", icon: <TbApi />, color: "#000000 dark:text-white" },
                { name: "Express", icon: <SiExpress />, color: "#000000" },
                { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
                // { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
                { name: "MySQL", icon: <SiMysql />, color: "#336791" },
                { name: "Java", icon: <FaJava />, color: "#F80000" },
            ],
        },
        {
            id: 3,
            title: "DevOps",
            subtitle: "& Tools",
            desc: "Streamlining deployment, testing, and collaboration workflows.",
            bgPattern: "radial-gradient(circle at 50% 50%, #F0503220 0%, transparent 70%)",
            skills: [
                { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
                { name: "GitHub", icon: <FaGithub />, color: "#181717" },
                { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
                { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
                { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
            ],
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".skill-panel",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="skills"
            ref={containerRef}
            className="w-full min-h-screen py-10 flex flex-col justify-center overflow-hidden relative z-10 mt-5 md:mt-10"

        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-8 w-full h-full">

                {/* Header */}
                <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h4 className="text-[#2a0878] dark:text-[#5412ee] font-mono text-sm tracking-widest uppercase mb-4 opacity-80">
                            02. My Expertise
                        </h4>
                        <h2 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] dark:text-[#b1afaf] tracking-tight">
                            Technical <span className="text-[#2a0878] dark:text-[#5412ee] ">Arsenal</span>
                        </h2>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-gray-500 dark:text-gray-300 text-sm font-mono">
                        <div className="w-2 h-2 rounded-full bg-[#2a0878] dark:bg-[#5412ee] animate-pulse"></div>
                        Hover to expand
                    </div>
                </div>

                {/* --- ACCORDION CONTAINER --- */}
                <div className="flex flex-col lg:flex-row gap-4 h-full lg:h-[600px] w-full">

                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            // On Mobile/Tablet: Click to expand. On Desktop: Hover to expand.
                            onClick={() => setActiveId(cat.id)}
                            onMouseEnter={() => window.innerWidth >= 1024 && setActiveId(cat.id)}
                            className={`skill-panel relative rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer lg:cursor-default border border-white/50 dark:border-[#1a1a1a]/50 shadow-sm
                ${activeId === cat.id
                                    ? "lg:flex-3 max-h-[800px]"
                                    : "lg:flex-1 max-h-[200px] min-h-40 lg:max-h-full lg:min-h-0"} 
                bg-white/40 dark:bg-[#1a1a1a] backdrop-blur-md group
                flex flex-col
              `}
                        >
                            {/* Background Gradient Spot */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{ background: cat.bgPattern }}
                            />

                            {/* === CONTENT CONTAINER === */}
                            <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-between">

                                {/* Top: Number & Title */}
                                <div className="flex justify-between items-start mb-4 lg:mb-0">
                                    <div className="flex flex-col">
                                        <span className="block text-3xl md:text-5xl font-light text-gray-300 mb-2 group-hover:text-[#2a0878] dark:group-hover:text-[#5412ee] transition-colors duration-300">
                                            0{cat.id}
                                        </span>
                                        <h3 className={`text-2xl md:text-3xl font-bold text-[#1a1a1a] dark:text-[#b1afaf] transition-transform duration-500 origin-left whitespace-nowrap
                      ${activeId === cat.id ? "scale-100" : "lg:scale-75 lg:opacity-70"}
                    `}>
                                            {cat.title} <br className="hidden lg:block" />
                                            <span className="font-light italic text-gray-600 dark:text-gray-400 block lg:inline">{cat.subtitle}</span>
                                        </h3>
                                    </div>

                                    {/* Icon appearing on active state */}
                                    <div className={`p-3 rounded-full bg-white text-[#2a0878] transition-all duration-500
                    ${activeId === cat.id ? "opacity-100 rotate-45" : "opacity-0 rotate-0"}
                  `}>
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>

                                {/* Bottom: Description & Skills Grid (Only visible when active) */}
                                <div className={`transition-all duration-700 delay-100 overflow-hidden flex-1
                  ${activeId === cat.id ? "opacity-100 mt-4" : "lg:opacity-0 lg:max-h-0 hidden lg:block"}
                `}>
                                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
                                        {cat.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {cat.skills.map((skill, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1 bg-black/5 dark:bg-white/30 backdrop-blur-md"
                                            >
                                                {/* Adjusted text sizes based on your preference */}
                                                <span style={{ color: skill.color }} className="text-lg md:text-5xl">
                                                    {skill.icon}
                                                </span>
                                                <span className="font-medium text-gray-800 dark:text-[#cecccc] text-xs md:text-xl">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Vertical Text for Inactive Panels (Desktop Only) */}
                                <div className={`absolute bottom-10 left-8 origin-bottom-left -rotate-90 transition-all duration-500
                    ${activeId === cat.id ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}
                    hidden lg:block
                 `}>
                                    <span className="text-xl font-bold tracking-widest text-gray-400 uppercase whitespace-nowrap">
                                        {cat.title} — {cat.subtitle}
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Skills;  