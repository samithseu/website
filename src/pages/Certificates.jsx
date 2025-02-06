import AnimatedPage from "../components/AnimatedPage";
import AwardIcon from "../components/AwardIcon";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchCertificates } from "../api/FetchData";

const Certificates = () => {
  const {
    data: Certificates,
    isPending,
    error,
  } = useQuery({
    queryKey: ["certificates"],
    queryFn: fetchCertificates,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60, // 60 seconds
  });

  return (
    <AnimatedPage className="project-container container">
      <SectionTitle sectionTitle="Certificates" icon={<AwardIcon />} />
      <p className="section-text">
        All{" "}
        <span className="highlight project-count">{Certificates?.length}</span>{" "}
        certificates are from the{" "}
        <span className="highlight">
          college{" "}
          <Link
            target="_blank"
            to="https://www.facebook.com/brachnasastraBTI"
            className="highlight"
          >
            (BTI)
          </Link>
        </span>
      </p>
      <div className="projects">
        {isPending && (
          <div className="center">
            <div className="spinner"></div>
          </div>
        )}
        {error && <p className="error-text">Error: {error.message}</p>}
        {!isPending &&
          Certificates?.map((project) => (
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
