import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function ImageSwiper(props) {
  return (
   <div className="w-[98%] flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-start w-full text-[13px] md:text-[18px] font-medium text-[#000000] sm:pl-0 pl-[8px]">
         <p>{props.p1}</p>
         <p>{props.p2}</p>
        {props.p3 && <p>{props.p3}</p>}
      </div>
       <Swiper
          modules={[Pagination , Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="custom-swiper"
         >
         {props.images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src}  className="slide-img" />
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}