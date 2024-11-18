import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import {Autoplay, Pagination} from "swiper/modules";
import {GiCommercialAirplane} from "react-icons/gi";

const Shop = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="w-full md:w-[300px] md:h-[200px] rounded-lg bg-[#FBFBFB] shadow-lg p-6 relative">
      <div className="animate-bounceTwo absolute top-3 -right-5 h-[50px] w-[50px] rounded-full bg-teal-900 shadow flex items-center justify-center">
        <GiCommercialAirplane className="text-white" size="20px"/>
      </div>
      <p className="text-gray-800 text-2xl font-bold">Tour the world</p>
      <div className="my-2 flex flex-col gap-2">
        <div className="h-[15px] w-[150px] bg-gray-200 rounded"></div>
        <div className="h-[15px] w-[100px] bg-gray-200 rounded"></div>
      </div>
      <div className="my-4 w-[160px] md:w-full">
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
              slidesPerView: 1.8,
              spaceBetween: 10,
            },
            470: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            760: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper h-full"
        >
          <SwiperSlide className="h-full">
            <img className="rounded-full w-[60px] h-[60px] mx-auto" src="/images/locations/lagos.jpg"/>
            <p className="text-small text-black text-center">Lagos</p>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img className="rounded-full w-[60px] h-[60px] mx-auto" src="/images/locations/paris.jpg"/>
            <p className="text-small text-black text-center">Paris</p>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img className="rounded-full w-[60px] h-[60px] mx-auto" src="/images/locations/london.jpg"/>
            <p className="text-small text-black text-center">London</p>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img className="rounded-full w-[60px] h-[60px] mx-auto" src="/images/locations/johannesburg.jpg"/>
            <p className="text-small text-black text-center">Johannesburg</p>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img className="rounded-full w-[60px] h-[60px] mx-auto" src="/images/locations/dubai.jpg"/>
            <p className="text-small text-black text-center">Dubai</p>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img className="rounded-full w-[60px] h-[60px] mx-auto" src="/images/locations/zanzibar.jpg"/>
            <p className="text-small text-black text-center">Zanzibar</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Shop;
