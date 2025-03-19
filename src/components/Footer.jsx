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
        <ul className="grid grid-cols-2 text-center space-y-3 sm:flex space-x-4 mt-2 text-[15px] sm:text-[20px] cursor-pointer sm:mt-0">
          {menuItems.map(({ name, path }) => (
            <li key={path}>
              <button
                className="hover:text-blue-600"
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
            { href: "https://www.linkedin.com/in/shathish-kumaran-05a298325/", icon: "fa-linkedin", color: "hover:text-blue-600" },
            { href: "https://github.com/SHATHISH-07", icon: "fa-github", color: "hover:text-gray-400" },
            { href: "https://www.instagram.com/shathish_07/", icon: "fa-instagram", color: "hover:text-pink-500" },
          ].map(({ href, icon, color }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={`${color}`} >
              <i className={`fa-brands ${icon} `}></i>
            </a>
          ))}
        </div>

        <a
          href="mailto:satheesh12072004@gmail.com"
          className="text-[15px] sm:text-[20px] hover:text-blue-600 cursor-pointer font-medium"
        >
          satheesh12072004@gmail.com
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
