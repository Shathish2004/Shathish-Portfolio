import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowUpRight, Code2 } from "lucide-react";
import { experiences } from "../data/experienceData"; // Adjust path if needed

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const pinContainerRef = useRef(null);
    const slidesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            let mm = gsap.matchMedia();

            // --------------------------------------------------
            // DESKTOP: Full-screen Pinned & Sliding (Screens >= 1024px)
            // --------------------------------------------------
            mm.add("(min-width: 1024px)", () => {
                const slides = slidesRef.current;

                // 1. Initial positions for desktop overlay
                gsap.set(slides[0], { xPercent: -100, zIndex: 30 }); // Ideal Tech
                gsap.set(slides[1], { xPercent: 100, zIndex: 20 });  // Besant
                gsap.set(slides[2], { xPercent: 0, zIndex: 10 });    // Amdox (Base)

                // 2. Animate header
                gsap.fromTo(".exp-header-item",
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: "#experience", start: "top 80%" } }
                );

                // 3. Animate Amdox (Base layer) contents independently
                gsap.fromTo(slides[2].querySelectorAll(".exp-content-item"),
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: pinContainerRef.current, start: "top 70%" } }
                );

                // 4. Create the main pinned sliding timeline
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: pinContainerRef.current,
                        start: "top top",
                        pin: true,
                        scrub: 1,
                        end: "+=250%",
                    }
                });

                // Step 1: Slide Besant in
                tl.to(slides[1], { xPercent: 0, ease: "power1.inOut", duration: 1 })
                    // Stagger Besant's content as it arrives
                    .fromTo(slides[1].querySelectorAll(".exp-content-item"),
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" },
                        "-=0.3"
                    )
                    // Step 2: Slide Ideal Tech in
                    .to(slides[0], { xPercent: 0, ease: "power1.inOut", duration: 1 })
                    // Stagger Ideal Tech's content
                    .fromTo(slides[0].querySelectorAll(".exp-content-item"),
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" },
                        "-=0.3"
                    );
            });

            // --------------------------------------------------
            // MOBILE / TABLET: Simple Vertical Scroll (Screens < 1024px)
            // --------------------------------------------------
            mm.add("(max-width: 1023px)", () => {
                // Animate header
                gsap.fromTo(".exp-header-item",
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: "#experience", start: "top 85%" } }
                );

                // Simple fade-up for each card as user scrolls down
                const slides = gsap.utils.toArray(".mobile-slide");
                slides.forEach((slide) => {
                    gsap.fromTo(slide.querySelectorAll(".exp-content-item"),
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            stagger: 0.1,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: slide,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                });
            });

        }, pinContainerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="experience"
            className="w-full bg-white dark:bg-[#050505] transition-colors duration-300"
        >
            {/* Header Section */}
            <div className="pt-24 pb-10 px-6 md:px-12 lg:px-20 max-w-[1300px] mx-auto">
                <h4 className="exp-header-item text-[#2a0878] dark:text-[#5412ee] font-mono text-sm tracking-widest uppercase mb-4 opacity-80">
                    03. Professional History
                </h4>
                <h2 className="exp-header-item text-4xl md:text-6xl font-bold text-[#1a1a1a] dark:text-[#e5e5e5] tracking-tight">
                    Experience & <span className="text-[#2a0878] dark:text-[#5412ee]">Impact</span>
                </h2>
            </div>

            {/* Container - Pinned on Desktop, Stacked Flex on Mobile */}
            <div ref={pinContainerRef} className="lg:h-screen relative w-full flex flex-col lg:block overflow-hidden gap-12 pb-24 lg:pb-0">
                {experiences.map((exp, index) => (
                    <div
                        key={exp.id}
                        ref={(el) => (slidesRef.current[index] = el)}
                        // relative on mobile to stack naturally, absolute on desktop to overlap
                        className="mobile-slide relative lg:absolute lg:inset-0 w-full lg:h-full flex items-center justify-center px-6 md:px-12 lg:px-20 bg-white dark:bg-[#050505]"
                    >
                        <div className="w-full max-w-[1200px] bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center shadow-xl shadow-zinc-200/20 dark:shadow-none relative overflow-hidden">

                            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2a0878]/5 dark:bg-[#5412ee]/10 rounded-full blur-[80px] pointer-events-none"></div>

                            {/* Left Side: Text Content */}
                            <div className="w-full lg:w-3/5 relative z-10">
                                <div className="exp-content-item flex items-center gap-4 mb-6">
                                    <span className="text-4xl font-light text-[#2a0878] dark:text-[#5412ee]">
                                        0{index + 1}
                                    </span>
                                    <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-16"></div>
                                    <span className="font-mono text-sm text-[#2a0878] dark:text-[#5412ee] font-semibold bg-[#2a0878]/5 dark:bg-[#5412ee]/10 px-4 py-1 rounded-full">
                                        {exp.period}
                                    </span>
                                </div>

                                <h3 className="exp-content-item text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-2 leading-tight">
                                    {exp.company}
                                </h3>

                                <div className="exp-content-item flex flex-wrap items-center gap-4 text-lg font-medium text-[#2a0878] dark:text-[#5412ee] mb-6">
                                    <div className="flex items-center gap-2">
                                        <Code2 size={20} />
                                        {exp.role}
                                    </div>
                                    <span className="text-zinc-300 dark:text-zinc-700 hidden md:block">|</span>
                                    <div className="flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-400">
                                        <MapPin size={16} />
                                        {exp.location}
                                    </div>
                                </div>

                                <p className="exp-content-item text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
                                    <strong className="text-zinc-900 dark:text-zinc-200 font-medium">
                                        {exp.summary.split(".")[0]}.
                                    </strong>
                                    {exp.summary.substring(exp.summary.indexOf(".") + 1)}
                                </p>

                                {exp.projects && exp.projects.length > 0 && (
                                    <div className="exp-content-item flex flex-col gap-3 mb-8 pl-4 border-l-2 border-zinc-200 dark:border-zinc-800">
                                        {exp.projects.map((proj, i) => (
                                            <a href={proj.source || "#"} key={i} target="_blank" rel="noreferrer" className="group block cursor-pointer">
                                                <h6 className="text-base font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-[#5412ee] transition-colors flex items-center gap-1">
                                                    {proj.name}
                                                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                                                </h6>
                                            </a>
                                        ))}
                                    </div>
                                )}

                                <div className="exp-content-item flex flex-wrap gap-2">
                                    {exp.stack.map((t, i) => (
                                        <div key={i} className="px-3 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 flex items-center gap-1 hover:border-[#2a0878]/30 dark:hover:border-[#5412ee]/30 transition-colors">
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Image Container */}
                            <div className="exp-content-item w-full lg:w-2/5 aspect-square lg:aspect-auto lg:h-[400px] flex items-center justify-center p-8 bg-white border border-zinc-200 dark:border-zinc-800 rounded-2xl relative z-10 group">
                                <img
                                    src={exp.imageId}
                                    alt={`${exp.company} logo`}
                                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                        </div>
                    </div>
                ))}


            </div>
        </section>
    );
};

export default Experience;