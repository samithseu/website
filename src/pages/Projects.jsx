import AnimatedPage from "../components/AnimatedPage";
import ProjectIcon from "../components/ProjectIcon";

const Projects = () => {
  return (
    <AnimatedPage className="project-container container">
      <h1 className="section-title">
        Projects
        <ProjectIcon />
      </h1>
      <p className="section-text">No projects yet!</p>
    </AnimatedPage>
  );
};

export default Projects;
