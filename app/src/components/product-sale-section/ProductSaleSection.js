import "./product-sale-section.scss";
import TitleSection from "../title-section/TitleSection";
import ProductSaleItem from "../product-sale-item/ProductSaleItem";
import ScrollReveal from "../scroll-reveal/ScrollReveal";

const ProductSaleSection = () => {
  return (
    <div className="product-sale-section">
      <div className="container">
        <TitleSection title="Popular Sales" headerClassName="fw-bold" />
        <ScrollReveal>
          <div className="row g-5">
            <div className="col-lg-4 col-sm-6">
              <ProductSaleItem />
            </div>
            <div className="col-lg-4 col-sm-6">
              <ProductSaleItem />
            </div>
            <div className="col-lg-4 col-sm-6">
              <ProductSaleItem />
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="row g-5">
            <div className="col-lg-4 col-sm-6">
              <ProductSaleItem />
            </div>
            <div className="col-lg-4 col-sm-6">
              <ProductSaleItem />
            </div>
            <div className="col-lg-4 col-sm-6">
              <ProductSaleItem />
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="row g-5">
            <div className="col-lg-4 col-sm-6">
              <ProductSaleItem />
            </div>
            <div className="col-lg-4 col-sm-6">
              <ProductSaleItem />
            </div>
            <div className="col-lg-4 col-sm-6">
              <ProductSaleItem />
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="row g-5">
            <div className="col-lg-4 col-sm-6">
              <ProductSaleItem />
            </div>
            <div className="col-lg-4 col-sm-6">
              <ProductSaleItem />
            </div>
            <div className="col-lg-4 col-sm-6">
              <ProductSaleItem />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ProductSaleSection;
