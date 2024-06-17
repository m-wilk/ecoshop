import "./product-details.scss";
import HeaderTopSection from "../../components/header-top-section/HeaderTopSection";
import HeaderCenterSection from "../../components/header-center-section/HeaderCenterSection";
import HeaderBottomSection from "../../components/header-bottom-section/HeaderBottomSection";
import FooterSection from "../../components/footer-section/FooterSection";
import BlogBreadcrum from "../../components/blog-breadcrum/BlogBreadcrum";
import { useState, useEffect } from "react";
import axios from "axios";

import { ReactComponent as RitingsIcon } from "../../assets/img/ritings.svg";
import { ReactComponent as Arrowdown } from "../../assets/img/arrowdown.svg";
import { ReactComponent as WishListIcon } from "../../assets/img/wishlist-icon.svg";
import { ReactComponent as AddIcon } from "../../assets/img/addicon.svg";
import { ReactComponent as ReportIcon } from "../../assets/img/reporticon.svg";
import { ReactComponent as Facebook } from "../../assets/img/facebook.svg";
import { ReactComponent as Pinterest } from "../../assets/img/pinterest.svg";
import { ReactComponent as Twitter } from "../../assets/img/twitter.svg";
import { ReactComponent as Ranking } from "../../assets/img/rankingicon.svg";
import Author from "../../assets/img/aurthor-img-1.png";
import TitleSection from "../../components/title-section/TitleSection";
import ProductFreshItem from "../../components/product-fresh-item/ProductFreshItem";
import ScrollReveal from "../../components/scroll-reveal/ScrollReveal";
import ImageGallery from "react-image-gallery";


