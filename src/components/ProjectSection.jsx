import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        id: "01",
        year: "2025",
        title: "E-Commerce Site",
        category: "Full Stack",
        description: "A production-ready e-commerce platform featuring OTP-secured authentication, real-time order tracking, and an intelligent return-management system. Includes a full admin dashboard for managing products, users, orders, and analytics.",
        tech: ["React", "Node.js", "MongoDB", "Redux Toolkit", "NodeMailer"],
        video: "https://res.cloudinary.com/dxdqojwlo/video/upload/v1763959657/EcommerceAPP_lgaau5.mp4",
        github: "https://github.com/SHATHISH-07/Ecommerce-App",
        live: "https://shathish-07.github.io/ecommerce-frontend/#/",
        color: "#2a0878"
    },
    {
        id: "02",
        year: "2025",
        title: "ReactIQ AI Saas",
        category: "AI & Real-time",
        description: "A responsive weather intelligence app offering real-time forecasts, air quality data, and geo-based insights for global locations. Optimized for performance with advanced API integration and state management.",
        tech: ["Next.js", "TypeScript", "Supabase", "Clerk", "Vapi (Voice AI)"],
        video: "https://res.cloudinary.com/dxdqojwlo/video/upload/v1763959653/ReactIQ_bqpdgb.mp4",
        github: "https://github.com/SHATHISH-07/ai-saas-app",
        live: "https://ai-saas-app-bice-one.vercel.app/",
        color: "#1a1a1a"
    },
    {
        id: "03",
        year: "2025",
        title: "Weather App",
        category: "Data Visualization",
        description: "A movie and series discovery platform powered by the TMDB API, featuring trending titles, cast details, and secure user authentication. Designed with responsive UI and protected routes for a seamless browsing experience.",
        tech: ["React", "TypeScript", "Tailwind", "LocationIQ API", "Redux"],
        video: "https://res.cloudinary.com/dxdqojwlo/video/upload/v1763959668/WeatherApp_jrtumf.mp4",
        github: "https://github.com/SHATHISH-07/Weather-app",
        live: "https://shathish-07.github.io/weatherapp-frontend/#/",
        color: "#4a1d96"
    },
    {
        id: "04",
        year: "2024",
        title: "IMDB Clone",
        category: "Media Platform",
        description: "A movie exploration platform allowing users to browse trending titles and actor bios. Features secure authentication, protected routes, and a responsive browsing experience.",
        tech: ["MERN Stack", "Tailwind CSS", "JWT Auth", "TMDB API"],
        video: "https://res.cloudinary.com/dxdqojwlo/video/upload/v1763959673/IMDBApp_tcdcjx.mp4",
        github: "https://github.com/SHATHISH-07/Projects/tree/main/FullStack_Project/IMDB-CLONE",
        live: "https://shathish-07.github.io/IMDB-frontend/#/",
        color: "#0f172a"
    },
];

const Projects = () => {
    const containerRef = useRef(null);
    const mediaRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const textSections = gsap.utils.toArray(".project-text-section");

            textSections.forEach((section, index) => {
                const targetMedia = mediaRef.current[index];

                ScrollTrigger.create({
                    trigger: section,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => {
                        gsap.to(targetMedia, {
                            clipPath: "inset(0% 0% 0% 0%)",
                            duration: 0.8,
                            ease: "power3.inOut",
                            zIndex: 10
                        });
                        // Lower z-index of others so the new one sits on top nicely
                        mediaRef.current.forEach((media, i) => {
                            if (i !== index) {
                                gsap.to(media, { zIndex: 1, delay: 0.4 });
                            }
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(targetMedia, {
                            clipPath: "inset(0% 0% 0% 0%)",
                            duration: 0.8,
                            ease: "power3.inOut",
                            zIndex: 10
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(targetMedia, {
                            clipPath: "inset(100% 0% 0% 0%)",
                            duration: 0.8,
                            ease: "power3.inOut",
                            zIndex: 1
                        });
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="projects" className="pt-10 relative">

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

                {/* === LEFT COLUMN: SCROLLABLE TEXT === */}
                <div className="w-full lg:w-1/2 px-6 md:px-12 lg:px-20 md:py-10 z-10">

                    {/* Section Title */}
                    <div className="mb-24">
                        <h4 className="text-[#2a0878] dark:text-[#5412ee] font-mono text-sm tracking-widest uppercase mb-4 opacity-80">
                            03. Selected Works
                        </h4>
                        <h2 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] dark:text-[#b1afaf] tracking-tight">
                            Featured <br /><span className="text-[#2a0878] dark:text-[#5412ee]">Projects</span>
                        </h2>
                    </div>

                    {/* Projects Loop */}
                    <div className="flex flex-col gap-32 md:gap-48 pb-24">
                        {projectsData.map((project, index) => (
                            <div key={index} className="project-text-section flex flex-col justify-center min-h-[50vh]">

                                {/* Header Line */}
                                <div className="flex items-center gap-4 mb-6 border-b border-gray-300 pb-4">
                                    <span className="text-4xl font-light text-[#2a0878] dark:text-[#5412ee]">
                                        {project.id}
                                    </span>
                                    <div className="h-px bg-gray-300 flex-1"></div>
                                    <span className="font-mono text-xs text-gray-500 dark:text-gray-300">{project.category}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] dark:text-[#b1afaf] mb-6 leading-tight">
                                    {project.title}
                                </h3>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, i) => (
                                        <div key={i} className="px-3 py-1 rounded-lg border border-gray-300 dark:border-[#1a1a1a] text-xs font-medium text-gray-600 dark:text-gray-100 bg-white dark:bg-white/30 flex items-center gap-1">
                                            {t}
                                        </div>
                                    ))}
                                </div>

                                {/* Desc */}
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                                    {project.description}
                                </p>

                                {/* Buttons */}
                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-[#2a0878] text-white rounded-lg font-bold hover:bg-[#1a0550] transition-all shadow-md"
                                    >
                                        <Globe size={18} /> View
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/80 text-[#1a1a1a] border border-gray-300 rounded-lg font-bold hover:border-[#2a0878] transition-all"
                                    >
                                        <FaGithub size={18} /> Code
                                    </a>
                                </div>

                                {/* Mobile Video (Visible only on small screens) */}
                                <div className="lg:hidden mt-10 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                                    <video
                                        src={project.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* === RIGHT COLUMN: PINNED VIDEO STACK (Desktop Only) === */}
                <div className="hidden lg:block w-1/2 h-screen sticky top-0 right-0 overflow-hidden ">
                    <div className="relative w-full h-full flex items-center justify-center p-12">

                        {/* Video Stack */}
                        <div className="relative w-full h-[50vh] max-w-[650px]">
                            {projectsData.map((project, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (mediaRef.current[index] = el)}
                                    className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl bg-white border-8 border-white "
                                    style={{
                                        // Initial State: 1st visible, others hidden
                                        clipPath: index === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
                                        zIndex: projectsData.length - index
                                    }}
                                >
                                    {/* Video Element */}
                                    <video
                                        src={project.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-contain"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;