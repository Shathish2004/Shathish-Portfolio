import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "../data/projectData"; // Adjust path as needed

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            let mm = gsap.matchMedia();

            // --------------------------------------------------
            // DESKTOP: Horizontal Scroll (Screens >= 1024px)
            // --------------------------------------------------
            mm.add("(min-width: 1024px)", () => {
                const track = trackRef.current;
                const scrollAmount = track.scrollWidth - window.innerWidth;

                // 1. Pin and scroll horizontal
                const scrollTween = gsap.to(track, {
                    x: -scrollAmount,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        scrub: 1,
                        end: () => `+=${scrollAmount}`,
                        invalidateOnRefresh: true,
                    }
                });

                // 2. Animate the very first text column (Header) immediately on regular scroll
                gsap.fromTo(".proj-header-item",
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
                );

                // 3. Stagger inner content of each project ONLY when it horizontally slides into view
                const projectPanels = gsap.utils.toArray(".project-panel");
                projectPanels.forEach((panel) => {
                    const items = panel.querySelectorAll(".proj-content-item");
                    gsap.fromTo(items,
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            stagger: 0.1, // This staggers the specific lines of text/images inside
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: panel,
                                containerAnimation: scrollTween, // Ties to horizontal
                                start: "left 80%",
                                toggleActions: "play none none none" // Fixes the disappearing glitch!
                            }
                        }
                    );
                });
            });

            // --------------------------------------------------
            // MOBILE / TABLET: Vertical Scroll (Screens < 1024px)
            // --------------------------------------------------
            mm.add("(max-width: 1023px)", () => {
                const groups = gsap.utils.toArray(".project-panel, .proj-header-wrapper");

                groups.forEach((group) => {
                    const items = group.querySelectorAll(".proj-header-item, .proj-content-item");
                    gsap.fromTo(items,
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            stagger: 0.1,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: group,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="w-full bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-hidden"
        >
            <div
                ref={trackRef}
                className="flex flex-col lg:flex-row lg:w-max lg:h-screen gap-16 md:gap-24 lg:gap-0 pb-24 lg:py-0"
            >
                {/* Intro Section */}
                <div className="proj-header-wrapper w-full lg:w-[55vw] lg:h-full flex flex-col justify-center px-6 md:px-12 shrink-0 lg:border-r lg:border-zinc-200 lg:dark:border-zinc-800/50">
                    <div className="w-full lg:px-12">
                        <div className="max-w-3xl">
                            <h4 className="proj-header-item text-[#2a0878] dark:text-[#5412ee] font-mono text-sm tracking-widest uppercase mb-4 opacity-80 flex items-center gap-4">
                                04. Selected Works
                            </h4>

                            <h2 className="proj-header-item text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 leading-none">
                                Featured <br className="hidden md:block" />
                                <span className="text-[#2a0878] dark:text-[#5412ee]">Projects.</span>
                            </h2>

                            <p className="proj-header-item text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                                A curated selection of my recent engineering projects, showcasing full-stack capabilities, system design, and AI solutions.
                            </p>

                            <div className="proj-header-item mt-16 hidden lg:flex items-center gap-4 text-sm font-mono tracking-widest uppercase text-zinc-400">
                                <span className="animate-pulse">Explore</span>
                                <div className="w-24 h-px bg-zinc-200 dark:bg-zinc-800 relative">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-zinc-300 dark:border-zinc-700 rotate-45"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="project-panel w-full lg:w-screen lg:h-full flex flex-col justify-center px-6 md:px-12 shrink-0"
                    >
                        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 group lg:px-12">

                            <div className="lg:w-1/2 flex flex-col w-full">
                                <div className="proj-content-item flex items-center gap-4 mb-6">
                                    <span className="text-3xl lg:text-4xl font-light text-[#2a0878] dark:text-[#5412ee]">
                                        {project.id}
                                    </span>
                                    <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1"></div>
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="proj-content-item text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
                                    {project.title}
                                </h3>

                                <div className="proj-content-item flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, i) => (
                                        <div key={i} className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900 flex items-center gap-1">
                                            {t}
                                        </div>
                                    ))}
                                </div>

                                <p className="proj-content-item text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-10 max-w-xl">
                                    {project.description}
                                </p>

                                <div className="proj-content-item flex items-center gap-4">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-transparent text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 rounded-lg font-semibold hover:border-[#2a0878] dark:hover:border-[#5412ee] transition-colors"
                                    >
                                        <ArrowUpRight size={18} />Live
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-transparent text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 rounded-lg font-semibold hover:border-[#2a0878] dark:hover:border-[#5412ee] transition-colors"
                                    >
                                        <FaGithub size={18} /> Source Code
                                    </a>
                                </div>
                            </div>

                            <div className="proj-content-item lg:w-1/2 w-full">
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-[#111]">
                                    <div className="absolute top-0 left-0 w-full h-8 bg-zinc-200/50 dark:bg-zinc-800/50 backdrop-blur-md flex items-center px-4 gap-2 z-10 border-b border-zinc-300/50 dark:border-zinc-700/50">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                    </div>

                                    <video
                                        src={project.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-auto max-h-[60vh] object-cover pt-8"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;