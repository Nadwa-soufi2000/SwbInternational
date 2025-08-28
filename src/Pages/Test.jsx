import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bostaniBg3 from '../assets/bostaniBg3.png'
import love from '../assets/love.png'
import boxs from '../assets/boxs.png'
import sweet from '../assets/sweet.png'
import sweet2 from '../assets/sweet2.png'
import sweet3 from '../assets/sweet3.png'

export default function ImageSwiper() {
    const images = [bostaniBg3 , love , boxs , sweet , sweet2 , sweet3]
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="custom-swiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src}  className="slide-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}