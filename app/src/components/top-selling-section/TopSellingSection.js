import TitleSection from "../title-section/TitleSection";
import ProductFreshItem from "../product-fresh-item/ProductFreshItem";
import React, { useEffect } from "react";
import ScrollReveal from "../scroll-reveal/ScrollReveal";

const TopSelingSection = () => {
  return (
    <div className="container">
      <TitleSection title="Top Selling Prodcuts" headerClassName="fw-bold" />
        <ScrollReveal>
        <div className="row gy-4 mb-4">
          <div className="col-lg-4 col-md-6">
            <ProductFreshItem className="horizontal" />
          </div>
          <div className="col-lg-4 col-md-6">
            <ProductFreshItem className="horizontal" />
          </div>
          <div className="col-lg-4 col-md-6">
            <ProductFreshItem className="horizontal" />
          </div>
        </div>
      </ScrollReveal>

        <ScrollReveal>
        <div className="row mb-4">
          <div className="col-lg-4 col-md-6">
            <ProductFreshItem className="horizontal" />
          </div>
          <div className="col-lg-4 col-md-6">
            <ProductFreshItem className="horizontal" />
          </div>
          <div className="col-lg-4 col-md-6">
            <ProductFreshItem className="horizontal" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default TopSelingSection;
