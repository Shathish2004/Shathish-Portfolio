import { useState, useRef, useEffect } from "react";
import {
    Award,
    ShieldCheck,
    Cloud,
    BrainCircuit,
    Zap,
    Music,
    ChefHat,
    Film,
    Sparkles
} from "lucide-react";

const categories = [
    {
        id: "achievements",
        title: "Glory & Wins",
        subtitle: "01 / Competitions",
        description: "Recognized for innovation and technical excellence.",
        // Warm Gold/Amber Theme
        accentColor: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
        // Subtle gradient background on hover instead of a card background
        bgHover: "group-hover:bg-gradient-to-r group-hover:from-amber-50/50 group-hover:to-transparent dark:group-hover:from-amber-900/10",
        items: [
            {
                title: "Intelligent Automation Paper",
                desc: "1st Place Winner @ TIETSYMPO 2K23.",
                icon: Award
            },
            {
                title: "Incognito Tech Challenge",
                desc: "3rd Place @ KNOWMEET 2K23.",
                icon: Zap
            }
        ]
    },
    {
        id: "learning",
        title: "Knowledge Base",
        subtitle: "02 / Workshops",
        description: "Continuous learning through hands-on technical gatherings.",
        // Electric Cyan/Blue Theme
        accentColor: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
        bgHover: "group-hover:bg-gradient-to-r group-hover:from-cyan-50/50 group-hover:to-transparent dark:group-hover:from-cyan-900/10",
        items: [
            { title: "AI Cybersecurity", desc: "Workshop @ PSG Tech", icon: ShieldCheck },
            { title: "AWS Cloud Computing", desc: "Workshop @ Knowledge Inst.", icon: Cloud },
            { title: "Deep Learning", desc: "SAMHITA'24 @ MIT India", icon: BrainCircuit },
            { title: "GENIO 2K23", desc: "Symposium Participation", icon: Zap }
        ]
    },
    {
        id: "hobbies",
        title: "Life & Soul",
        subtitle: "03 / Passions",
        description: "Fueling creativity through arts and culture.",
        // Rose/Pink Theme
        accentColor: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
        bgHover: "group-hover:bg-gradient-to-r group-hover:from-rose-50/50 group-hover:to-transparent dark:group-hover:from-rose-900/10",
        items: [
            { title: "Music Enthusiast", desc: "Exploring genres daily.", icon: Music },
            { title: "Cooking", desc: "Like to Cook and Eat.", icon: ChefHat },
            { title: "Cinephile", desc: "Sci-fi & Thrillers.", icon: Film }
        ]
    }
];

const Extras = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="extras"
            className="w-full pt-20 lg:pt-30 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className={`mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div className="flex items-center gap-3 mb-6">

                        <span className="text-[#2a0878] dark:text-[#5412ee] font-mono text-sm tracking-widest uppercase">
                            05. Beyond Code
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-[#1a1a1a] dark:text-[#b1afaf] tracking-tighter leading-[0.9]">
                        INTERESTS & <br />
                        <span className="text-[#2a0878] dark:text-[#5412ee]">ACTIVITIES.</span>
                    </h2>
                </div>

                {/* === EDITORIAL LIST LAYOUT === */}
                <div className="flex flex-col">
                    {/* Top Divider */}
                    <div className="w-full h-px bg-gray-500/50 dark:bg-white/50"></div>

                    {categories.map((cat, index) => (
                        <div
                            key={cat.id}
                            className={`group relative py-16 md:py-20 border-b border-gray-500/50 dark:border-white/50 transition-all duration-700
                                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                            `}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Ambient Hover Background (Subtle Gradient) */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 ${cat.bgHover}`}></div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                                {/* 1. Category Title (Typography Only) */}
                                <div className="lg:col-span-5 flex flex-col gap-4">
                                    <span className={` text-xs font-bold tracking-widest uppercase text-gray-400 transition-colors duration-300 ${cat.accentColor}`}>
                                        {cat.subtitle}
                                    </span>

                                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-none group-hover:translate-x-2 transition-transform duration-500">
                                        {cat.title}
                                    </h3>

                                    <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm mt-2">
                                        {cat.description}
                                    </p>
                                </div>

                                {/* 2. Items List (Clean Grid with Icons) */}
                                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-2">
                                    {cat.items.map((item, i) => (
                                        <div key={i} className="flex gap-5 group/item">
                                            {/* Item Icon */}
                                            <div className={`mt-1 shrink-0 text-gray-400 transition-colors duration-300 group-hover/item:text-black dark:group-hover/item:text-white ${cat.accentColor}`}>
                                                <item.icon size={28} strokeWidth={1.5} />
                                            </div>

                                            {/* Item Text */}
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1 leading-tight group-hover/item:underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-current transition-all">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed font-medium">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Extras;