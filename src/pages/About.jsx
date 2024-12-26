import AnimatedPage from "../components/AnimatedPage";
import AboutIcon from "../components/AboutIcon";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  let today = new Date();
  let birthday = new Date(2002, 6, 14);
  let age = today.getFullYear() - birthday.getFullYear();

  return (
    <>
      <AnimatedPage className="about-container container">
        <SectionTitle sectionTitle="About" icon={<AboutIcon />} />
        <p>
          My name is <span className="highlight">Samith Seu</span>, a{" "}
          <span className="highlight">{age}</span> year-old IT student, studying
          in IT major at{" "}
          <a
            target="_blank"
            href="https://www.facebook.com/brachnasastraBTI"
            className="highlight"
          >
            BTI
          </a>{" "}
          which currently in
          <span className="highlight">
            {" "}
            4<sup>th</sup>{" "}
          </span>{" "}
          year. Even coding is hard for me, I'm still trying to learn and
          practise more since 2020 because the quarantine make me want to learn
          more about the computer. As a passionate frontend developer, I thrive
          on crafting intuitive and visually compelling user experiences. With a
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
