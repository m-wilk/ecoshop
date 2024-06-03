import "./blog-title-section.scss";
import BlogBreadcrum from "../blog-breadcrum/BlogBreadcrum";

const BlogTitleSection = (props) => {
  return (
    <div className="blog-title-section">
      <div className="container">
      <BlogBreadcrum />
        <h1 className="text-center fw-bold">{props.title}</h1>
      </div>
    </div>
  );
};

export default BlogTitleSection;
