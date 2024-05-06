import "./product-category-section.scss";
import TitleSection from "../title-section/TitleSection";
import Fruits from "../../assets/img/c-img-1.png";
import { ReactComponent as DropDownIcon } from "../../assets/img/drop-down-icon.svg";
import ShopFruits from "../../assets/img/c-shop-img-1.png";
import ShopButton from "../shop-button/ShopButton";
import ScrollReveal from "../scroll-reveal/ScrollReveal";




const ProductCategorySection = () => {
  return (
    <div className="container product-category-section">
      <TitleSection title="Market Category" headerClassName="fw-bold"/>   
      {/* category section */}
      <ScrollReveal origin="left">
      <div className="category-section ">
        <div className="d-flex flex-column align-items-center  gap-3">
          <div className="wraper-img">
            <img src={Fruits} />
          </div>
          <div>
            <a className="text-decoration-none" href="product-sidebar.html">
              Fruits
            </a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="wraper-img">
            <img src={Fruits} />
          </div>
          <div>
            <a className="text-decoration-none" href="product-sidebar.html">
              Vegetable
            </a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="wraper-img">
            <img src={Fruits} />
          </div>
          <div>
            <a className="text-decoration-none" href="product-sidebar.html">
              Juice
            </a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="wraper-img">
            <img src={Fruits} />
          </div>
          <div>
            <a className="text-decoration-none" href="product-sidebar.html">
              Meat
            </a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="wraper-img">
            <img src={Fruits} />
          </div>
          <div>
            <a className="text-decoration-none" href="product-sidebar.html">
              Cold Drink
            </a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="wraper-img">
            <img src={Fruits} />
          </div>
          <div>
            <a className="text-decoration-none" href="product-sidebar.html">
              Breads
            </a>
          </div>
        </div>
      </div>
      </ScrollReveal>
      
      {/* healthy-section */}
      <ScrollReveal>
      <div className="healthy-section">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="wrapper one">
              <div className="wrapper-info">
                <span className="wrapper-subtitle">Fruits</span>
                <h2 className="fw-bold">
                  Healthy & Goods <br /> Fruits
                </h2>
                <ShopButton text="Shop Now" className="bg-success text-white fw-bold" iconClassName="white-icon" />
              </div>
                <img className="img-fluid" src={ShopFruits}/>
            </div>
          </div>
          {/* druga col */}
          <div className="col-lg-4 col-md-6">
            <div className="wrapper two">
              
                <img className="img-fluid" src={ShopFruits}/>

                <div className="wrapper-info">
                <span className="wrapper-subtitle">Fruits</span>
                <h2 className="fw-bold ">
                  Healthy & Goods <br /> Fruits
                </h2>
                <ShopButton text="Shop Now" className="bg-danger text-white fw-bold" iconClassName="white-icon"/>
              </div>
            </div>
          </div>
          {/* trzecia col */}
          <div className="col-lg-4 col-md-6">
            <div className="wrapper three">
              <div className="wrapper-info">
                <span className="wrapper-subtitle">Fruits</span>
                <h2 className="fw-bold">
                  Healthy & Goods <br /> Fruits
                </h2>
                <ShopButton text="Shop Now" className="violet text-white fw-bold" iconClassName="white-icon"/>
              </div>
                <img className="img-fluid" src={ShopFruits}/>
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>
      
    </div>
  );
};

export default ProductCategorySection;
