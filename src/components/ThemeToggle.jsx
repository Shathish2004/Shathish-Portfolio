import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
    // 1. Default to "system" initially to prevent hydration mismatch
    const [theme, setTheme] = useState("system");
    const [mounted, setMounted] = useState(false);

    // 2. ONE-TIME SYNC: Run only once when component mounts to get saved theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
        setMounted(true); // Mark component as ready
    }, []);

    // 3. Theme Application Logic
    useEffect(() => {
        // Prevent logic from running until we've checked localStorage (avoids overwriting)
        if (!mounted) return;

        const root = window.document.documentElement;
        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }

        // Only save to localStorage after we are mounted and sure of the user choice
        localStorage.setItem("theme", theme);

    }, [theme, mounted]);

    // 4. System Listener (Only active when theme is 'system')
    useEffect(() => {
        if (theme !== "system") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            const root = window.document.documentElement;
            if (mediaQuery.matches) {
                root.classList.add("dark");
                root.classList.remove("light");
            } else {
                root.classList.add("light");
                root.classList.remove("dark");
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme]);

    const options = [
        { value: "light", label: "Light", icon: Sun },
        { value: "dark", label: "Dark", icon: Moon },
        // { value: "system", label: "System", icon: Monitor },
    ];

    // Optional: Prevent rendering until mounted to avoid "flicker" of wrong toggle position
    // if (!mounted) return null; 

    return (
        <div className="flex items-center justify-center">
            <div className="relative flex w-fit items-center rounded-full bg-gray-200 p-1 dark:bg-[#212121]">

                {/* The Sliding Background Pill */}
                <div
                    className={`absolute h-8 w-20 rounded-full bg-white shadow-sm transition-all duration-300 ease-out dark:bg-[#424242]
            ${theme === "light" ? "translate-x-0" : ""}
            ${theme === "dark" ? "translate-x-20" : ""}
            ${theme === "system" ? "translate-x-40" : ""}
          `}
                />

                {/* The Text Buttons */}
                {options.map((opt) => (
                    <button
                        key={opt.value}
                        onClick={() => setTheme(opt.value)}
                        className={`z-10 flex h-8 w-20 items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200
              ${theme === opt.value
                                ? "text-gray-900 dark:text-white"
                                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                            }
            `}
                    >
                        <opt.icon size={14} className={theme === opt.value ? "opacity-100" : "opacity-50"} />
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemeToggle;