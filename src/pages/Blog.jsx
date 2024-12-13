import AnimatedPage from "../components/AnimatedPage";
import BlogIcon from "../components/BlogIcon";

const Blog = () => {
  return (
    <AnimatedPage className="blog-container container">
      <h1 className="section-title">
        Blog
        <BlogIcon />
      </h1>
      <p className="section-text">No blog yet!</p>
    </AnimatedPage>
  );
};

export default Blog;
