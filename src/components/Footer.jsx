import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="max-w-6xl lg:max-w-7xl mx-auto border-t-1 font-semibold sm:font-medium border-gray-900 dark:border-white py-6 px-4 mt-10">
      <div className="container mx-auto flex flex-col gap-y-5 justify-between items-center">
        {/* Center Section - Navigation */}
        <ul className="grid grid-cols-2 text-center space-y-3 sm:flex space-x-4 mt-2 text-[15px] sm:text-[20px]  sm:mt-0">
          {menuItems.map(({ name, path }) => (
            <li key={path}>
              <button
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => navigate(path)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="text-[15px] sm:text-[20px] hover:text-blue-600 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back To Top
        </button>

        {/* Right Section - Social Links */}
        <div className="flex text-[20px] sm:text-[25px] space-x-4 mt-2 sm:mt-0">
          {[
            { href: "https://www.linkedin.com/in/shathish-kumaran-05a298325/", icon: "fab fa-linkedin", color: "text-blue-600", darkColor: "text-blue-300" },
            { href: "https://github.com/SHATHISH-07", icon: "fab fa-github", color: "text-gray-800", darkColor: "text-white" },
            { href: "https://www.instagram.com/shathish_07/", icon: "fab fa-instagram", color: "text-pink-500", darkColor: "text-pink-400" },
          ].map(({ href, icon, color, darkColor }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={`${color} dark:${darkColor} hover:${color}`} >
              <i className={`fa-brands ${icon} `}></i>
            </a>
          ))}
        </div>

        <a
          href="mailto:shathishkumaran07@gmail.com"
          className="text-[15px] sm:text-[20px] hover:text-blue-600 cursor-pointer font-medium"
        >
          shathishkumaran07@gmail.com
        </a>

        {/* Left Section - Copyright */}
        <p className="text-[15px] sm:text-[20px]">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer >
  );
};

export default Footer;
