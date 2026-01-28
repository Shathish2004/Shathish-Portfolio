import { ArrowUp, MapPin } from "lucide-react";
import { sitemap, projects, socials } from "../data/footerData";
import { resumeUrl } from "../data/navBarData";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="w-full bg-[#fdfafa] dark:bg-[#050505] text-[#1a1a1a] dark:text-[#b1afaf] relative overflow-hidden z-20">
            {/* Gradient Line */}
            <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-50"></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-12 md:pt-20 pb-10 relative z-10">

                {/* === TOP SECTION: Content Grid === */}
                {/* Changed md:grid-cols-12 to lg:grid-cols-12 for better tablet handling */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 md:mb-24">

                    {/* 1. Bio Section */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:space-y-0">
                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#2a0878] dark:bg-[#5412ee] rounded-full animate-pulse"></div>
                                <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                                    Available for work
                                </span>
                            </div>
                            <p className="text-xl md:text-3xl lg:text-2xl font-medium leading-relaxed text-black dark:text-gray-200">
                                Transforming ideas into{" "}
                                <span className="text-[#2a0878] dark:text-[#5412ee]">
                                    elegant solutions
                                </span>.
                            </p>
                        </div>

                        {/* Location - Hidden on small mobile, visible on md+ if desired, or keep always visible */}
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                            <MapPin size={16} className="text-[#2a0878] dark:text-[#5412ee]" />
                            <span>Salem, Tamil Nadu, IN</span>
                        </div>
                    </div>

                    {/* 2. Links Section (Menu & Works) */}
                    {/* Used grid-cols-2 to keep lists parallel even on mobile */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8 md:gap-12">
                        <div className="flex flex-col gap-4 md:gap-6">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400">
                                Menu
                            </h4>
                            <ul className="flex flex-col gap-3 md:gap-4">
                                {sitemap.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href={link.href}
                                            className="text-base md:text-lg hover:text-[#2a0878] dark:hover:text-[#5412ee] transition-colors font-medium"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-6">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400">
                                Works
                            </h4>
                            <ul className="flex flex-col gap-3 md:gap-4">
                                {projects.map((project, i) => (
                                    <li key={i}>
                                        <a
                                            href={project.href}
                                            className="text-base md:text-lg hover:text-[#2a0878] dark:hover:text-[#5412ee] transition-colors font-medium"
                                        >
                                            {project.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 3. Connect & CTA Section */}
                    {/* Aligns left on mobile, right on desktop */}
                    <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6 md:gap-8">
                        <div className="flex flex-col gap-6 w-full lg:w-auto items-start lg:items-end">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400">
                                Connect
                            </h4>
                            <div className="flex gap-3 md:gap-4 flex-wrap">
                                {socials.map((social, i) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gray-200 dark:border-gray-800 rounded-full text-black dark:text-white hover:bg-[#2a0878] hover:text-white hover:border-[#2a0878] dark:hover:bg-[#5412ee] dark:hover:text-white dark:hover:border-[#5412ee] transition-all duration-300 group"
                                            aria-label={social.name}
                                        >
                                            <span className="group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 md:px-8 rounded-full bg-[#2a0878] dark:bg-[#5412ee] text-white font-bold text-xs md:text-sm uppercase tracking-widest hover:scale-105 hover:shadow-lg hover:shadow-[#2a0878]/20 transition-all duration-300"
                            >
                                Resume
                            </a>
                        </div>

                        {/* Back to top - Pushes to bottom on desktop, flows naturally on mobile */}
                        <button
                            onClick={scrollToTop}
                            className="mt-4 lg:mt-auto group flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-[#2a0878] dark:hover:text-[#5412ee] transition-colors"
                        >
                            Back to Top
                            <span className="p-2 border border-gray-200 dark:border-gray-800 rounded-full group-hover:bg-[#2a0878] dark:group-hover:bg-[#5412ee] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                                <ArrowUp size={16} />
                            </span>
                        </button>
                    </div>
                </div>

                {/* === BOTTOM SECTION: Massive Signature === */}
                <div className="relative pt-8 md:pt-10 border-t border-gray-400 dark:border-gray-600 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">

                    <div className="text-xs font-mono text-gray-400 text-center md:text-left w-full md:w-auto order-2 md:order-1">
                        © {new Date().getFullYear()} Shathish Kumaran.
                        <span className="hidden md:inline"> All Rights Reserved.</span>
                        <br className="md:hidden" /> All Rights Reserved.
                    </div>

                    <div className="order-1 md:order-2 w-full md:w-auto text-center md:text-right">
                        <h1 className="text-[15vw] lg:text-[10vw] leading-[0.8] font-black tracking-tighter text-gray-200 dark:text-[#111] select-none pointer-events-none transition-colors duration-500">
                            MERN DEV.
                        </h1>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;