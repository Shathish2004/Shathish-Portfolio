import { motion } from "framer-motion";
import { useMemo } from "react";
import PropTypes from "prop-types";
import useLazyLoad from "../hooks/useLazyLoad";
import skillsData from "../data/skillsData";
import "../assets/css/skills.css";



const SkillCard = ({ skill }) => {
  const { isVisible, elementRef } = useLazyLoad(); // Lazy loading applied to individual skill cards

  return (
    <div
      ref={elementRef}
      className={`card group mx-auto w-full sm:w-[90%] md:w-[80%] h-[50vh] sm:h-[60vh] md:h-[50vh] transition-all duration-500 ease-in-out transform 
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
    >
      {isVisible && (
        <div className="card-inner rounded-xl border-1">
          <div className="card-front flex justify-center items-center flex-col rounded-xl">
            <img
              src={skill.icon}
              alt={skill.alt}
              className="w-30 h-30 mb-2 mx-auto icon-shadow"
            />
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center font-mono">
              {skill.alt}
            </p>
          </div>

          <div className={`card-back ${skill.color} flex justify-center items-center rounded-xl`}>
            <p className="sm:text-md md:text-lg lg:text-xl text-center text-gray-800 p-2 font-semibold">
              {skill.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string
  }).isRequired
};


const Skills = () => {
  const memoizedSkills = useMemo(() => skillsData, []);

  return (
    <div className="mt-20">
      <p className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
        SKILLS
      </p>
      <motion.div
        className="skill-icons grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {memoizedSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
