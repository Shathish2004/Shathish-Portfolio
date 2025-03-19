import { useEffect } from "react";
import Skills from "./Skills";

const SkillCertificate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-10 max-w-6xl lg:max-w-7xl mx-auto">
      <Skills />
    </div>
  );
};

export default SkillCertificate;
