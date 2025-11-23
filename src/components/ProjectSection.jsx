import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Code2, Calendar, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import EcommerceAppImg from "/assets/projectImg/ecommerce-app.png";
import AiSaasApp from "/assets/projectImg/ai-saas-app.png";
import WeatherApp from "/assets/projectImg/weather-app.png";
import IMDBApp from "/assets/projectImg/imdb-app.png";


gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        id: "01",
        year: "2025",
        title: "E-Commerce Site",
        category: "Full Stack",
        description:
            "A complete e-commerce application with secure OTP verification, real-time order tracking (Shipped, Delivered), and a smart return-management workflow. Includes a comprehensive Admin Dashboard.",
        tech: "React, Node.js, MongoDB, Redux Toolkit, NodeMailer",
        image: EcommerceAppImg,
        github: "https://github.com/SHATHISH-07/Ecommerce-App",
        live: "https://shathish-07.github.io/ecommerce-frontend/#/",
        color: "#2a0878",
    },
    {
        id: "02",
        year: "2025",
        title: "ReactIQ AI Saas",
        category: "AI & Real-time",
        description:
            "A voice AI-powered learning platform where an intelligent tutor teaches through natural conversation. Features real-time voice communication, dynamic lesson generation, and progress tracking.",
        tech: "Next.js, TypeScript, Supabase, Clerk, Vapi (Voice AI)",
        image: AiSaasApp,
        github: "https://github.com/SHATHISH-07/ai-saas-app",
        live: "https://ai-saas-app-bice-one.vercel.app/",
        color: "#1a1a1a",
    },
    {
        id: "03",
        year: "2025",
        title: "Weather App",
        category: "Data Visualization",
        description:
            "Dynamic weather application providing real-time temperature, conditions, and insights for any global location. Optimized for speed and handles complex API data integration seamlessly.",
        tech: "React, TypeScript, Tailwind, LocationIQ API, Redux",
        image: WeatherApp,
        github: "https://github.com/SHATHISH-07/Weather-app",
        live: "https://shathish-07.github.io/weatherapp-frontend/#/",
        color: "#4a1d96",
    },
    {
        id: "04",
        year: "2024",
        title: "IMDB Clone",
        category: "Media Platform",
        description:
            "A movie exploration platform allowing users to browse trending titles and actor bios. Features secure authentication, protected routes, and a responsive browsing experience.",
        tech: "MERN Stack, Tailwind CSS, JWT Auth, TMDB API",
        image: IMDBApp,
        github: "https://github.com/SHATHISH-07/Projects/tree/main/FullStack_Project/IMDB-CLONE",
        live: "https://shathish-07.github.io/IMDB-frontend/#/",
        color: "#0f172a",
    },
];