const ProductDetails = () => {
  const [slidetItems, setSliderItems] = useState([]);
  const tranformedSliderItems = slidetItems.map((slideritem) => {
    return {
      original: slideritem.img,
      thumbnail: slideritem.img
    }
  })

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [visible, setVisible] = useState(false);
  const popupClassName = visible ? "" : "visually-hidden";

  const [selectedLi, setSelectedLi] = useState("");
  const handleClick = (event) => {
    const clickedLi = event.target.textContent;
    setSelectedLi(clickedLi);
  };

  const [quantity, setQuantity] = useState(1);

  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    axios
      .get("http://localhost:8100/api/v1/common/sliders/")
      .then((response) => {
        setSliderItems(response.data);
        console.log(response.data);
      });
  }, []);



  return (
    <>
      <HeaderTopSection />
      <HeaderCenterSection />
      <HeaderBottomSection />
      <div className="product-details-section">
        <div className="container">
          <BlogBreadcrum />
          <div className="row g-5">
            {/* pierwsza kolumna */}
            <div className="col-md-6">
              <div className="position-relative swiper-backround mt-5">
                <h5 className="d-flex justify-content-center align-items-center product-discount fw-bold">
                  -50%
                </h5>
             
                <ImageGallery items={tranformedSliderItems} showNav={false} showFullscreenButton={false} showPlayButton={false}/>

              </div>
            </div>
            {/* druga kolumna */}
            <div className="col-md-6">
              <div className="mt-5">
                <span className="text-uppercase">Vegrtable</span>
                <h3 className="fw-bold mt-2">
                  Eggplant fruit Leucinodes orbonalis
                </h3>
                <div className="d-flex justify-content-start align-items-center gap-2 mt-2">
                  <RitingsIcon />
                  <span>6 Reviews</span>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 mt-2">
                  <span className="text-secondary fw-bold">$9.99</span>
                  <span className="text-danger fw-bold text-decoration-line-through">
                    $6.99
                  </span>
                </div>
                <p className="mt-3">
                  It is a long established fact that a reader will be distracted
                  by the readable there content of a page.
                </p>
                <div className="product-available mt-3 fw-semibold">
                  <span>Availabillity:</span> &nbsp;
                  <span className="text-success">132 Products Available</span>
                </div>
                <div className="position-relative">
                  <p className="text-success mt-3">Weight</p>
                  {/* button */}
                  <div
                    onClick={() => {
                      setVisible(!visible);
                    }}
                    className="d-flex justify-content-between align-items-center select-weight"
                  >
                    <span className="text-secondary">
                      {selectedLi ? selectedLi : "Select Weight"}
                    </span>
                    <span>
                      <Arrowdown
                        className={`icon-size transition-all  ${
                          visible ? "rotate180" : ""
                        }`}
                      />
                    </span>
                  </div>
                  {/* ul hidden */}
                  {visible ? (
                    <ul
                      onClick={() => {
                        setVisible(!visible);
                      }}
                      className="list-unstyled select-weight-list-hidden w-100"
                    >
                      <li
                        onClick={handleClick}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <span>500gram</span>
                        <span>$5.00</span>
                      </li>
                      <li
                        onClick={handleClick}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <span>1 Kg</span>
                        <span>$9.00</span>
                      </li>
                      <li
                        onClick={handleClick}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <span>2 Kg</span>
                        <span>$18.00</span>
                      </li>
                      <li
                        onClick={handleClick}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <span>3 Kg</span>
                        <span>$29.00</span>
                      </li>
                      <li
                        onClick={handleClick}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <span>5 Kg</span>
                        <span>$35.00</span>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div className="d-flex justify-content-between align-items-center gap-4 mt-5">
                  <div className="d-flex align-items-center gap-3">
                    <div className="d-flex justify-content-center align-items-center gap-2 p-3 quantity ">
                      <button
                        onClick={() => {
                          setQuantity(quantity > 1 ? quantity - 1 : quantity);
                        }}
                        className="btn btn-link text-decoration-none p-0"
                      >
                        -
                      </button>
                      <input
                        className="input-reset text-center"
                        value={quantity}
                      />
                      <button
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                        className="btn btn-link text-decoration-none p-0"
                      >
                        +
                      </button>
                    </div>
                    <div className="wish-list-icon p-3">
                      <WishListIcon />
                    </div>
                  </div>

                  <a
                    className="d-flex justify-content-center align-items-center  shop-btn-addtocard text-decoration-none fw-bold p-3 w-100"
                    href="#"
                  >
                    <AddIcon className="addicon-size icon-hover" />
                    <span className="ms-2">Add to Cart</span>
                  </a>
                </div>
                <div className="product-details mt-4">
                  <p className="text-secondary">
                    Category : <span className="text-success">Kitchen</span>
                  </p>
                  <p className="text-secondary">
                    Tags : <span className="text-success">Beer, Foamer</span>
                  </p>
                  <p className="text-secondary">
                    SKU : <span className="text-success">KE-91039</span>
                  </p>
                </div>

                <a href="#" className="text-decoration-none mb-3">
                  <ReportIcon />
                  <span className="text-danger fw-semibold ms-2">
                    Report This Item
                  </span>
                </a>
                <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
                  <p className="m-0 text-secondary">Share This:</p>
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <span>
                      <a className="text-decoration-none" href="#">
                        <Facebook />
                      </a>
                    </span>
                    <span>
                      <a className="text-decoration-none" href="#">
                        <Pinterest />
                      </a>
                    </span>
                    <span>
                      <a className="text-decoration-none" href="#">
                        <Twitter />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-description-section">
        <div className="container">
          <nav className="nav-tabs">
            <button
              onClick={() => {
                setActiveTab("description");
              }}
              className={`btn btn-link text-decoration-none text-success fw-bold ${
                activeTab === "description" ? "underline-tab text-black" : ""
              }`}
            >
              Description
            </button>
            <button
              onClick={() => {
                setActiveTab("reviews");
              }}
              className={`btn btn-link text-decoration-none text-success fw-bold ${
                activeTab === "reviews" ? "underline-tab text-black" : ""
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => {
                setActiveTab("sellerinfo");
              }}
              className={`btn btn-link text-decoration-none text-success fw-bold ${
                activeTab === "sellerinfo" ? "underline-tab text-black" : ""
              }`}
            >
              Seller Info
            </button>
          </nav>

          <div className="tab-content-section">
            <div
              className={`tab-description ${
                activeTab === "description" ? "d-block" : "d-none"
              }`}
            >
              <div className="mb-5">
                <h5>Introduction</h5>
                <p className="text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries but
                  also the on leap into electronic typesetting, remaining
                  essentially unchanged. It wasn’t popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, andei more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum to make
                  a type specimen book.
                </p>
              </div>
              <div className="mb-5">
                <h5>Features :</h5>
                <ul className="text-secondary">
                  <li className="mt-2">slim body with metal cover</li>
                  <li className="mt-2">
                    latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
                  </li>
                  <li className="mt-2">8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                  <li className="mt-2">
                    NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit
                    keyboard, touchpad with gesture support
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`tab-reviews mt-3 mb-3 ${
                activeTab === "reviews" ? "d-block" : "d-none"
              }`}
            >
              <h5>Reviews</h5>
              <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                <div className="d-flex">
                  <img className="img-author-size me-3" src={Author} />
                  <div>
                    <h5 className="mb-0">Sajjad Hossian</h5>
                    <p className="text-secondary mb-0">London, UK</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <Ranking />
                  <p className="mb-0">(5.0)</p>
                </div>
              </div>
              <p className="mt-4 mb-5 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the redi 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries but also the on leap into
                electronic typesetting, remaining
              </p>
            </div>
            <div
              className={`tab-sellerinfo ${
                activeTab === "sellerinfo" ? "d-block" : "d-none"
              }`}
            ></div>
          </div>
        </div>
        <div className="weekly-sale-product-section">
              <div className="container">
              <TitleSection headerClassName="fw-bold" title="Best Sell in this Week" />
              <ScrollReveal>
              <div className="row g-5">
                <div className="col-lg-3 col-sm-6">
                  <ProductFreshItem title="Fresh Red Tomatos"/>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <ProductFreshItem title="Fresh Red Tomatos"/>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <ProductFreshItem title="Fresh Red Tomatos"/>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <ProductFreshItem title="Fresh Red Tomatos"/>
                </div>
              </div>
              </ScrollReveal>
       
              </div>
            </div>
      </div>

      <FooterSection />
    </>
  );
};

export default ProductDetails;
