import { useState, useLayoutEffect } from "react";

const DarkModeToggler = () => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") !== "light");

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const handleToggle = (event) => {
    const { clientX: x, clientY: y } = event.nativeEvent;
    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    const animationClass = isDark ? "light-mode-animation" : "dark-mode-animation";
    document.documentElement.classList.add(animationClass);

    setTimeout(() => {
      document.documentElement.classList.remove(animationClass);
    }, 500); // Ensure animation has time to play

    setIsDark((prev) => !prev);
  };

  return (
    <label
      className="themeToggle st-sunMoonThemeToggleBtn"
      style={{
        width: "1.5em",
        height: "1.5em",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        top: "-3.5px",
      }}
    >
      <input
        type="checkbox"
        className="themeToggleInput"
        checked={isDark}
        onChange={handleToggle}
        style={{ position: "absolute", width: 0, height: 0, opacity: 0 }}
      />
      <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
        <mask id="moon-mask">
          <rect width="20" height="20" fill="white" />
          <circle cx="11" cy="3" r="8" fill="black" />
        </mask>
        <circle
          className="sunMoon"
          cx="10"
          cy="10"
          r="8"
          mask="url(#moon-mask)"
        />
        <g>
          {[
            [18, 10],
            [14, 16.928],
            [6, 16.928],
            [2, 10],
            [6, 3.1718],
            [14, 3.1718],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              className={`sunRay sunRay${i + 1}`}
              cx={cx}
              cy={cy}
              r="1.2"
            />
          ))}
        </g>
      </svg>
    </label>
  );
};

export default DarkModeToggler;
