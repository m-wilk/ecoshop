import "./title-section.scss"

const TitleSection = (props) => {
    return (
        <div className="d-flex justify-content-between align-items-center fw-bold title-section">
            <h3 className={props.headerClassName} >{props.title}</h3>
            <a className="text-decoration-none " href="product-sitebar.html">View All</a>
        </div>
    );
}

export default TitleSection;