import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Award,
    MapPin,
    Music,
    Film,
    ChefHat,
    Zap,
    BrainCircuit,
    Cloud,
    ShieldCheck,
    Star
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Extras = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Using fromTo to prevent visibility bugs
            gsap.fromTo(".bento-item",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 relative overflow-hidden bg-[#eaeaea]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <div className="mb-16  md:text-left">
                    <h4 className="text-[#2a0878] font-mono text-sm tracking-widest uppercase mb-4 opacity-80">
                        06. Life Beyond Code
                    </h4>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] tracking-tight">
                        Activities & <span className="text-[#2a0878] ">Interests</span>
                    </h2>
                </div>

                {/* === BENTO GRID === */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">

                    {/* 1. Major Achievement (Large - Dark to stand out) */}
                    <div className="bento-item col-span-1 md:col-span-2 row-span-2 bg-[#1a1a1a] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                            <Award size={120} className="text-white" />
                        </div>
                        <div className="relative z-10">
                            <span className="bg-[#2a0878] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block shadow-lg">
                                1st Place Winner
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
                                Intelligent Automation Paper Presentation
                            </h3>
                            <p className="text-gray-400 mt-4 text-sm md:text-base max-w-md">
                                Secured 1st place at TIETSYMPO 2K23 for presenting innovative solutions in automation technology.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mt-6">
                            <MapPin size={16} /> Tagore Institute of Engineering
                        </div>
                    </div>

                    {/* 2. Workshop: CyberSec */}
                    <div className="bento-item col-span-1 bg-white rounded-3xl p-6 flex flex-col justify-between border border-gray-200 hover:border-[#2a0878] transition-colors group shadow-sm hover:shadow-md">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#2a0878] group-hover:rotate-12 transition-transform">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">AI Cybersecurity</h4>
                            <p className="text-xs text-gray-500 mt-1">Workshop at PSG Tech</p>
                        </div>
                    </div>

                    {/* 3. Hobby: Music */}
                    <div className="bento-item col-span-1 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-6 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group shadow-lg">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        <Music size={40} className="mb-4 group-hover:scale-125 transition-transform" />
                        <h4 className="font-bold text-xl">Music Enthusiast</h4>
                        <p className="text-xs opacity-80 mt-2">Exploring genres daily.</p>
                    </div>

                    {/* 4. Competition: 3rd Place */}
                    <div className="bento-item col-span-1 md:col-span-2 bg-white rounded-3xl p-8 flex flex-row items-center justify-between gap-6 border border-gray-200 hover:shadow-lg transition-all group">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                                <span className="text-xs font-bold text-gray-400 uppercase">KNOWMEET 2K23</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#2a0878] transition-colors">
                                Incognito Tech Challenge
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                3rd Place • Excelled in Canva Design & Programming rounds.
                            </p>
                        </div>
                        <div className="hidden sm:flex w-16 h-16 rounded-full bg-gray-50 items-center justify-center text-gray-400 group-hover:bg-[#2a0878] group-hover:text-white transition-colors">
                            <Award size={32} />
                        </div>
                    </div>

                    {/* 5. Hobby: Cooking */}
                    <div className="bento-item col-span-1 bg-orange-50 rounded-3xl p-6 flex flex-col justify-between group hover:bg-orange-100 transition-colors border border-orange-100">
                        <div className="flex justify-between items-start">
                            <ChefHat size={32} className="text-orange-600" />
                            <span className="text-xs font-bold text-orange-800 bg-white px-2 py-1 rounded-lg shadow-sm">Hobby</span>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">Culinary Arts</h4>
                            <p className="text-xs text-gray-600 mt-1">Experimenting with flavors.</p>
                        </div>
                    </div>

                    {/* 6. Workshop: AWS */}
                    <div className="bento-item col-span-1 bg-white rounded-3xl p-6 flex flex-col justify-between border border-gray-200 hover:border-[#4a1d96] transition-colors group shadow-sm hover:shadow-md">
                        <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-[#4a1d96] group-hover:scale-110 transition-transform">
                            <Cloud size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">AWS Cloud</h4>
                            <p className="text-xs text-gray-500 mt-1">Workshop at Knowledge Inst.</p>
                        </div>
                    </div>

                    {/* 7. Workshop: Deep Learning */}
                    <div className="bento-item col-span-1 md:col-span-2 bg-[#2a0878] rounded-3xl p-8 text-white relative overflow-hidden group shadow-lg">
                        <div className="absolute -right-10 -bottom-10 opacity-20">
                            <BrainCircuit size={150} />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold mb-2">Deep Learning & Quantum</h4>
                            <p className="text-sm opacity-80 max-w-xs">
                                Workshop participation at Madras Institute of Technology (SAMHITA'24).
                            </p>
                        </div>
                    </div>

                    {/* 8. Hobby: Movies */}
                    <div className="bento-item col-span-1 bg-gray-900 rounded-3xl p-6 flex flex-col justify-center items-center text-center text-white group hover:bg-black transition-colors shadow-lg">
                        <Film size={32} className="mb-3 text-gray-400 group-hover:text-white transition-colors" />
                        <h4 className="font-bold">Cinephile</h4>
                        <p className="text-xs text-gray-400 mt-1">Sci-fi & Thrillers</p>
                    </div>

                    {/* 9. Symposium */}
                    <div className="bento-item col-span-1 bg-white rounded-3xl p-6 flex flex-col justify-between border border-gray-200 hover:border-yellow-500 transition-colors shadow-sm hover:shadow-md">
                        <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                            <Zap size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">GENIO 2K23</h4>
                            <p className="text-xs text-gray-500 mt-1">Symposium Participation</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Extras;