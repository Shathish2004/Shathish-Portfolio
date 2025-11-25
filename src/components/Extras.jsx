import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Trophy,
    Cpu,
    Heart,
    Award,
    ShieldCheck,
    Cloud,
    BrainCircuit,
    Zap,
    Music,
    ChefHat,
    Film,
    ArrowRight,
    Sparkles
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Same Data
const categories = [
    {
        id: "achievements",
        title: "Glory & Wins",
        subtitle: "Competitions & Hackathons",
        description: "Recognized for innovation and technical excellence in competitive environments.",
        icon: Trophy,
        color: "bg-zinc-900/60",
        accent: "text-yellow-400",
        items: [
            {
                title: "Intelligent Automation Paper",
                desc: "1st Place Winner @ TIETSYMPO 2K23.",
                sub: "Tagore Institute",
                icon: Award
            },
            {
                title: "Incognito Tech Challenge",
                desc: "3rd Place @ KNOWMEET 2K23.",
                sub: "Technical Symposium",
                icon: Zap
            }
        ]
    },
    {
        id: "learning",
        title: "Knowledge Base",
        subtitle: "Workshops & Symposiums",
        description: "Continuous learning through hands-on workshops and technical gatherings.",
        icon: Cpu,
        color: "bg-[#2a0878]/50",
        accent: "text-cyan-300",
        items: [
            { title: "AI Cybersecurity", desc: "Workshop @ PSG Tech", icon: ShieldCheck },
            { title: "AWS Cloud Computing", desc: "Workshop @ Knowledge Inst.", icon: Cloud },
            { title: "Deep Learning & Quantum", desc: "SAMHITA'24 @ MIT India", icon: BrainCircuit },
            { title: "GENIO 2K23", desc: "Symposium Participation", icon: Zap }
        ]
    },
    {
        id: "hobbies",
        title: "Life & Soul",
        subtitle: "Passions beyond the screen",
        description: "Fueling creativity through arts, culture, and culinary experiments.",
        icon: Heart,
        color: "bg-[#52b4f2]/80",
        accent: "text-white",
        items: [
            { title: "Music Enthusiast", desc: "Exploring genres daily.", icon: Music },
            { title: "Cooking", desc: "Like to Cook and Eat.", icon: ChefHat },
            { title: "Cinephile", desc: "Sci-fi & Thrillers fanatic.", icon: Film }
        ]
    }
];

const Extras = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance for the whole section
            gsap.from(".fade-in", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // Animation when tab changes
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current,
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
            );

            gsap.fromTo(".list-item",
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, delay: 0.1 }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, [activeTab]);

    return (
        <section
            ref={sectionRef}
            id="extras"
            className="w-full py-20 flex flex-col justify-center min-h-[700px]"
        >
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12">

                {/* Header */}
                <div className="mb-12 fade-in">
                    <h4 className="text-[#2a0878] dark:text-[#5412ee] font-mono text-xs md:text-sm tracking-widest uppercase mb-2">
                        05. Beyond the Code
                    </h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] dark:text-[#b1afaf] tracking-tight">
                        Activities & Interests
                    </h2>
                </div>

                {/* === THE SPLIT LAYOUT === */}
                <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[500px] fade-in">

                    {/* --- LEFT: Navigation Menu --- */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        {categories.map((cat, index) => {
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`group relative w-full text-left p-6 rounded-2xl transition-all duration-300 border-2
                                        ${isActive
                                            ? 'bg-white dark:bg-[#1a1a1a] border-[#2a0878] dark:border-[#5412ee] shadow-lg scale-[1.02]'
                                            : 'bg- dark:bg-none border-transparent hover:border-gray-300 hover:bg-black/10 opacity-70 hover:opacity-100'
                                        }
                                    `}
                                >
                                    <div className="flex items-center justify-between relative z-10">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-[#2a0878] dark:bg-[#5412ee] text-white' : 'bg-gray-100 text-gray-400'}`}>
                                                <cat.icon size={20} />
                                            </div>
                                            <div>
                                                <h3 className={`font-bold text-lg ${isActive ? 'text-[#2a0878] dark:text-[#5412ee]' : 'text-gray-600'}`}>
                                                    {cat.title}
                                                </h3>
                                                <p className="text-xs text-gray-400 hidden md:block">{cat.subtitle}</p>
                                            </div>
                                        </div>
                                        {isActive && <ArrowRight size={18} className="text-[#2a0878] dark:text-[#5412ee]" />}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* --- RIGHT: Content Display Area --- */}
                    <div className="w-full lg:w-2/3 relative perspective-1000">

                        {/* The Card */}
                        <div
                            ref={contentRef}
                            className={`w-full h-full rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between
                                ${categories[activeTab].color}
                            `}
                        >
                            {/* Large Background Icon */}
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10 pointer-events-none">
                                {(() => {
                                    const Icon = categories[activeTab].icon;
                                    return <Icon size={300} />;
                                })()}
                            </div>

                            {/* Content Top */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4 opacity-80">
                                    <Sparkles size={16} className={categories[activeTab].accent} />
                                    <span className={`text-xs font-bold uppercase tracking-widest ${categories[activeTab].accent}`}>
                                        {categories[activeTab].subtitle}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    {categories[activeTab].title}
                                </h3>
                                <p className="opacity-70 max-w-md text-sm md:text-base leading-relaxed">
                                    {categories[activeTab].description}
                                </p>
                            </div>

                            {/* Content Bottom (The List) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 relative z-10">
                                {categories[activeTab].items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="list-item bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors"
                                    >
                                        <div className="flex items-start gap-3">
                                            <item.icon size={18} className={`mt-1 ${categories[activeTab].accent}`} />
                                            <div>
                                                <h5 className="font-bold text-sm text-white">{item.title}</h5>
                                                <p className="text-xs text-white/60 mt-1">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Extras;