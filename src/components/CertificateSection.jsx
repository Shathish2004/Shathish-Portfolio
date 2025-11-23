import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Award } from "lucide-react";

// Image Imports
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
    { id: 8, title: "Responsive Web Design", issuer: "freeCodeCamp", date: "2022", link: "https://www.freecodecamp.org/certification/Shathish07/responsive-web-design", image: RWDcert },
    { id: 9, title: "JS Algorithms & Data", issuer: "freeCodeCamp", date: "2022", link: "https://www.freecodecamp.org/certification/Shathish07/javascript-algorithms-and-data-structures-v8", image: JSAlgCert },
    { id: 10, title: "Front End Libraries", issuer: "freeCodeCamp", date: "2023", link: "https://www.freecodecamp.org/certification/Shathish07/front-end-development-libraries", image: FELCert },
    { id: 11, title: "IBM Bootstrap", issuer: "Coursera", date: "2022", link: "https://coursera.org/share/59dcb5b7ee96b354b747160db6f8e11b", image: BootstrapCert },
];

const Certifications = () => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance Animation for List Items
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
            className="w-full relative bg-[#eaeaea] min-h-screen flex flex-col pt-0 md:pt-10"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">

                {/* Header */}
                <div className=" flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-300 pb-8">
                    <div>
                        <h4 className="text-[#2a0878] font-mono text-sm tracking-widest uppercase mb-4 opacity-80">
                            05. Credentials
                        </h4>
                        <h2 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] tracking-tight">
                            Certifications
                        </h2>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-gray-500">
                        <Award className="text-[#2a0878]" />
                        <span className="font-mono text-sm">Hover to view credential</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 relative">

                    {/* === LEFT: THE LIST === */}
                    <div className="flex-1 flex flex-col w-full lg:w-[50%]">
                        {certifications.map((cert, index) => (
                            <a
                                key={cert.id}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                                className="cert-row group relative flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-gray-300 hover:border-[#2a0878] transition-colors duration-300"
                            >
                                <div className="flex items-center gap-6 w-full md:w-auto">
                                    <span className="hidden md:block text-gray-400 font-mono text-lg w-8 group-hover:text-[#2a0878] transition-colors">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] group-hover:text-[#2a0878] transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-1 md:hidden">{cert.issuer} • {cert.date}</p>
                                    </div>
                                </div>

                                {/* Desktop Details */}
                                <div className="hidden md:flex items-center gap-8">
                                    <span className="text-gray-500 text-sm font-medium w-32 text-right">
                                        {cert.issuer}
                                    </span>
                                    <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#2a0878] group-hover:border-[#2a0878] transition-all duration-300">
                                        <ArrowUpRight size={18} className="text-gray-400 group-hover:text-white" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* === RIGHT: FIXED PREVIEW IMAGE (Desktop Only) === */}
                    <div className="hidden lg:flex w-[50%] h-[400px] sticky top-32 flex-col justify-center items-center">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200">

                            {/* Placeholder / Default State */}
                            <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 transition-opacity duration-500 ${activeIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                                <img src={certifications[0].image} alt="FSD cert placeholder" />
                            </div>

                            {/* Images */}
                            {certifications.map((cert, index) => (
                                <img
                                    key={cert.id}
                                    src={cert.image}
                                    alt={cert.title}
                                    className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-all duration-500 ease-in-out transform ${activeIndex === index
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-105"
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