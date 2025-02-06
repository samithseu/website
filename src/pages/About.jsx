import AnimatedPage from "../components/AnimatedPage";
import AboutIcon from "../components/AboutIcon";
import SectionTitle from "../components/SectionTitle";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  let today = new Date();
  let birthday = new Date("2002-07-14");
  const diffInMS = today - birthday;

  // Convert milliseconds to years
  const MSInYear = 1000 * 60 * 60 * 24 * 365.25;
  const age = Math.floor(Math.abs(diffInMS / MSInYear));

  // changing page title
  useEffect(() => {
    document.title = "Samith Seu - About";
  }, []);

  return (
    <>
      <AnimatedPage className="about-container container">
        <SectionTitle sectionTitle="About" icon={<AboutIcon />} />
        <p>
          My name is <span className="highlight">Samith Seu</span>, a{" "}
          <span className="highlight">{age}</span> year-old IT fresh graduate,
          was studying in IT major at{" "}
          <Link
            target="_blank"
            to="https://www.facebook.com/brachnasastraBTI"
            className="highlight"
          >
            BTI
          </Link>
          . Even coding is hard for me, I'm still trying to learn and practise
          more since 2020 because the quarantine make me want to learn more
          about the computer. As a passionate frontend developer, I thrive on
          crafting intuitive and visually compelling user experiences. With a
          strong <span className="highlight"> foundation</span> in modern web
          technologies like <span className="highlight">HTML, CSS</span> and{" "}
          <span className="highlight">JavaScript</span>, I specialize in
          leveraging frameworks like <span className="highlight">Vue.JS </span>{" "}
          and <span className="highlight"> React.JS</span> to build responsive,
          user-friendly interfaces. My commitment to clean, maintainable code
          ensures that every project is not just visually appealing but also
          highly functional and optimized for{" "}
          <span className="highlight"> performance</span>. Whether collaborating
          with teams or working independently, I bring a{" "}
          <span className="highlight">detail-oriented </span>
          approach and a creative mindset to every project, aiming to bridge the
          gap between design and functionality. I’m dedicated to staying ahead
          of industry trends, constantly learning, and using my skills to turn
          <span className="highlight"> innovative</span> ideas into digital
          reality.
        </p>
      </AnimatedPage>
    </>
  );
};

export default About;
