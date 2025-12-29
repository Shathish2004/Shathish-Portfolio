import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillsRow1, skillsRow2 } from "../data/skillData";
import { educationData } from "../data/PersonalData";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const contentWrapperRef = useRef(null);
    const leftColRef = useRef(null);
    const marqueeRef1 = useRef(null);
    const marqueeRef2 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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

            let mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                ScrollTrigger.create({
                    trigger: contentWrapperRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: leftColRef.current,
                });
            });

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
                {[...items, ...items, ...items, ...items].map((item, i) => {
                    const Icon = item.Icon;
                    return (
                        <div key={i} className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-black/70 dark:text-white/80 hover:text-[#2a0878] dark:hover:text-[#5412ee] transition-colors duration-300 cursor-default group ">
                            <span className="text-5xl group-hover:scale-110 transition-transform duration-300" style={{ color: item.color }}>
                                <Icon />
                            </span>
                            <span className="uppercase tracking-tight text-xl md:text-3xl">{item.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );

    return (
        <>
            {/* CONTAINER */}
            <section
                ref={containerRef}
                id="about"
                className="w-full  text-[#1a1a1a] relative overflow-hidden"
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-28 lg:py-0">

                    <div ref={contentWrapperRef} className="flex flex-col lg:flex-row">

                        {/* LEFT COLUMN */}
                        <div
                            ref={leftColRef}
                            className="w-full lg:w-[40%] h-auto lg:h-screen flex flex-col justify-center lg:py-20 mb-16 lg:mb-0"
                        >
                            <div className="about-text-reveal">
                                <div className="pl-4 mb-6 opacity-60">
                                    <span className="text-[#2a0878] dark:text-[#5412ee] font-mono text-sm tracking-widest uppercase">01. About Me</span>
                                </div>

                                <h2 className="flex flex-col font-black tracking-tighter leading-[0.85] text-black dark:text-[#b1afaf]">

                                    <span className="text-6xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                                        FULL
                                    </span>

                                    <span className="text-6xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                                        STACK
                                    </span>

                                    <span className="text-[#2a0878] dark:text-[#5412ee] text-7xl md:text-9xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
                                        MERN
                                    </span>

                                    <span className="text-6xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                                        DEV<span className="text-[#2a0878] dark:text-[#5412ee]">.</span>
                                    </span>

                                </h2>

                                <p className="text-gray-500 dark:text-gray-300 font-mono text-sm max-w-xs leading-relaxed">
                                    PASSIONATE FULL STACK ENGINEER <br />
                                    BASED IN INDIA, TAMILNADU, SALEM
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}

                        <div className="w-full lg:w-[60%] flex flex-col justify-center lg:py-32 gap-16 lg:gap-24">
                            <div className="about-text-reveal flex flex-col gap-8">

                                <p className="text-lg md:text-3xl leading-relaxed font-light text-gray-800 dark:text-gray-400">
                                    I am a passionate <strong className="text-[#2a0878] dark:text-[#5412ee] font-semibold">Full Stack Developer</strong> specializing in
                                    <span className="border-b-2 border-[#5412ee]/50 mx-2">MERN</span>,
                                    <span className="border-b-2 border-[#5412ee]/50 mx-2">TypeScript</span>,
                                    <span className="border-b-2 border-[#5412ee]/50 mx-2">GraphQL</span>, and
                                    <span className="border-b-2 border-[#5412ee]/50 mx-2">Next.js</span>.
                                    I enjoy designing clean backend architectures and implementing secure authentication.
                                </p>

                                <p className="text-base md:text-xl leading-relaxed font-light text-gray-700 dark:text-gray-400">
                                    I have built multiple full-stack projects including an <strong className="font-medium text-gray-900 dark:text-gray-200">IMDB clone</strong>,
                                    a <strong className="font-medium text-gray-900 dark:text-gray-200">weather forecasting platform</strong>,
                                    and a complete <strong className="font-medium text-gray-900 dark:text-gray-200">e-commerce system</strong>.
                                    Through these, I have gained strong skills in API development, real-time features, and modern UI/UX practices.
                                </p>

                                <p className="text-base md:text-xl leading-relaxed font-light text-gray-700 dark:text-gray-400">
                                    I am constantly improving my problem-solving skills through <span className="border-b-2 border-[#5412ee]/50">DSA</span> and exploring system design fundamentals.
                                    I am looking for an opportunity to contribute to <strong className="text-[#2a0878] dark:text-[#5412ee] font-semibold">impactful products</strong> and grow into a strong software engineer within an MNC or product-based company.
                                </p>

                            </div>


                            {/* EDUCATION SECTION */}
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

                {/* SKILLS SECTION */}

                <div className="about-text-reveal -mx-6 md:-mx-12 lg:mx-0 relative z-10 mt-10 md:mt-0 bg-[#ffffff] dark:bg-[#000000]/50">
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