import { useEffect } from "react";
import ProjectsCard from "./ProjectsCard";
import projectsData from "../data/projectsData";

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);



  return (
    <div>
      {projectsData.map(({ category, projects }) => (
        <ProjectsCard key={category} projects={projects} title={category} />
      ))}
    </div>
  );
};

export default Projects;
