import AnimatedPage from "../components/AnimatedPage";
import AwardIcon from "../components/AwardIcon";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const Certificates = () => {
  const [Certificates, setCertificates] = useState([]);
  // fetch Certificates from notion api
  useEffect(() => {
    fetch("https://jroch-nuxt.vercel.app/api/certs")
      .then((response) => response.json())
      .then((data) => {
        setCertificates(data);
      });
    // clean up function
    return () => {
      setCertificates([]);
    };
  }, []);

  return (
    <AnimatedPage className="project-container container">
      <SectionTitle sectionTitle="Certificates" icon={<AwardIcon />} />
      <p className="section-text">
        All{" "}
        <span className="highlight project-count">{Certificates.length}</span>{" "}
        certificates are from my <span className="highlight">Notion API</span>
      </p>
      <div className="projects">
        {Certificates.length === 0 && (
          <div className="center">
            <div className="spinner"></div>
          </div>
        )}
        {Certificates.map((project) => (
          <Link
            title={project.subject}
            target="_blank"
            className="award project-card"
            to={project.photoURL}
            key={project.id}
          >
            <AwardIcon />
            <h2 className="project-title">{project.subject}</h2>
          </Link>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default Certificates;
