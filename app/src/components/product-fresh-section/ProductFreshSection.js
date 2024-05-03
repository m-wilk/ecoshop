import TitleSection from "../title-section/TitleSection";
import "./product-fresh-section.scss";
import ProductFreshItem from "../product-fresh-item/ProductFreshItem";

const ProductCategorySection = (props) => {
  return (
    <div className="product-fresh">
      <div className="container">
        <TitleSection title={props.title}  headerClassName="fw-bold" />
        <div className="row gy-4">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <ProductFreshItem />
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <ProductFreshItem />
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <ProductFreshItem />
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <ProductFreshItem />
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default ProductCategorySection;
