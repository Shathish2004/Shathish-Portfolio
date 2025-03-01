import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function ExperienceTimeline() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains("dark"));

        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    const darkModeStyles = {
        contentBg: isDarkMode ? "#000" : "#fff",
        textColor: isDarkMode ? "#e5e7eb" : "#111827",
        borderColor: "#3b82f6",
        arrowBorder: "#3b82f6",
        iconBg: isDarkMode ? "#2563eb" : "#155dfc",
        dateColor: isDarkMode ? "#d1d5db" : "#111827"
    };

    const experiences = [
        {
            title: "FullStackOpen",
            subtitle: "University of Helsinki",
            description: "Advanced MERN Stack Development",
            date: "2025",
            navigate: false
        },
        {
            title: "Google Cybersecurity Certificate",
            subtitle: "Coursera",
            description: "Security fundamentals, risk management, and threat analysis.",
            date: "2024",
            navigate: false
        },
        {
            title: "AI Essentials",
            subtitle: "Coursera",
            description: "Fundamentals of AI & Machine Learning applications.",
            date: "2024",
            navigate: false
        },
        {
            "title": "Explore My Achievements",
            "subtitle": null,
            "description": "Browse through my certifications.",
            "date": null,
            "navigate": true
        }
    ];

    return (
        <VerticalTimeline lineColor={darkModeStyles.borderColor}>
            {experiences.map((exp, index) => (
                <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--education"
                    date={<span style={{ color: darkModeStyles.dateColor }}>{exp.date}</span>}
                    iconStyle={{ background: darkModeStyles.iconBg, color: "#fff" }}
                    contentStyle={{
                        background: darkModeStyles.contentBg,
                        color: darkModeStyles.textColor,
                        border: `1px solid ${darkModeStyles.borderColor}`,
                    }}
                    contentArrowStyle={{
                        borderRight: `7px solid ${darkModeStyles.arrowBorder}`
                    }}
                >
                    <h3 className="vertical-timeline-element-title font-semibold">{exp.title}</h3>
                    {exp.subtitle && <h4 className="vertical-timeline-element-subtitle">{exp.subtitle}</h4>}
                    <p>{
                        exp.navigate && <button className="border-2 cursor-pointer hover:bg-blue-600 hover:text-white button-shadow p-2 mt-2" onClick={() => { navigate("/certificates") }}>View Certificates</button>
                    }</p>

                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
}
