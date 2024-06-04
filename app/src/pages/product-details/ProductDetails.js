import "./product-details.scss";
import HeaderTopSection from "../../components/header-top-section/HeaderTopSection";
import HeaderCenterSection from "../../components/header-center-section/HeaderCenterSection";
import HeaderBottomSection from "../../components/header-bottom-section/HeaderBottomSection";
import FooterSection from "../../components/footer-section/FooterSection";
import BlogBreadcrum from "../../components/blog-breadcrum/BlogBreadcrum";
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { ReactComponent as RitingsIcon } from "../../assets/img/ritings.svg";

const ProductDetails = () => {
  const [slidetItems, setSliderItems] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                >
                  {slidetItems.map((slidetItem) => {
                    return (
                      <SwiperSlide key={slidetItem.id}>
                        <img className="img-fluid" src={slidetItem.img} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
                <div className="thumber-swiper-wrapper-img">
                  <img />
                </div>
                <div className="thumber-swiper-wrapper-img">
                  <img />
                </div>
              </div>
            </div>
            {/* druga kolumna */}
            <div className="col-md-6">
              <div className="mt-5">
                <span className="text-uppercase">Vegrtable</span>
                <h3 className="fw-bold mt-2">Eggplant fruit Leucinodes orbonalis</h3>
                <div className="d-flex justify-content-start align-items-center gap-2 mt-2">
                <RitingsIcon />
                <span>6 Reviews</span>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 mt-2">
                  <span className="text-secondary fw-bold">$9.99</span>
                  <span className="text-danger fw-bold text-decoration-line-through">$6.99</span>
                </div>
                <p className="mt-3">It is a long established fact that a reader will be distracted by the readable there content of a page.</p>
                <div className="product-available mt-3 fw-semibold">
                  <span>Availabillity:</span> &nbsp;
                  <span className="text-success">132 Products Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
