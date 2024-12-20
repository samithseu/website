import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup the event listener on unmount
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="shape"
        style={{ x: mouseX, y: mouseY, translate: "-50% -50%" }}
        transition={{ type: "smooth" }}
      ></motion.div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
