import "./blog-title-section.scss";

const BlogTitleSection = () => {
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
              Seller Application
            </a>
          </span>
        </div>
        <h1 className="text-center fw-bold">Become A Seller!</h1>
      </div>
    </div>
  );
};

export default BlogTitleSection;
