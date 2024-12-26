import AnimatedPage from "../components/AnimatedPage";
import ProjectIcon from "../components/ProjectIcon";
import GitHub from "../components/GitHub";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  // fetch projects from github api
  useEffect(() => {
    fetch("https://api.github.com/users/samithseu/repos")
      .then((response) => response.json())
      .then((data) => {
        let filteredData = data.filter(
          (project) =>
            project.language != "C++" && project.topics.includes("project")
        );
        setProjects(filteredData);
      });

    // clean up function
    return () => {
      setProjects([]);
    };
  }, []);

  return (
    <AnimatedPage className="project-container container">
      <SectionTitle sectionTitle="Projects" icon={<ProjectIcon />} />
      <p className="section-text">
        All <span className="highlight project-count">{projects.length}</span>{" "}
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
        {projects.length === 0 && (
          <div className="center">
            <div className="spinner"></div>
          </div>
        )}
        {projects.map((project) => (
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
