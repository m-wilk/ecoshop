import "./hero-section.scss";
import { ReactComponent as DropDownIcon } from "../../assets/img/drop-down-icon.svg";
import Hero from "../../assets/img/hero-img-1.png";
import Hero2 from "../../assets/img/hero-img-2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper/modules";
import 'swiper/css/effect-fade';

const data = [
  { id: 0, title: "There's you can Buy your all of Grocery Products." ,
 img: Hero},
  { id: 1, title: "We Provide Fresh and Organic Fruits To Your Door." ,
img: Hero2},
];

const HeroSection = () => {
  return (
    <div className=" hero-section">
      <div className="container px-5 ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className=" d-flex  justify-content-center align-items-center">
                <div className="wrapper-info">
                  <p className="wrapper-subtitle">Fresh Grocery</p>
                  <h1 className="fw-bold">{slide.title}</h1>
                  <a className="text-decoration-none shop-btn my-5" href="#">
                    <span className="me-2">Shop Now</span>
                    <DropDownIcon />
                  </a>
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
      </div>
    </div>
  );
};

export default HeroSection;
