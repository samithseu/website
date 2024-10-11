import GitHub from "../components/GitHub";
import Linkedin from "../components/LinkedIn";
import Twitter from "../components/Twitter";
import Telegram from "../components/Telegram";
import Email from "../components/Email";

function Home() {
  return (
    <>
      <div className="hero-container container">
        {/* image */}
        <div className="hero-img">
          <img src="logo.webp" alt="samithseu logo" />
        </div>

        {/* name */}
        <h2>web developer</h2>
        <h2 className="highlight">frontend</h2>

        {/* social */}
        <div className="social">
          <a
            target="_blank"
            href="https://github.com/samithseu"
            aria-label="Click this link to checkout Samith's Github"
          >
            <GitHub />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/seumith"
            aria-label="Click this link to checkout Samith's Twitter/X"
          >
            <Twitter />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/samith-seu-500193205/"
            aria-label="Click this link to checkout Samith's Linkedin profile"
          >
            <Linkedin />
          </a>
          <a
            target="_blank"
            href="https://t.me/samithseu"
            aria-label="Click this link to checkout Samith's Telegram"
          >
            <Telegram />
          </a>
          <a
            href="mailto:seusamith@gmail.com"
            aria-label="Click this link to checkout Samith's Email"
          >
            <Email />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
