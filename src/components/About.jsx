import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaGithub, FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import {
    SiMongodb,
    SiGraphql,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiNextdotjs,
    SiHtml5,
    SiCss3,
    SiJavascript,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const contentWrapperRef = useRef(null); // 1. New Ref for the columns wrapper
    const leftColRef = useRef(null);
    const marqueeRef1 = useRef(null);
    const marqueeRef2 = useRef(null);

    // ... [Data Arrays stay the same] ...
    const skillsRow1 = [
        { name: "JAVASCRIPT", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "REACT", icon: <FaReact />, color: "#61DBFB" },
        { name: "NEXT", icon: <SiNextdotjs />, color: "#000000 dark:text-white" },
        { name: "TYPESCRIPT", icon: <SiTypescript />, color: "#3178C6" },
        { name: "NODE", icon: <FaNodeJs />, color: "#68A063" },
        { name: "TAILWIND", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "JAVA", icon: <FaJava />, color: "#F80000" },
    ];

    const skillsRow2 = [
        { name: "MONGODB", icon: <SiMongodb />, color: "#10A37F" },
        { name: "GRAPHQL", icon: <SiGraphql />, color: "#E535AB" },
        { name: "EXPRESS", icon: <SiExpress />, color: "#000000 dark:text-white" },
        { name: "GITHUB", icon: <FaGithub />, color: "#181717 dark:text-white" },
        { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
        { name: "REST API", icon: <TbApi />, color: "#000000 dark:text-white" },
    ];

    const educationData = [
        {
            degree: "B.E. Computer Science",
            institution: "Dhirajlal Gandhi College of Technology",
            year: "2022 — 2026",
            score: "CGPA: 8.18",
        },
        {
            degree: "Higher Secondary (HSC)",
            institution: "St. Pauls Higher Secondary School",
            year: "2021 — 2022",
            score: "78%",
        },
        {
            degree: "Secondary School (SSLC)",
            institution: "St. Pauls Higher Secondary School",
            year: "2019 — 2020",
            score: "74%",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Marquee Animation
            const animateMarquee = (ref, direction) => {
                const width = ref.current.scrollWidth;
                gsap.to(ref.current, {
                    x: direction === "left" ? -width / 2 : 0,
                    duration: 40,
                    ease: "none",
                    repeat: -1,
                    modifiers: {
                        x: gsap.utils.unitize((x) => parseFloat(x) % (width / 2))
                    }
                });
                if (direction === "right") {
                    gsap.set(ref.current, { x: -width / 2 });
                    gsap.to(ref.current, {
                        x: 0,
                        duration: 40,
                        ease: "none",
                        repeat: -1,
                    });
                }
            };

            animateMarquee(marqueeRef1, "left");
            animateMarquee(marqueeRef2, "right");

            // 2. Responsive Logic using MatchMedia
            let mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                ScrollTrigger.create({
                    trigger: contentWrapperRef.current, // CHANGED: Trigger based on wrapper, not container
                    start: "top top",
                    end: "bottom bottom",
                    pin: leftColRef.current,
                    // pinSpacing: true (default) handles the spacing
                });
            });

            // 3. Reveal Animations
            gsap.from(".about-text-reveal", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const MarqueeRow = ({ items, reference }) => (
        <div className="w-full overflow-hidden select-none">
            <div ref={reference} className="flex w-max gap-8 md:gap-12 whitespace-nowrap items-center p-3 md:p-5 ">
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-black/70 dark:text-white/80 hover:text-[#2a0878] dark:hover:text-[#5412ee] transition-colors duration-300 cursor-default group ">
                        <span className="text-5xl group-hover:scale-110 transition-transform duration-300" style={{ color: item.color }}>
                            {item.icon}
                        </span>
                        <span className="uppercase tracking-tight text-xl md:text-3xl">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <section
                ref={containerRef}
                id="about"
                className="w-full  text-[#1a1a1a] relative overflow-hidden"
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-28 lg:py-0">

                    {/* 2. Attach the new ref to this wrapper div */}
                    <div ref={contentWrapperRef} className="flex flex-col lg:flex-row">

                        {/* === LEFT COLUMN === */}
                        <div
                            ref={leftColRef}
                            className="w-full lg:w-[40%] h-auto lg:h-screen flex flex-col justify-center lg:py-20 mb-16 lg:mb-0"
                        >
                            <div className="about-text-reveal">
                                <div className="pl-4 mb-6 opacity-60">
                                    <span className="text-[#2a0878] dark:text-[#5412ee] font-mono text-sm tracking-widest uppercase">01. About Me</span>
                                </div>

                                <h2 className="text-5xl md:text-7xl  xl:text-8xl font-black tracking-tighter leading-[0.9] mb-6 text-black dark:text-[#b1afaf]">
                                    CRAFTING <br />
                                    <span className="text-[#2a0878] dark:text-[#5412ee]">DIGITAL</span> <br />
                                    REALITY
                                </h2>

                                <p className="text-gray-500 dark:text-gray-300 font-mono text-sm max-w-xs leading-relaxed">
                                    PASSIONATE FULL STACK ENGINEER <br />
                                    BASED IN INDIA, TAMILNADU, SALEM
                                </p>
                            </div>
                        </div>

                        {/* === RIGHT COLUMN === */}
                        <div className="w-full lg:w-[60%] flex flex-col justify-center lg:py-32 gap-16 lg:gap-24">
                            {/* Intro Text */}
                            <div className="about-text-reveal">
                                <p className="text-lg md:text-3xl leading-relaxed font-light text-gray-800 dark:text-gray-400">
                                    I transform complex problems into <strong className="text-[#2a0878] dark:text-[#5412ee] font-semibold">elegant solutions</strong>.
                                    Specializing in the <span className="border-b-2 border-[#5412ee]/50">MERN Stack</span> and
                                    <span className="border-b-2 border-[#5412ee]/50 mx-2">TypeScript</span>,
                                    I build scalable, high-performance applications that live on the web.
                                </p>
                            </div>

                            {/* Education Section */}
                            <div className="about-text-reveal">
                                <div className="mb-10 flex items-end gap-4">
                                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-[#b1afaf]">Education</h3>
                                    <div className="bg-gray-300 flex-1 mb-2"></div>
                                </div>

                                <div className="flex flex-col">
                                    {educationData.map((edu, index) => (
                                        <div
                                            key={index}
                                            className="group flex flex-col md:flex-row md:items-start justify-between py-8 border-b border-gray-300 hover:border-[#2a0878] dark:hover:border-[#5412ee] transition-colors duration-300"
                                        >
                                            <div className="w-full md:w-1/3 mb-2 md:mb-0">
                                                <span className="font-mono text-sm text-gray-500 dark:text-gray-300 group-hover:text-[#5412ee] transition-colors">
                                                    {edu.year}
                                                </span>
                                            </div>
                                            <div className="w-full md:w-2/3">
                                                <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-1 group-hover:translate-x-2 transition-transform duration-300 text-black dark:text-[#b1afaf]">
                                                    {edu.degree}
                                                </h4>
                                                <div className="flex flex-wrap justify-between items-center gap-4">
                                                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                                                        {edu.institution}
                                                    </p>
                                                    <span className="text-xs font-bold bg-[#1a1a1a] dark:bg-[#b1afaf]/20 text-white px-3 py-1 rounded-full">
                                                        {edu.score}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-text-reveal -mx-6 md:-mx-12 lg:mx-0 relative z-10 mt-10 md:mt-0 bg-[#eaeaea] dark:bg-[#000000]/50">
                    <div className="border-t-5 border-b-2 border-black/60 dark:border-white/30">
                        <MarqueeRow items={skillsRow1} reference={marqueeRef1} />
                    </div>
                    <div className="border-b-5 border-t-2 border-black/60 dark:border-white/30">
                        <MarqueeRow items={skillsRow2} reference={marqueeRef2} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;