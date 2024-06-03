import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Controller, FreeMode, Navigation, Thumbs } from "swiper/modules";

// https://stackoverflow.com/questions/73216868/swiper-thumbs-gallery-loop-react-not-working-in-react-js

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const swiperRef = useRef(null);

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => {
          if (swiperRef.current !== null) {
            swiperRef.current = swiper;
          }
        }}
        preloadImages={false}
        controller={{ control: undefined }}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        controller={{ control: undefined }}
        loop={false}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        touchRatio={0.2}
        preloadImages={false}
        lazy
        slideToClickedSlide={true}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs, Controller]}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
