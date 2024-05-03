import "./hero-section.scss";
import HeroService from "../hero-service/HeroService";
import { ReactComponent as DropDownIcon } from "../../assets/img/drop-down-icon.svg";
import Hero from "../../assets/img/hero-img-1.png";
import Hero2 from "../../assets/img/hero-img-2.png";
import Hero3 from "../../assets/img/hero-img-3_1.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper/modules";
import ShopButton from "../shop-button/ShopButton";

const data = [
  {
    id: 0, title: "There's you can Buy your all of Grocery Products.",
    img: Hero
  },
  {
    id: 1, title: "We Provide Fresh and Organic Fruits To Your Door.",
    img: Hero2
  },
  {
    id: 1, title: "You Can Buy All the Grocery Items Hasslefree.",
    img: Hero3
  }
];

const HeroSection = () => {
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
            crossFade: true // enables slides to cross fade
          }}
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className=" d-flex  justify-content-center align-items-center">
                <div className="wrapper-info">
                  <p className="wrapper-subtitle">Fresh Grocery</p>
                  <h1 className="fw-bold mb-4">{slide.title}</h1>
                  <ShopButton  text="Shop Now"/> 
                  <div>
                    <span className="pagination-dotted active"></span>
                    <span className="pagination-dotted"></span>
                    <span className="pagination-dotted"></span>
                  </div>
                </div>
                <div className="wrapper-img">
                  <img src={slide.img} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
            <HeroService />
      </div>
    </div>
  );
};

export default HeroSection;
