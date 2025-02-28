import PropTypes from "prop-types";
import useLazyLoad from "../hooks/useLazyLoad";

const ProjectCard = ({ project, index }) => {
    const { isVisible, elementRef } = useLazyLoad();

    return (
        <div
            ref={elementRef}
            className={`flex flex-col sm:flex-row items-center gap-6 p-6 transition-all duration-500 
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
      ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
        >
            {/* Video Section */}
            <div className="w-full sm:max-w-[40%] max-h-[400px] overflow-hidden rounded-lg border">
                {project.video ? (
                    <video controls className="w-full h-auto rounded-lg" loading="lazy">
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <p className="text-center p-4">No video available</p>
                )}
            </div>

            {/* Text & Buttons */}
            <div className="w-full sm:max-w-[50%] text-center">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="mt-2">{project.description}</p>

                <div className="mt-4 flex flex-wrap justify-center gap-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <button className="border py-2 px-4 cursor-pointer button-shadow hover:bg-blue-600 hover:text-white">
                            View Project
                        </button>
                    </a>
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <button className="border py-2 px-4 cursor-pointer button-shadow hover:bg-blue-600 hover:text-white">
                            Source Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        video: PropTypes.string,
        link: PropTypes.string.isRequired,
        sourceCode: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

const ProjectsCard = ({ projects, title }) => {
    return (
        <div className="max-w-6xl mx-auto">
            {/* Title Section */}
            <div className="text-center mt-15 mb-4">
                <h1 className="text-3xl p-5 font-bold">{title}</h1>
            </div>

            {/* Projects List */}
            <div className="space-y-20">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id || project.title} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

ProjectsCard.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            video: PropTypes.string,
            link: PropTypes.string.isRequired,
            sourceCode: PropTypes.string.isRequired,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default ProjectsCard;
