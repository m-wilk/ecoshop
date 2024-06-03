import "./product-categories.scss";
import HeaderTopSection from "../../components/header-top-section/HeaderTopSection";
import HeaderCenterSection from "../../components/header-center-section/HeaderCenterSection";
import HeaderBottomSection from "../../components/header-bottom-section/HeaderBottomSection";
import FooterSection from "../../components/footer-section/FooterSection";
import CheckboxList from "../../components/checkbox list/CheckboxList";
import PriceRange from "../../components/price-range/PriceRange";
import { ReactComponent as DropDownIcon } from "../../assets/img/drop-down-icon.svg";
import { ReactComponent as Arrowdown } from "../../assets/img/arrowdown.svg";
import ProductFreshItem from "../../components/product-fresh-item/ProductFreshItem";
import ScrollReveal from "../../components/scroll-reveal/ScrollReveal";
import ShopButton from "../../components/shop-button/ShopButton";
import { useState } from "react";

const categories = [
  {
    name: "vegetable",
    label: "Vegetable",
  },
  {
    name: "fruits",
    label: "Fruits",
  },
  {
    name: "Juice",
    label: "Juice",
  },
  {
    name: "Meat",
    label: "Meat",
  },
];

const categories2 = [
  {
    name: "Refined Threads",
    label: "Refined Threads",
  },
  {
    name: "Ethereal Chic",
    label: "Ethereal Chic",
  },
  {
    name: "Yellow",
    label: "Yellow",
  },
  {
    name: "Esctasy",
    label: "Esctasy",
  },
];

const categories3 = [
  {
    name: "500gm",
    label: "500gm",
  },
  {
    name: "1kg",
    label: "1kg",
  },
  {
    name: "2kg",
    label: "2kg",
  },
  {
    name: "5kg",
    label: "5kg",
  },
];

const ProductCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HeaderTopSection />
      <HeaderCenterSection />
      <HeaderBottomSection />
      <div className="product-categories-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <div className="checkbox-list-wrapper d-flex flex-column gap-5">
                <CheckboxList heading="Product Categories" items={categories} />
                <PriceRange />
                <CheckboxList heading="Brands" items={categories2} />
                <CheckboxList heading="Weight" items={categories3} />
              </div>
              <div className="sidebar-section text-white">
                <span>Trendy</span>
                <h3 className="fw-bold">Best wirelless Shoes</h3>
                <a className="text-white text-decoration-none" href="#">
                  Shop Now
                  <DropDownIcon className="white-icon" />
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row g-5">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between align-items-center product-sorting-section">
                    <div>
                      <p className="m-0">
                        Showing <span>1-6 of 66 results</span>
                      </p>
                    </div>
                    <div className="d-flex gap-2 position-relative">
                      <span>Soty by:</span>

                      <div
                        onClick={() => {
                          setIsOpen(!isOpen);
                        }}
                      >
                        <span className="text-secondary me-2">Default</span>
                        <Arrowdown className="grey-icon" />
                      </div>

                      {isOpen ? (
                        <>
                          <div
                            onClick={() => {
                              setIsOpen(!isOpen);
                            }}
                            className="click-away"
                          ></div>
                          <ul className="list-option list-unstyled">
                            <li className="detail-option ">Vegetable</li>
                            <li className="detail-option ">Vegetable</li>
                            <li className="detail-option ">Vegetable</li>
                            <li className="detail-option ">Vegetable</li>
                          </ul>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
                <ScrollReveal>
                  <div className="row g-5">
                    <div className="col-xl-4 col-sm-6">
                      <ProductFreshItem title="Fresh Red Tomatos" />
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <ProductFreshItem title="Fresh Red Tomatos" />
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <ProductFreshItem title="Fresh Red Tomatos" />
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="row g-5">
                    <div className="col-xl-4 col-sm-6">
                      <ProductFreshItem title="Fresh Red Tomatos" />
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <ProductFreshItem title="Fresh Red Tomatos" />
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <ProductFreshItem title="Fresh Red Tomatos" />
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="row g-5">
                    <div className="col-lg-12">
                      <div className="d-flex flex-column  align-items-center justify-content-center gap-2 product-details-section">
                        <h3 className="text-white fw-bold">
                          Get the best deal for Grocery Items
                        </h3>
                        <ShopButton text="Shop Now" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="row g-5">
                    <div className="col-xl-4 col-sm-6">
                      <ProductFreshItem title="Fresh Red Tomatos" />
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <ProductFreshItem title="Fresh Red Tomatos" />
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <ProductFreshItem title="Fresh Red Tomatos" />
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="row g-5">
                    <div className="col-xl-4 col-sm-6">
                      <ProductFreshItem title="Fresh Red Tomatos" />
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <ProductFreshItem title="Fresh Red Tomatos" />
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <ProductFreshItem title="Fresh Red Tomatos" />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ProductCategories;
