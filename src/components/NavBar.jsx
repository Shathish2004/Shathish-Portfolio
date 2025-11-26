import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const resumeUrl = "https://drive.google.com/file/d/122-XW1Ux8_RpgAnEyY0BXDkX6efh1oko/view";

    const deskNavItems = [
        { name: "Shathish", href: "#" },
        { name: "About Me", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Certifications", href: "#certifications" },
        { name: "Resume", href: resumeUrl, isExternal: true },
    ];

    const mobNavItems = [
        { name: "About Me", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Certifications", href: "#certifications" },
        { name: "Resume", href: resumeUrl, isExternal: true },
    ];

    // Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false); // Hide on scroll down
            } else {
                setIsVisible(true); // Show on scroll up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <>
            {/* Main Navbar */}
            <nav
                className={`w-full fixed top-0 left-0 bg-white/80 dark:bg-[#050505]/90 backdrop-blur-md shadow-sm z-40 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <section className="max-w-7xl mx-auto flex justify-between items-center p-6 md:px-8">
                    {/* Logo */}
                    <a href="#" className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                        Shathish
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8 lg:space-x-10 text-gray-600 dark:text-gray-300 font-medium text-sm lg:text-base">
                        {deskNavItems.slice(1).map((item) => ( // Skip "Shathish" for desktop list
                            <li key={item.name} className="relative group">
                                <a
                                    href={item.href}
                                    target={item.isExternal ? "_blank" : "_self"}
                                    rel={item.isExternal ? "noopener noreferrer" : ""}
                                    className={`transition-colors duration-300 hover:text-[#2a0878] dark:hover:text-[#5412ee] flex items-center gap-1 ${item.name === "Resume" ? "text-[#2a0878] dark:text-[#5412ee] font-semibold" : ""}`}
                                >
                                    {item.name}
                                    {item.name === "Resume" && <ArrowUpRight size={17} className="opacity-70" />}
                                </a>
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#2a0878] dark:bg-[#5412ee] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:block"><ThemeToggle /></div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href="#contact"
                            className="flex items-center gap-1 text-[#2a0878] dark:text-[#5412ee] font-semibold underline underline-offset-4 hover:text-blue-900 dark:hover:text-[#7c3aed] transition-colors"
                        >
                            Hire Me <ArrowUpRight size={18} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none p-1"
                        aria-label="Open Menu"
                    >
                        <Menu size={28} />
                    </button>
                </section>
            </nav>

            {/* Mobile Menu Overlay */}
            {/* Background Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)} // Close when clicking outside
            ></div>

            {/* Sliding Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-[#f5f5f5] dark:bg-[#0a0a0a] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-xl font-bold text-gray-900 dark:text-gray-100">Menu</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer transition-colors p-1"
                        aria-label="Close Menu"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 overflow-y-auto py-8 px-6">
                    <ul className="flex flex-col space-y-6">
                        {mobNavItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    target={item.isExternal ? "_blank" : "_self"}
                                    rel={item.isExternal ? "noopener noreferrer" : ""}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-2xl font-medium transition-colors ${item.name === "Resume"
                                        ? "text-[#2a0878] dark:text-[#5412ee]"
                                        : "text-gray-800 dark:text-gray-300 hover:text-[#2a0878] dark:hover:text-[#5412ee]"
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        {item.name}
                                        {item.name === "Resume" && <ArrowUpRight size={20} />}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-center pb-6">
                    <ThemeToggle />
                </div>

                {/* Mobile Footer CTA */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-100/50 dark:bg-[#111111]/80">
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center w-full gap-2 bg-[#2a0878] dark:bg-[#5412ee] text-white py-4 rounded-xl font-semibold shadow-lg hover:bg-[#1f055a] dark:hover:bg-[#430ec5] transition-all active:scale-95"
                    >
                        Hire Me <ArrowUpRight size={20} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default NavBar;