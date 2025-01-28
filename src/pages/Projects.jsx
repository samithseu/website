import AnimatedPage from "../components/AnimatedPage";
import ProjectIcon from "../components/ProjectIcon";
import GitHub from "../components/GitHub";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../api/FetchData";

const Projects = () => {
  const {
    data: projects,
    isPending,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <AnimatedPage className="project-container container">
      <SectionTitle sectionTitle="Projects" icon={<ProjectIcon />} />
      <p className="section-text">
        All <span className="highlight project-count">{projects?.length}</span>{" "}
        projects are from my{" "}
        <Link
          to="https://github.com/samithseu"
          target="_blank"
          className="highlight"
        >
          GitHub
        </Link>
      </p>
      <div className="projects">
        {isPending && (
          <div className="center">
            <div className="spinner"></div>
          </div>
        )}
        {error && <p className="error-text">Error: {error.message}</p>}
        {!isPending &&
          projects?.map((project) => (
            <Link
              title={project.name}
              target="_blank"
              className="project-card"
              to={project.html_url}
              key={project.id}
            >
              <GitHub />
              <h2 className="project-title">{project.name}</h2>
            </Link>
          ))}
      </div>
    </AnimatedPage>
  );
};

export default Projects;
