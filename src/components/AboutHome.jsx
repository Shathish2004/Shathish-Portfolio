import { useLayoutEffect, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import myImage from "../assets/PersonalImg/myImage.png";
import bgImage from "../assets/PersonalImg/bgImage.png";

const AboutHome = () => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Preload images before rendering
  useEffect(() => {
    const img = new Image();
    img.src = myImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="mt-30 max-w-6xl lg:max-w-7xl mx-auto  px-6">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-[55%] text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold leading-snug">
            Hi, I&apos;m Shathish Kumaran, a
            <span className="text-blue-600 dark:text-blue-500"> Full-Stack MERN Developer</span>
          </h1>

          <p className="mt-4 text-xl text-gray-700 dark:text-white">
            Driven by code, curiosity, and innovation. Passionate about
            <span className="text-blue-500  font-medium"> Generative AI </span>
            and <span className="text-blue-500 font-medium"> Cybersecurity</span>,
            I love building intelligent, secure, and seamless digital experiences.
          </p>
          <p
            onClick={() => navigate("/about")}
            className="mt-4 text-2xl sm:text-3xl hover:text-blue-600 hover:underline font-semibold cursor-pointer"
          >
            Learn More About Me.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 mt-8">
            <button
              onClick={() => navigate("/contact")}
              className="border-1 py-3 px-8 cursor-pointer button-shadow hover:bg-blue-600 hover:text-white"
            >
              Hire Me
            </button>

            <a
              className="border-1 py-3 px-8 cursor-pointer button-shadow hover:bg-blue-600 hover:text-white"
              target="_blank"
              href="https://drive.google.com/file/d/1O849HIpJ87mUOTywrR39KAm61y71y3CH/view?usp=sharing"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>


          <div className="flex  mt-10 justify-center md:justify-start space-x-6 sm:space-x-10 ">
            {[
              { href: "https://www.linkedin.com/in/shathish-kumaran-05a298325/", icon: "fab fa-linkedin", color: "text-blue-600", darkColor: "text-blue-300" },
              { href: "https://github.com/SHATHISH-07", icon: "fab fa-github", color: "text-gray-800", darkColor: "text-white" },
              { href: "https://www.instagram.com/shathish_07/", icon: "fab fa-instagram", color: "text-pink-500", darkColor: "text-pink-400" },
            ].map(({ href, icon, color, darkColor }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-4xl ${color} transition dark:${darkColor}`}
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-[45%] flex justify-center">
          <div
            className="relative w-56 h-56 md:w-[80%] md:h-full flex items-center justify-center bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {imageLoaded && (
              <img src={myImage} alt="Shathish Kumaran" className="w-full h-full object-contain" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
