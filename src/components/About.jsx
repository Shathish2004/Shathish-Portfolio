import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExperienceTimeline from "./ExperienceTImeLine";

const About = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-10 max-w-6xl mx-auto px-6">
      {/* Introduction Section */}
      <div className="flex items-center justify-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
            Hey there, I&apos;m <span className="text-blue-600">Shathish Kumaran</span>,
            <br /> a passionate
            <span className="text-blue-600"> Full-Stack MERN Developer</span>
          </h1>

          <p className="mt-4 text-xl text-gray-700 dark:text-white">
            Turning ideas into reality with clean code and creative problem-solving.
            With a deep passion for
            <span className="text-blue-500 font-medium"> Generative AI</span> &
            <span className="text-blue-500 font-medium"> Cybersecurity</span>,
            I thrive on building intelligent, secure, and seamless digital experiences.
          </p>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Always exploring, always learning. Let&apos;s create something amazing together!
          </p>
          <p className="mt-5 text-lg sm:text-xl  font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600"><a href="mailto:satheesh12072004@gmail.com" >
            satheesh12072004@gmail.com
          </a></p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex mt-5 md:mt-5 lg:mt-5 mb-15 justify-center md:justify-start space-x-6 sm:space-x-10">
        {[
          { href: "https://www.linkedin.com/in/shathish-kumaran-05a298325/", icon: "fab fa-linkedin", color: "hover:text-blue-600" },
          { href: "https://github.com/SHATHISH-07", icon: "fab fa-github", color: "hover:text-gray-600" },
          { href: "https://x.com/Shathish_07", icon: "fab fa-x-twitter", color: "hover:text-blue-400" },
          { href: "https://www.instagram.com/shathish_07/", icon: "fab fa-instagram", color: "hover:text-pink-500" }
        ].map(({ href, icon, color }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-900 dark:text-gray-200 text-3xl transition transform hover:scale-110 ${color}`}
          >
            <i className={icon}></i>
          </a>
        ))}
      </div>


      <div className="text-center md:text-left my-10 ">
        <h1 className="text-4xl font-bold  inline-block pb-2">
          Education
        </h1>

        {/* College Section */}
        <div className="mt-6 ">
          <h1 className="text-2xl font-bold text-blue-600">College</h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Bachelor of Engineering in Computer Science and Engineering (2022-2026)
          </p>
          <p className="text-gray-800 dark:text-gray-300 font-medium text-lg mt-1 md:pl-6">
            {Date.now() > new Date("2026-06-01")
              ? "I have completed my Bachelor of Engineering (B.E.) in Computer Science and Engineering at Dhirajlal Gandhi College of Technology, Salem, Tamil Nadu, India."
              : `I am currently pursuing my ${Date.now() > new Date("2025-06-01") ? "fourth" : "third"
              } year of Bachelor of Engineering (B.E.) in Computer Science and Engineering at Dhirajlal Gandhi College of Technology, Salem, Tamil Nadu, India.`}
          </p>
          <p className="text-blue-500 dark:text-gray-100 font-semibold text-xl mt-2 md:pl-6">Current CGPA: 8.05</p>
        </div>

        {/* Schooling Section */}
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-blue-600">Schooling</h1>
          <p className="text-gray-700 dark:text-gray-400 text-lg md:pl-6">
            I have completed my schooling at <span className="font-semibold">St Paul&apos;s Higher Secondary School</span>, Salem, Tamil Nadu, India.
          </p>
          <p className="text-blue-500 dark:text-gray-100 text-xl font-medium md:pl-6">SSLC Percentage: 74.6%</p>
          <p className="text-blue-500 dark:text-gray-100 text-xl font-medium md:pl-6">HSC Percentage: 78.3%</p>
        </div>

        {/* Professional Summary */}
        <div className="mt-6 ">
          <h1 className="text-2xl font-bold text-blue-600">Professional Summary</h1>
          <ul className="list-disc text-lg ml-6 mt-2 text-gray-700 dark:text-gray-400 md:p-6">
            <li>MERN Stack Developer with hands-on project experience.</li>
            <li>
              Completed <span className="font-semibold">FullStackOpen</span> - University of Helsinki.
            </li>
            <li>
              Completed <span className="font-semibold">Google Cybersecurity Certification</span>.
            </li>
          </ul>
        </div>

        {/* Future Goals */}
        <div className="mt-6 ">
          <h1 className="text-2xl font-bold text-blue-600">Future Goals</h1>
          <p className="text-gray-700 dark:text-gray-400 text-lg mt-2 md:p-6">
            My future goal is to <span className="font-semibold">dive deep into Cybersecurity and Generative AI</span>, exploring advanced security mechanisms and AI-driven innovations.
          </p>
        </div>
      </div>






      {/* Skills Section */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold pb-6">Skills</h1>
        <h1 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-200 md:pl-6">
          Proficient in
          <span className="text-green-500"> MongoDB</span>,
          <span className="text-yellow-500"> Express</span>,
          <span className="text-blue-500"> React</span>, and
          <span className="text-green-700"> Node.js</span>.
          <br /> Explore my full skill set below!
        </h1>

        <div className="ml-0 md:ml-6 mt-4">
          <button
            onClick={() => navigate("/skills")}
            className="mt-4 px-6 py-3 border-1 button-shadow hover:text-white  hover:bg-blue-600 transition transform hover:scale-105">
            View My Skills
          </button>
        </div>
      </div>

      {/* Experience & Certifications */}
      <div className="mt-15 text-center md:text-left">
        <h1 className="mb-5 text-3xl  font-bold">Certifications</h1>
        <p className="mb-10 text-lg text-gray-600 dark:text-gray-300 md:p-6">
          I have successfully completed the <span className="text-blue-600 font-medium">FullStack Open course (7 ECTS)</span> from the
          <span className="font-semibold text-blue-600"> University of Helsinki</span>, gaining in-depth knowledge of modern web development with the
          MERN stack. Additionally, I have completed
          <span className="text-blue-600 font-medium"> FreeCodeCamp&apos;s
            Responsive Web Design,
            JavaScript Data Structures and Algorithms, and
            Front-End Libraries</span> certifications. These have further strengthened my expertise in both
          front-end and
          full-stack development, equipping me with hands-on experience in building scalable and responsive web applications.
        </p>

        <ExperienceTimeline />
      </div>

      <div className="text-center md:text-left my-10 ">
        <h1 className="text-4xl font-bold  inline-block pb-2">
          Hobbies & Interests
        </h1>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Hobby Card - Music */}
          <div className="p-4 ">
            <h2 className="text-xl font-bold text-blue-600"> Listening to Music</h2>
            <p className="text-gray-700 dark:text-gray-400 mt-1">I enjoy exploring different genres and discovering new artists.</p>
          </div>

          {/* Hobby Card - Movies */}
          <div className="p-4 ">
            <h2 className="text-xl font-bold text-blue-600"> Watching Movies</h2>
            <p className="text-gray-700 dark:text-gray-400 mt-1">I love watching sci-fi, thrillers, and classic movies.</p>
          </div>

          {/* Hobby Card - Cooking */}
          <div className="p-4 ">
            <h2 className="text-xl font-bold text-blue-600"> Cooking</h2>
            <p className="text-gray-700 dark:text-gray-400 mt-1">Experimenting with new recipes and flavors is something I truly enjoy.</p>
          </div>
        </div>
      </div>


    </div >
  );
};

export default About;
