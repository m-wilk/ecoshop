import "./blog-breadcrum.scss";


const BlogBreadcrum = () => {
    return (
        <div >
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
        
      </div>
    )
}

export default BlogBreadcrum;