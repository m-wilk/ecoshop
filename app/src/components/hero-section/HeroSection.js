import "./hero-section.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import HeroService from "../hero-service/HeroService";
import { ReactComponent as DropDownIcon } from "../../assets/img/drop-down-icon.svg";
import Hero from "../../assets/img/hero-img-1.png";
import Hero2 from "../../assets/img/hero-img-2.png";
import Hero3 from "../../assets/img/hero-img-3_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import ShopButton from "../shop-button/ShopButton";

const HeroSection = () => {
  const [slidetItems, setSliderItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8100/api/v1/common/sliders/")
      .then((response) => {
        setSliderItems(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className=" hero-section">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          fadeEffect={{
            crossFade: true, // enables slides to cross fade
          }}
        >
          {slidetItems.map((slidetItem) => {
            return (
              <SwiperSlide key={slidetItem.id}>
                <div className=" d-flex  justify-content-center align-items-center">
                  <div className="wrapper-info">
                    <p className="wrapper-subtitle">{slidetItem.headline}</p>
                    <h1 className="fw-bold mb-4">{slidetItem.title}</h1>
                    <ShopButton text="Shop Now" />
                    <div>
                      <span className="pagination-dotted active"></span>
                      <span className="pagination-dotted"></span>
                      <span className="pagination-dotted"></span>
                    </div>
                  </div>
                  <div className="wrapper-img">
                    <img src={slidetItem.img}/>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <HeroService />
      </div>
    </div>
  );
};

export default HeroSection;
