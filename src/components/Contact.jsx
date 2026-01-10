import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, Copy, Check, Mail, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { resumeUrl } from "../data/navBarData";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);

    // Form States
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [copied, setCopied] = useState(false);

    const myEmail = "shathishkumaran07@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(myEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                "service_blq2tcm",
                "template_s1hqcgk",
                {
                    title: "New Portfolio Message Received",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date().toLocaleString(),
                },
                "yov2TlFE5U8pYuSRL"
            );
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-title-char", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.05,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

            gsap.from(".form-item", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                delay: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="w-full min-h-screen  relative overflow-hidden flex flex-col justify-between"
        >
            {/* Background texture or gradient */}
            {/* <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-0 bottom-0 w-[50vw] h-[50vw] bg-[#2a0878] rounded-full blur-[150px]"></div>
            </div> */}

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full h-full grow flex flex-col lg:flex-row pt-10  pb-12">

                {/* === LEFT: HUGE TYPOGRAPHY === */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between mb-16 lg:mb-0 z-10">
                    <div>
                        <div className="flex items-center gap-4 mb-8 opacity-60">
                            {/* <div className="w-12 h-[1px] bg-[#2a0878]"></div> */}
                            <span className="text-[#2a0878] dark:text-[#5412ee] font-mono text-sm tracking-widest uppercase">06. Contact</span>
                        </div>

                        <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter overflow-hidden select-none">
                            {"LETS".split("").map((char, i) => (
                                <span key={i} className="contact-title-char inline-block text-black dark:text-[#b1afaf]">{char}</span>
                            ))}
                            <br />
                            {"TALK".split("").map((char, i) => (
                                <span key={`2-${i}`} className="contact-title-char inline-block text-[#2a0878] dark:text-[#5412ee]">{char}</span>
                            ))}
                        </h2>
                    </div>

                    <div className="mt-12 lg:mt-auto space-y-8">
                        <div className="form-item">
                            <p className="text-gray-400 text-sm font-mono uppercase tracking-widest mb-2">Email Me</p>
                            <button
                                onClick={handleCopy}
                                className="group flex items-center gap-3 text-md sm:text-xl md:text-3xl font-bold hover:text-[#2a0878] dark:hover:text-[#5412ee] transition-colors text-black dark:text-[#b1afaf] text-left"
                            >
                                <span className="truncate max-w-[300px] md:max-w-none">{myEmail}</span>
                                {copied ? <Check size={24} className="text-green-400" /> : <Copy size={24} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                            </button>
                        </div>

                        <div className="">
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-full bg-[#2a0878] dark:bg-[#5412ee] text-white font-bold text-sm uppercase tracking-widest hover:scale-105 hover:shadow-lg hover:shadow-[#2a0878]/20 transition-all duration-300"
                            >
                                Resume
                            </a>
                        </div>

                        <div className="form-item flex gap-6">
                            <a href="https://github.com/SHATHISH-07" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full text-black dark:text-[#b1afaf] border border-gray-700 dark:border-gray-500 flex items-center justify-center hover:bg-[#555555] dark:hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/shathish-kumaran/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-700 dark:border-gray-500 text-black dark:text-[#b1afaf] flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300">
                                <FaLinkedin size={20} />
                            </a>
                            <a href={`mailto:${myEmail}`} className="w-12 h-12 rounded-full border border-gray-700 dark:border-gray-500 text-black dark:text-[#b1afaf] flex items-center justify-center hover:bg-[#2a0878] hover:text-white hover:border-[#2a0878] transition-all duration-300">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* === RIGHT: MINIMALIST FORM === */}
                <div className="w-full lg:w-1/2 lg:pl-20 z-10 flex flex-col justify-end">
                    <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="form-item relative group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder=" "
                                className="peer w-full bg-transparent border-b border-gray-700 dark:border-gray-500 py-4 text-xl md:text-2xl  focus:outline-none focus:border-[#2a0878] transition-colors text-black dark:text-[#b1afaf]"
                            />
                            <label htmlFor="name" className="absolute left-0 top-4 text-gray-500 dark:text-gray-300 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#2a0878] dark:peer-focus:text-[#5412ee] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none">
                                What's your name?
                            </label>
                        </div>

                        <div className="form-item relative group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder=" "
                                className="peer w-full bg-transparent border-b border-gray-700 dark:border-gray-500 py-4 text-xl md:text-2xl  focus:outline-none focus:border-[#2a0878] transition-colors text-black dark:text-[#b1afaf]"
                            />
                            <label htmlFor="email" className="absolute left-0 top-4 text-gray-500 dark:text-gray-300 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#2a0878] dark:peer-focus:text-[#5412ee] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none">
                                Your email
                            </label>
                        </div>

                        <div className="form-item relative group">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="1"
                                placeholder=" "
                                className="peer w-full bg-transparent border-b border-gray-700 dark:border-gray-500 text-black dark:text-[#b1afaf] py-4 text-xl md:text-2xl  focus:outline-none focus:border-[#2a0878] transition-colors resize-none"
                                style={{ minHeight: "100px" }}
                            ></textarea>
                            <label htmlFor="message" className="absolute left-0 top-4 text-gray-500 dark:text-gray-300 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#2a0878] dark:peer-focus:text-[#5412ee] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none">
                                Tell me about your project
                            </label>
                        </div>

                        <div className="form-item pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex items-center gap-4 text-2xl md:text-4xl font-bold  hover:text-[#2a0878] dark:hover:text-[#5412ee] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-black dark:text-[#b1afaf]"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <span className="w-12 h-12 rounded-full  text-black dark:text-[#b1afaf] flex items-center justify-center group-hover:bg-[#2a0878] dark:group-hover:bg-[#5412ee] group-hover:text-white transition-all duration-300">
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : <ArrowUp className="rotate-45" />}
                                </span>
                            </button>

                            {submitStatus === "success" && <p className="text-green-400 mt-4 font-mono animate-pulse">Message received. I'll be in touch!</p>}
                            {submitStatus === "error" && <p className="text-red-400 mt-4 font-mono">Oops! Something went wrong.</p>}
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;