const Projects = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray(".project-panel");
            let mm = gsap.matchMedia();

            // === DESKTOP ANIMATION ===
            mm.add("(min-width: 1024px)", () => {
                const scrollTween = gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        pin: true,
                        scrub: 1,
                        snap: 1 / (sections.length - 1),
                        end: () => "+=" + triggerRef.current.offsetWidth * 2,
                    },
                });

                // Parallax Image Effect
                sections.forEach((section) => {
                    const img = section.querySelector(".project-image");
                    gsap.fromTo(img,
                        { xPercent: -10, scale: 1.1 },
                        {
                            xPercent: 10,
                            ease: "none",
                            scrollTrigger: {
                                trigger: section,
                                containerAnimation: scrollTween,
                                start: "left right",
                                end: "right left",
                                scrub: true,
                            }
                        }
                    );
                });
            });

            // === MOBILE ANIMATION ===
            mm.add("(max-width: 1023px)", () => {
                sections.forEach((section) => {
                    gsap.from(section.querySelectorAll(".anim-text"), {
                        y: 30, opacity: 0, duration: 0.8, stagger: 0.1,
                        scrollTrigger: { trigger: section, start: "top 70%" }
                    });
                    gsap.from(section.querySelector(".project-image-container"), {
                        y: 50, opacity: 0, scale: 0.95, duration: 1,
                        scrollTrigger: { trigger: section, start: "top 60%" }
                    });
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" style={{ backgroundColor: "#eaeaea" }} className="overflow-hidden relative">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10 relative z-10">
                <h4 className="text-[#2a0878] font-mono text-sm tracking-widest uppercase mb-4 opacity-80">
                    04. Selected Works
                </h4>
                <h2 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] mb-8">
                    Featured <span className=" text-[#2a0878]">Projects</span>
                </h2>
            </div>

            {/* Scroll Container */}
            <div ref={triggerRef} className="lg:h-screen lg:flex lg:items-center">
                <div ref={sectionRef} className="lg:flex lg:flex-row w-full h-full px-6 md:px-8 lg:px-0">

                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="project-panel w-full lg:w-screen lg:h-screen flex-shrink-0 flex flex-col lg:flex-row justify-center items-center lg:px-20 gap-12 md:gap-24 mb-32 lg:mb-0 relative"
                        >
                            {/* === TEXT SIDE (REDESIGNED) === */}
                            <div className="w-full lg:w-[45%] flex flex-col justify-center order-2 lg:order-1 relative z-10 pl-2">

                                {/* 1. Top Meta Line */}
                                <div className="anim-text flex items-center gap-4 mb-6 border-b border-gray-300 pb-4">
                                    <span className="text-5xl font-light text-[#2a0878] leading-none">
                                        {project.id}
                                    </span>
                                    <div className="h-px bg-gray-400 flex-1"></div>
                                    <span className="font-mono text-gray-500 text-sm">{project.category}</span>
                                </div>

                                {/* 2. Title */}
                                <div className="anim-text mb-8">
                                    <h3 className="text-4xl md:text-6xl font-black text-[#1a1a1a] leading-[1.1] tracking-tight">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* 3. Project Specs Grid (Replacing Pills) */}
                                <div className="anim-text grid grid-cols-2 gap-y-6 gap-x-4 mb-10 py-6 border-t border-b border-gray-200">
                                    <div>
                                        <h4 className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                            <Code2 size={14} /> Tech Stack
                                        </h4>
                                        <p className="text-sm font-medium text-gray-800 leading-relaxed">
                                            {project.tech}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                            <Calendar size={14} /> Year
                                        </h4>
                                        <p className="text-sm font-medium text-gray-800">
                                            {project.year}
                                        </p>
                                    </div>
                                </div>

                                {/* 4. Description */}
                                <p className="text-base text-gray-600 mb-10 leading-relaxed max-w-md anim-text">
                                    {project.description}
                                </p>

                                {/* 5. Buttons (Sleek) */}
                                <div className="flex flex-wrap gap-4 anim-text">
                                    <a
                                        href={project.live}
                                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2a0878] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                                        target="_blank"
                                    >
                                        View Project <ArrowUpRight size={18} />
                                    </a>
                                    <a
                                        href={project.github}
                                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:border-[#2a0878] hover:text-[#2a0878] transition-all duration-300 hover:-translate-y-1"
                                        target="_blank"
                                    >
                                        Source Code <FaGithub size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* === IMAGE SIDE === */}
                            <div className="w-full lg:w-[50%] h-[40vh] md:h-[500px] lg:h-[500px] order-1 lg:order-2 project-image-container relative">
                                <div className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl relative group border-[8px] border-white bg-white">
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-[#2a0878]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>

                                    {/* Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image w-full h-full object-cover transform scale-100 transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </div>

                                {/* Decorative Blur Effect Behind */}
                                <div
                                    className="absolute -inset-10 -z-10 rounded-full opacity-30 blur-[60px] transition-all duration-500"
                                    style={{ backgroundColor: project.color }}
                                ></div>

                                {/* Floating Label */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 hidden md:block anim-text">
                                    <Layers className="text-[#2a0878]" size={24} />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;