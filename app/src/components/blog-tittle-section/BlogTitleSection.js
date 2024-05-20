import "./blog-title-section.scss";

const BlogTitleSection = (props) => {
  return (
    <div className="blog-title-section">
      <div className="container">
        <div>
          <span>
            <a className="text-decoration-none" href="#">
              Home
            </a>
          </span>
          <span> / </span>
          <span>
            <a className="text-decoration-none" href="#">
              Dashboard
            </a>
          </span>
        </div>
        <h1 className="text-center fw-bold">{props.title}</h1>
      </div>
    </div>
  );
};

export default BlogTitleSection;
