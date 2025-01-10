import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import NotFoundPage from "./pages/NotFoundPage";
import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for mouse movement and resize
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup the event listener on unmount
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {windowWidth > 768 && (
        <motion.div
          className="shape"
          style={{ x: mouseX, y: mouseY, translate: "-50% -50%" }}
          transition={{ type: "smooth" }}
        ></motion.div>
      )}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route exact path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
