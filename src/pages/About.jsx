import AnimatedPage from "../components/AnimatedPage";

const About = () => {
  let todayYear = new Date().getFullYear();

  return (
    <>
      <AnimatedPage className="about-container container">
        <h1 className="section-title">about</h1>
        <p>
          As you already know, my name is{" "}
          <span className="highlight">Samith Seu </span>. I am{" "}
          <span className="highlight">{todayYear - 2002}</span> years old and a
          student studying in IT major at{" "}
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
          more about the computer.
        </p>
      </AnimatedPage>
    </>
  );
};

export default About;
