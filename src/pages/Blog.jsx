import AnimatedPage from "../components/AnimatedPage";
import BlogIcon from "../components/BlogIcon";
import SectionTitle from "../components/SectionTitle";
import { useEffect } from "react";

const Blog = () => {
  // changing page title
  useEffect(() => {
    document.title = "Samith Seu - Blog";
  }, []);

  return (
    <AnimatedPage className="blog-container container">
      <SectionTitle sectionTitle="Blog" icon={<BlogIcon />} />
      <p className="section-text">No blog yet!</p>
    </AnimatedPage>
  );
};

export default Blog;
