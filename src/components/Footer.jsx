import { ArrowUp, MapPin, Mail, } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const sitemap = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    const projects = [
        { name: "IMDB Clone", href: "#projects" },
        { name: "Weather App", href: "#projects" },
        { name: "E-Commerce", href: "#projects" },
        { name: "AI Learning App", href: "#projects" },
    ];

    const socials = [
        {
            name: "LinkedIn",
            icon: <SiLinkedin size={20} />,
            href: "https://www.linkedin.com/in/shathish-kumaran/"
        },
        {
            name: "GitHub",
            icon: <SiGithub size={20} />,
            href: "https://github.com/SHATHISH-07"
        },
        {
            name: "Email",
            icon: <Mail size={20} />,
            href: "mailto:shathishkumaran07@gmail.com"
        },
    ];

    return (
        <footer className="w-full bg-white dark:bg-[#050505] text-[#1a1a1a] dark:text-[#b1afaf] relative overflow-hidden z-20">

            {/* Top Gradient Line */}
            <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-50"></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-10 relative z-10">

                {/* === TOP SECTION: Content Grid === */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">

                    {/* Left: Bio & Location (Spans 4 columns) */}
                    <div className="md:col-span-4 flex flex-col justify-between h-full">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#2a0878] dark:bg-[#5412ee] rounded-full animate-pulse"></div>
                                <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Available for work</span>
                            </div>
                            <p className="text-xl md:text-2xl font-medium leading-relaxed text-black dark:text-gray-200">
                                Transforming ideas into <span className="text-[#2a0878] dark:text-[#5412ee]">elegant solutions</span>.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-sm font-mono text-gray-500">
                            <MapPin size={16} className="text-[#2a0878] dark:text-[#5412ee]" />
                            <span>Salem, Tamil Nadu, IN</span>
                        </div>
                    </div>

                    {/* Middle: Links (Spans 4 columns) */}
                    <div className="md:col-span-4 flex justify-between md:justify-around">
                        <div className="flex flex-col gap-6">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400">Menu</h4>
                            <ul className="flex flex-col gap-4">
                                {sitemap.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.href} className="text-lg hover:text-[#2a0878] dark:hover:text-[#5412ee] transition-colors font-medium">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400">Works</h4>
                            <ul className="flex flex-col gap-4">
                                {projects.map((project, i) => (
                                    <li key={i}>
                                        <a href={project.href} className="text-lg hover:text-[#2a0878] dark:hover:text-[#5412ee] transition-colors font-medium">
                                            {project.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Socials & CTA (Spans 4 columns) */}
                    <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400">Connect</h4>
                        <div className="flex gap-4">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center border border-gray-200 dark:border-gray-800 rounded-full text-black dark:text-white hover:bg-[#2a0878] hover:text-white hover:border-[#2a0878] dark:hover:bg-[#5412ee] dark:hover:text-white dark:hover:border-[#5412ee] transition-all duration-300 group"
                                >
                                    <span className="group-hover:scale-110 transition-transform duration-300">
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center justify-center">
                            <a
                                href="https://drive.google.com/file/d/122-XW1Ux8_RpgAnEyY0BXDkX6efh1oko/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-full bg-[#2a0878] dark:bg-[#5412ee] text-white font-bold text-sm uppercase tracking-widest hover:scale-105 hover:shadow-lg hover:shadow-[#2a0878]/20 transition-all duration-300"
                            >
                                Resume
                            </a>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="mt-auto group flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-[#2a0878] dark:hover:text-[#5412ee] transition-colors"
                        >
                            Back to Top
                            <span className="p-2 border border-gray-200 dark:border-gray-800 rounded-full group-hover:bg-[#2a0878] dark:group-hover:bg-[#5412ee] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                                <ArrowUp size={16} />
                            </span>
                        </button>
                    </div>

                </div>

                {/* === BOTTOM SECTION: Massive Signature === */}
                <div className="relative pt-10 border-t border-gray-400 dark:border-gray-600 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">

                    {/* Copyright (Small) */}
                    <div className="text-xs font-mono text-gray-400 text-center mx-auto md:mx-0 order-2 md:order-1">
                        © {new Date().getFullYear()} Shathish Kumaran.<br className="md:hidden" /> All Rights Reserved.
                    </div>

                    {/* Massive Name (Creative Element) */}
                    <div className="order-1 md:order-2 w-full md:w-auto text-center md:text-right">
                        <h1 className="text-[12vw] md:text-[10vw] leading-[0.8] font-black tracking-tighter text-gray-200 dark:text-[#111] select-none pointer-events-none transition-colors duration-500">
                            MERN DEV.
                        </h1>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;