import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import {Autoplay, Pagination} from "swiper/modules";

const Shop = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="w-[240px] md:w-[300px] md:h-[200px] rounded-lg bg-[#FBFBFB] shadow-lg p-6">
      <p className="text-gray-800 text-2xl font-bold">Shop</p>
      <div className="my-2 flex flex-col gap-2">
        <div className="h-[20px] w-[150px] bg-gray-200 rounded"></div>
        <div className="h-[20px] w-[100px] bg-gray-200 rounded"></div>
      </div>
      <div className="my-4 h-[60px] hidden md:block">
        <Swiper
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={10000}
          modules={[Pagination]}
          slidesPerView={3}
          spaceBetween={40}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            470: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            760: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1100: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
          }}
          className="mySwiper h-full"
        >
          <SwiperSlide className="h-full">
            <img className="rounded-lg" src="/images/products/1.png"/>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img className="rounded-lg" src="/images/products/4.png"/>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img className="rounded-lg" src="/images/products/3.png"/>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img className="rounded-lg" src="/images/products/2.png"/>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img className="rounded-lg" src="/images/products/5.png"/>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img className="rounded-lg" src="/images/products/6.png"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Shop;
