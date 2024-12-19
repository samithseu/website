import GitHub from "../components/GitHub";
import Linkedin from "../components/LinkedIn";
import Twitter from "../components/Twitter";
import Telegram from "../components/Telegram";
import Email from "../components/Email";
import { motion } from "framer-motion";
import M_Logo from "../components/M_Logo";

function Home() {
  const transition = { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] };
  const variants = {
    hidden: { filter: "blur(12px)", transform: "translateY(30%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className="hero-container container"
      >
        {/* image */}
        <motion.div
          transition={transition}
          variants={variants}
          className="hero-img"
        >
          <M_Logo color="#15d0ff" />
        </motion.div>

        {/* name */}
        <motion.h2
          transition={transition}
          variants={variants}
          className="subtext"
        >
          web developer
        </motion.h2>
        <motion.h2
          transition={transition}
          variants={variants}
          className="subtext highlight"
        >
          frontend
        </motion.h2>

        {/* social */}
        <motion.div
          transition={transition}
          variants={variants}
          className="social"
        >
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
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;
