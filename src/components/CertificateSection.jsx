import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Award, ChevronDown, ExternalLink } from "lucide-react";

// Image Imports (Keep your existing imports)
import FSDCert from "/assets/certificateImg/certificate-fullstack.png";
import FSReactNativeCert from "/assets/certificateImg/certificate-reactnative-fullstackOpen.png";
import GCyberSecCert from "/assets/certificateImg/cyberSecurityCertificate-1.png";
import GAIESSCert from "/assets/certificateImg/AI-Essentials Certificate-1.png";
import FSGQLCert from "/assets/certificateImg/certificate-graphql-fullstack.png";
import FSTSCert from "/assets/certificateImg/Fullstackopen-Typescript-cert.png";
import MetaFECert from "/assets/certificateImg/META frontend developer certificate-1.png";
import RWDcert from "/assets/certificateImg/Responsive web design certificate.jpg";
import JSAlgCert from "/assets/certificateImg/JavaScript FCC certificate.png";
import FELCert from "/assets/certificateImg/FRONT_END_LIBRARY CERTIFICATE.png";
import BootstrapCert from "/assets/certificateImg/Bootstrap certificate-1.png";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
    { id: 1, title: "Full Stack Open", issuer: "University of Helsinki", date: "2024", link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/f34a9e582200b1904db94ba9b646caa8", image: FSDCert },
    { id: 2, title: "Full Stack React Native", issuer: "University of Helsinki", date: "2024", link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-react-native-2020/en/a4a3a478bbf192085b78aad53abf636a", image: FSReactNativeCert },
    { id: 3, title: "Google CyberSecurity", issuer: "Coursera", date: "2024", link: "https://coursera.org/share/9a52f4b038bfe34967f6daffd70d431b", image: GCyberSecCert },
    { id: 4, title: "Google AI Essentials", issuer: "Coursera", date: "2024", link: "https://coursera.org/share/17dd536c1214808f3316485a3180fb95", image: GAIESSCert },
    { id: 5, title: "Full Stack GraphQL", issuer: "University of Helsinki", date: "2024", link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/df48667bbea50625d29e380c989bef59", image: FSGQLCert },
    { id: 6, title: "Full Stack TypeScript", issuer: "University of Helsinki", date: "2024", link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/7ea08dcfee9c28f7d82c0777405d2f0a", image: FSTSCert },
    { id: 7, title: "Meta Front End Dev", issuer: "Coursera", date: "2023", link: "https://coursera.org/share/331fb3664e0903bec4044dba6b322ddd", image: MetaFECert },
    { id: 8, title: "Responsive Web Design", issuer: "freeCodeCamp", date: "2022", link: "https://www.freecodecamp.org/certification/shathish07/responsive-web-design", image: RWDcert },
    { id: 9, title: "JS Algorithms & Data", issuer: "freeCodeCamp", date: "2022", link: "https://www.freecodecamp.org/certification/shathish07/javascript-algorithms-and-data-structures-v8", image: JSAlgCert },
    { id: 10, title: "Front End Libraries", issuer: "freeCodeCamp", date: "2023", link: "https://www.freecodecamp.org/certification/shathish07/front-end-development-libraries", image: FELCert },
    { id: 11, title: "IBM Bootstrap", issuer: "Coursera", date: "2022", link: "https://coursera.org/share/59dcb5b7ee96b354b747160db6f8e11b", image: BootstrapCert },
];

const Certifications = () => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to handle toggle on mobile
    const handleMobileToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".cert-row", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="certifications"
            ref={sectionRef}
            className="w-full relative min-h-screen flex flex-col pt-10 md:pt-10"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-300 pb-8 mb-8">
                    <div>
                        <h4 className="text-[#2a0878] dark:text-[#5412ee] font-mono text-sm tracking-widest uppercase mb-4 opacity-80">
                            04. Credentials
                        </h4>
                        <h2 className="text-4xl md:text-7xl font-bold text-[#1a1a1a] dark:text-[#b1afaf] tracking-tight">
                            Certifications
                        </h2>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-gray-500 dark:text-gray-300">
                        <Award className="text-[#2a0878] dark:text-[#5412ee]" />
                        <span className="font-mono text-sm">Hover to view credential</span>
                    </div>
                    <div className="md:hidden flex items-center gap-2 text-gray-500">
                        <span className="font-mono text-xs">Tap to view details</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 relative">

                    {/* === LEFT: THE LIST === */}
                    <div className="flex-1 flex flex-col w-full lg:w-[50%]">
                        {certifications.map((cert, index) => (
                            <div
                                key={cert.id}
                                // On desktop: Hover logic
                                onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
                                onMouseLeave={() => window.innerWidth >= 768 && setActiveIndex(null)}
                                // On mobile: Click logic
                                onClick={() => handleMobileToggle(index)}
                                className={`cert-row group relative flex flex-col border-b border-gray-300 transition-colors duration-300 cursor-pointer
                                    ${activeIndex === index ? 'bg-white/40 dark:bg-[#1a1a1a]/40 md:bg-transparent' : ''}
                                `}
                            >
                                {/* List Item Header (Always Visible) */}
                                <div className="flex items-center justify-between py-6 px-2 md:px-0">
                                    <div className="flex items-center gap-6">
                                        {/* Number */}
                                        <span className="hidden md:block text-gray-400 font-mono text-lg w-8 group-hover:text-[#2a0878] dark:group-hover:text-[#5412ee] transition-colors">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        {/* Title & Mobile Subtitle */}
                                        <div>
                                            <h3 className={`text-lg md:text-2xl font-bold transition-colors ${activeIndex === index ? 'text-[#2a0878] dark:text-[#5412ee]' : 'text-[#1a1a1a] dark:text-[#b1afaf] group-hover:text-[#2a0878] dark:group-hover:text-[#5412ee]'}`}>
                                                {cert.title}
                                            </h3>
                                            <p className="text-gray-500 text-xs md:hidden mt-1">
                                                {cert.issuer} • {cert.date}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Desktop: Arrow Icon / Mobile: Chevron */}
                                    <div className="flex items-center">
                                        {/* Desktop Link Arrow */}
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hidden md:flex w-10 h-10 rounded-full border border-gray-300 items-center justify-center hover:bg-[#2a0878] hover:border-[#2a0878] group-hover:border-[#2a0878] transition-all duration-300"
                                            onClick={(e) => e.stopPropagation()} // Prevent row click on desktop
                                        >
                                            <ArrowUpRight size={18} className="text-gray-400 hover:text-white group-hover:text-[#2a0878] dark:group-hover:text-[#5412ee] " />
                                        </a>

                                        {/* Mobile Chevron */}
                                        <div className={`md:hidden transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-[#2a0878]' : 'text-gray-400'}`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* === MOBILE ONLY: EXPANDABLE CONTENT === */}
                                {/* Used a grid transition trick for smooth height animation */}
                                <div
                                    className={`lg:hidden grid overflow-hidden transition-all duration-500 ease-in-out
                                        ${activeIndex === index ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}
                                    `}
                                >
                                    <div className="overflow-hidden px-2">
                                        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-800">
                                            {/* Image */}
                                            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 mb-4 border border-gray-200">
                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Action Button */}
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full py-3 bg-[#2a0878] text-white rounded-lg font-medium text-sm hover:bg-[#1a0550] transition-colors"
                                            >
                                                <span>View Credential</span>
                                                <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* === RIGHT: FIXED PREVIEW IMAGE (Desktop Only) === */}
                    {/* Unchanged from your original code, just ensured hidden lg:flex is kept */}
                    <div className="hidden lg:flex w-[50%] h-[400px] sticky top-32 flex-col justify-center items-center">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#b1afaf] bg-gray-200 dark:bg-[#1a1a1a]">
                            {/* Placeholder */}
                            <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-[#1a1a1a] transition-opacity duration-500 ${activeIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                                <img src={certifications[0].image} alt="placeholder" className="opacity-30" />
                            </div>

                            {/* Images */}
                            {certifications.map((cert, index) => (
                                <img
                                    key={cert.id}
                                    src={cert.image}
                                    alt={cert.title}
                                    className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-all duration-500 ease-in-out transform ${activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Certifications;