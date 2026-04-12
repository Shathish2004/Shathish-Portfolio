import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, ArrowUpRight, Code2 } from "lucide-react";
import { experiences } from "../data/experienceData"; // Adjust path as needed

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const containerRef = useRef(null);
    const mediaRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const textSections = gsap.utils.toArray(".experience-text-section");

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
        <section ref={containerRef} id="experience" className="pt-10 relative bg-white dark:bg-[#050505] transition-colors duration-300">

            <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row">

                <div className="w-full lg:w-1/2 px-6 md:px-12 lg:px-20 md:py-10 z-10">

                    <div className="mb-24">
                        <h4 className="text-[#2a0878] dark:text-[#5412ee] font-mono text-sm tracking-widest uppercase mb-4 opacity-80">
                            03. Professional History
                        </h4>
                        <h2 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] dark:text-[#e5e5e5] tracking-tight">
                            Experience & <br /><span className="text-[#2a0878] dark:text-[#5412ee]">Impact</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-32 md:gap-48 pb-24 lg:pb-48">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="experience-text-section flex flex-col justify-center min-h-[50vh]">
                                <div className="flex items-center gap-4 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                                    <span className="text-4xl font-light text-[#2a0878] dark:text-[#5412ee]">
                                        0{index + 1}
                                    </span>
                                    <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1"></div>
                                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                                        {exp.period}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-2 leading-tight">
                                    {exp.company}
                                </h3>
                                <div className="flex items-center gap-2 text-xl font-medium text-[#2a0878] dark:text-[#5412ee] mb-6">
                                    <Code2 size={20} />
                                    {exp.role}
                                </div>

                                <div className="flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-400 mb-8">
                                    <MapPin size={16} className="opacity-70" />
                                    {exp.location}
                                </div>

                                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-10 max-w-md">
                                    <strong className="text-zinc-900 dark:text-zinc-200 font-medium">
                                        {exp.summary.split(".")[0]}.
                                    </strong>
                                    {exp.summary.substring(exp.summary.indexOf(".") + 1)}
                                </p>

                                {exp.projects && exp.projects.length > 0 && (
                                    <div className="flex flex-col gap-4 mb-10 pl-4 border-l-2 border-zinc-200 dark:border-zinc-800">
                                        <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Key Deliverables</h5>
                                        {exp.projects.map((proj, i) => (
                                            <a href={proj.source} key={i} target="_blank" rel="noreferrer" className="group block">
                                                <h6 className="text-base font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-[#5412ee] transition-colors flex items-center gap-1">
                                                    {proj.name}
                                                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                                                </h6>
                                                <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">{proj.desc}</p>
                                            </a>
                                        ))}
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {exp.stack.map((t, i) => (
                                        <div key={i} className="px-3 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900/50 flex items-center gap-1">
                                            {t}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:block w-1/2 h-screen sticky top-0 right-0 overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center p-12">

                        <div className="relative w-full h-[60vh] max-w-[650px]">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (mediaRef.current[index] = el)}
                                    className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/20 dark:shadow-none"
                                    style={{
                                        clipPath: index === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
                                        zIndex: experiences.length - index
                                    }}
                                >
                                    <div className="w-full h-full bg-zinc-50 dark:bg-[#0a0a0a] p-12 flex flex-col justify-between relative overflow-hidden group">

                                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2a0878]/10 dark:bg-[#5412ee]/20 rounded-full blur-[80px]"></div>

                                        <div className="absolute -bottom-8 -right-3 text-[15rem] font-black text-zinc-900/30 dark:text-white/20 leading-none select-none pointer-events-none">
                                            0{index + 1}
                                        </div>

                                        <div className="relative z-10">
                                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a0878]/20 dark:border-[#5412ee]/30 bg-[#2a0878]/5 dark:bg-[#5412ee]/10 text-[#2a0878] dark:text-[#5412ee] font-mono text-xs uppercase tracking-widest mb-8">
                                                <Calendar size={14} /> {exp.period}
                                            </div>
                                            <h3 className="text-5xl font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tight">
                                                {exp.company}
                                            </h3>
                                            <p className="text-xl font-medium text-zinc-800 dark:text-zinc-200 mb-6">
                                                {exp.role}
                                            </p>
                                        </div>


                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section >
    );
};

export default Experience;