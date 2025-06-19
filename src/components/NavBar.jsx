import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DarkModeToggler from "./DarkModeToggler";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleNavigation = useCallback(
    (path) => {
      navigate(path);
      setMenuOpen(false);
    },
    [navigate]
  );

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECT", path: "/projects" },
    { name: "SKILLS", path: "/skills" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black flex items-center font-extrabold justify-between max-w-6xl lg:max-w-7xl mx-auto  border-b border-gray-900 dark:border-white px-5 py-4 opacity-90">
      {/* Logo */}
      <button
        className="cursor-pointer text-[20px] hover:text-blue-600 md:text-2xl"
        onClick={() => navigate("/")}
      >
        SK
      </button>

      {/* Email (visible on larger screens) */}
      <a
        className="hidden lg:block text-[11px] sm:text-lg hover:text-blue-600"
        href="mailto:shathishkumaran07@gmail.com"
      >
        shathishkumaran07@gmail.com
      </a>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      {/* Navigation Links */}
      <div
        className={`fixed sm:absolute md:static tracking-wider bg-white dark:bg-black border md:border-none top-15 left-0 w-full md:w-auto md:bg-transparent md:flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 p-7 md:p-0 z-20 ${menuOpen ? "block" : "hidden"
          }`}
      >
        {navLinks.map(({ name, path }) => (
          <div key={name} className="flex"
          >
            <button
              className="cursor-pointer hover:text-blue-600"
              onClick={() => handleNavigation(path)}
            >
              {name}
            </button>
          </div>
        ))}

        <DarkModeToggler />
      </div>
    </nav>
  );
};

export default NavBar;
