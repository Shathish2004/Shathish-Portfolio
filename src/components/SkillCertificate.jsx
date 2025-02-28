import { useEffect } from "react";
import Skills from "./Skills";
import Certificates from "./Certificates";

const SkillCertificate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-10 max-w-6xl mx-auto">
      <Skills />
      <Certificates />
    </div>
  );
};

export default SkillCertificate;
