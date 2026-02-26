import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    MapPin,
    Terminal,

} from "lucide-react";
import { experiences } from "../data/experienceData";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

    const containerRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(lineRef.current,
                { height: "0%" },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 20%",
                        end: "bottom 80%",
                        scrub: 1
                    }
                }
            );

            const items = gsap.utils.toArray(".timeline-item");
            items.forEach((item) => {
                gsap.fromTo(item,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" className="w-full py-24 bg-white dark:bg-[#050505] transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="mb-20">
                    <h4 className="text-[#2a0878] dark:text-[#5412ee] font-mono text-xs tracking-widest uppercase mb-3 opacity-80">
                        03. Experience
                    </h4>
                    <h2 className="text-5xl md:text-7xl font-black text-[#1a1a1a] dark:text-[#e5e5e5] tracking-tight">
                        Professional <span className="text-[#2a0878] dark:text-[#5412ee]">Timeline</span>
                    </h2>
                </div>

                <div ref={containerRef} className="relative">

                    <div className="absolute left-[19px] md:left-[50%] top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800 transform md:-translate-x-1/2">
                        <div ref={lineRef} className="w-full bg-linear-to-b from-[#2a0878] to-[#5412ee] origin-top"></div>
                    </div>

                    <div className="flex flex-col gap-20">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="timeline-item grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">

                                <div className="absolute left-[11px] md:left-[50%] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-[#050505] bg-[#5412ee] transform md:-translate-x-1/2 z-10 box-content"></div>

                                <div className={`pl-12 md:pl-0 flex flex-col justify-start
                                    ${index % 2 === 0 ? 'md:items-end md:text-right md:order-1' : 'md:items-start md:text-left md:order-2'}
                                `}>
                                    <div className="md:sticky md:top-32">
                                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                                            {exp.period}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-400 justify-start md:justify-end">
                                            <MapPin size={14} /> {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <div className={`pl-12 md:pl-0
                                    ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}
                                `}>
                                    <div className="
                                        relative group
                                        bg-zinc-50 dark:bg-[#0a0a0a] 
                                        border-l-4 border-[#2a0878] dark:border-[#5412ee]
                                        p-6 md:p-8
                                        hover:bg-zinc-100 dark:hover:bg-[#0f0f0f]
                                        transition-colors duration-300
                                    ">

                                        <div className="mb-6">

                                            <h3 className="text-3xl font-black text-zinc-900 dark:text-white leading-tight mb-4">
                                                {exp.company}
                                            </h3>
                                            <div className="inline-block px-2 py-1 mb-3 text-[20px] font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-500/10 rounded">
                                                {exp.role}
                                            </div>
                                            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                                                {exp.summary}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 mb-8">
                                            {exp.projects && exp.projects.map((proj, i) => (
                                                <a href={proj.source} key={i} target="_blank">
                                                    <div
                                                        className="flex flex-col gap-1 pb-4 border-b border-zinc-200 dark:border-zinc-800 last:border-0 last:pb-0">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <Terminal size={14} className="text-[#5412ee]" />
                                                                <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{proj.name}</h4>
                                                            </div>
                                                        </div>
                                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pl-6">
                                                            {proj.desc}
                                                        </p>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                                            {exp.stack.map((t, i) => (
                                                <span key={i} className="flex items-center gap-1 text-[10px] font-medium text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-900 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;