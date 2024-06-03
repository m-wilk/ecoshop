import TitleSection from "../title-section/TitleSection";
import "./product-fresh-section.scss";
import ProductFreshItem from "../product-fresh-item/ProductFreshItem";
import ScrollReveal from "../scroll-reveal/ScrollReveal";

const ProductCategorySection = (props) => {
  return (
    <div className="product-fresh">
      <div className="container">
        <TitleSection title={props.title}  headerClassName="fw-bold" />
        <ScrollReveal>
        <div className="row gy-4">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <ProductFreshItem title="Fresh Red Tomatos"/>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <ProductFreshItem title="Chicken Egss" />
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <ProductFreshItem title="Fresh Watemelon"/>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <ProductFreshItem title="Beef Steak"/>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ProductCategorySection;
