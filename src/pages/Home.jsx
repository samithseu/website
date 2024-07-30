function Home() {
  return (
    <>
      <div className="hero-container container">
        {/* image */}
        <div className="hero-img">
          <img src="logo.jpg" alt="samithseu logo" />
        </div>

        {/* name */}
        <h1>samith seu</h1>
        <h2>web developer</h2>
        <h2 className="highlight">frontend</h2>

        {/* social */}
        <div className="social">
          <a
            target="_blank"
            href="https://github.com/samithseu"
            aria-label="Click this link to checkout Samith's Github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/seumith"
            aria-label="Click this link to checkout Samith's Twitter/X"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/samith-seu-500193205/"
            aria-label="Click this link to checkout Samith's Linkedin profile"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            href="https://t.me/samithseu"
            aria-label="Click this link to checkout Samith's Telegram"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            href="mailto:seusamith@gmail.com"
            aria-label="Click this link to checkout Samith's Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
