import { useRef, useEffect } from "react";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import myImage from "/assets/img/myImage.png";
import { gsap } from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
    const container = useRef(null);
    const imageRef = useRef(null);
    const bgTextRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // 1. Initial Setup
            gsap.set(".hero-reveal", { y: 50, opacity: 0 });
            gsap.set(".hero-img-reveal", { scale: 1.1, opacity: 0 });
            gsap.set(".hero-overlay", { scaleY: 1 });

            // 2. Entrance Animation
            tl.to(".hero-overlay", {
                scaleY: 0,
                duration: 1.2,
                ease: "power4.inOut",
                transformOrigin: "top"
            })
                .to(".hero-img-reveal", {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out"
                }, "-=0.8")
                .to(".hero-reveal", {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1
                }, "-=1");

            // 3. Mouse Parallax (Desktop Only Logic)
            const handleMouseMove = (e) => {
                if (window.innerWidth < 1024) return;

                const { clientX, clientY } = e;
                const xPos = (clientX / window.innerWidth - 0.5);
                const yPos = (clientY / window.innerHeight - 0.5);

                gsap.to(bgTextRef.current, {
                    x: xPos * 40,
                    y: yPos * 40,
                    duration: 1,
                    ease: "power2.out"
                });

                gsap.to(imageRef.current, {
                    x: xPos * -20,
                    y: yPos * -20,
                    duration: 1,
                    ease: "power2.out"
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={container}
            className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-[#eaeaea] flex flex-col justify-center lg:block lg:pt-32 pt-28 pb-10"
        >

            {/* === BACKGROUND TYPOGRAPHY === */}
            <div
                ref={bgTextRef}
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5"
            >
                <h1 className="text-[10vw] font-black text-[#1a1a1a] whitespace-nowrap leading-none">
                    MERN DEVELOPER
                </h1>
            </div>

            {/* === MAIN GRID === */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 px-6 md:px-12 relative z-20 h-full content-center lg:content-start">

                {/* === LEFT CONTENT === */}
                <div ref={contentRef} className="lg:col-span-7 flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left order-1 lg:order-1">

                    {/* Badge */}
                    <div className="hero-reveal flex items-center gap-3 mb-4 lg:mb-6">
                        <div className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                        <span className="font-mono text-xs lg:text-sm tracking-widest text-gray-500 uppercase">Available for work</span>
                    </div>

                    {/* Main Heading */}
                    <div className="hero-reveal mb-4 lg:mb-6 relative">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] leading-[0.9] tracking-tighter">
                            SHATHISH <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a0878] to-[#4a1d96] sm:pl-30">
                                KUMARAN
                            </span>
                        </h1>
                    </div>

                    {/* Subheading */}
                    <p className="hero-reveal text-base md:text-xl text-gray-600 font-light leading-relaxed max-w-lg mb-8 lg:mb-10">
                        Engineering pixel-perfect digital experiences with the <span className="font-semibold text-[#2a0878]">MERN Stack</span>.
                        Obsessed with performance, scalability, and design.
                    </p>

                    {/* Buttons & Socials */}
                    <div className="hero-reveal flex flex-col sm:flex-row items-center lg:items-start gap-5 lg:gap-6 w-full sm:w-auto">
                        <a
                            href="#projects"
                            className="group relative px-7 py-3.5 bg-[#1a1a1a] text-white rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all w-full sm:w-auto flex justify-center items-center"
                        >
                            <div className="absolute inset-0 w-full h-full bg-[#2a0878] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                            <span className="relative font-semibold flex items-center gap-2 text-sm lg:text-base">
                                View Projects <ArrowDown size={18} />
                            </span>
                        </a>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 lg:gap-4 mt-4 sm:mt-0">
                            {[
                                { icon: FaGithub, link: "https://github.com/SHATHISH-07" },
                                { icon: FaLinkedin, link: "https://www.linkedin.com/in/shathish-kumaran/" },
                                { icon: Mail, link: "mailto:shathishkumaran07@gmail.com" },
                                { icon: Download, link: "https://drive.google.com/file/d/122-XW1Ux8_RpgAnEyY0BXDkX6efh1oko/view?usp=sharing" }
                            ].map((Item, i) => (
                                <a
                                    key={i}
                                    href={Item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#2a0878] hover:border-[#2a0878] transition-all duration-300"
                                >
                                    <Item.icon size={18} className="lg:w-5 lg:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* === RIGHT IMAGE === */}
                <div className="lg:col-span-5 relative order-2 lg:order-2 flex justify-center lg:justify-end lg:items-start mt-8 lg:mt-0">
                    {/* UPDATED IMAGE WIDTH HERE: w-full max-w-[380px] for mobile */}
                    <div ref={imageRef} className="relative w-full max-w-[380px] lg:max-w-[480px] h-[450px] lg:h-[65vh]">

                        {/* Main Image */}
                        <div className="hero-img-reveal w-full h-full rounded-[2rem] overflow-hidden relative shadow-2xl z-10 border-[6px] lg:border-[8px] border-white bg-gray-200">
                            <img
                                src={myImage}
                                alt="Shathish Kumaran"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                        </div>



                        {/* Stats Card - Hidden on small mobile */}
                        <div className="hero-reveal absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-16 bg-white/80 backdrop-blur-xl border border-white/40 p-4 lg:p-6 rounded-2xl shadow-xl z-30 max-w-[180px] lg:max-w-[220px] hidden sm:block rotate-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 lg:p-3 bg-[#2a0878] rounded-full text-white">
                                    <ArrowUpRight size={16} className="lg:w-5 lg:h-5" />
                                </div>
                                <div>
                                    <p className="text-2xl lg:text-3xl font-bold text-[#1a1a1a]">4+</p>
                                    <p className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-wide font-bold">Years of hands-on Exp.</p>
                                </div>
                            </div>
                            <p className="text-[10px] lg:text-xs text-gray-600 leading-tight">
                                Building scalable web apps.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-400 opacity-60 animate-bounce pointer-events-none hidden lg:flex">
                <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
                <ArrowDown size={16} />
            </div>

        </section>
    );
};

export default HeroSection;