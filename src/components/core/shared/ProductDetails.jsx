import React, {useState} from 'react';
import Ratings from "../../global/Ratings.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";

const ProductDetails = () => {
  const [swiper, setSwiper] = useState(null);
  const [loved, setLoved] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="md:grid md:grid-cols-2 gap-8  font-satoshiMedium flex flex-col py-4">
      <div>
        <Swiper
          spaceBetween={30}
          speed={1000}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={() => setActiveIndex(swiper.activeIndex)}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img alt="Lyncs img" src="/images/2.jpg" className="rounded-lg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="Lyncs img" src="/images/3.jpg" className="rounded-lg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="Lyncs img" src="/images/4.jpg" className="rounded-lg"/>
          </SwiperSlide>
        </Swiper>
        <div className="grid grid-cols-3 gap-4 mt-5 h-[90px]">
          <img alt="Lyncs slider" onClick={() => swiper.slideTo?.(0)} src="/images/2.jpg" className="rounded-lg"/>
          <img alt="Lyncs slider" onClick={() => swiper.slideTo?.(1)} src="/images/3.jpg" className="ounded-lg"/>
          <img alt="Lyncs slider" onClick={() => swiper.slideTo?.(2)} src="/images/4.jpg" className="rounded-lg"/>
        </div>
      </div>
      <div className="">
        <div className="flex items-center mb-4">
          <p>
            <span className={`p-2 rounded-lg bg-blue-500 text-white my-4`}>
              Nebechi Stores
            </span>
          </p>
          <img alt="Lyncs shop icon" className="w-[80px] ml-4" src="/images/jumia.png"/>
        </div>
        <div className="flex">
          <h1 className="text-black text-4xl font-[900]">
            Office Space 3 Seater White Sofa
          </h1>
          <div onClick={() => setLoved(!loved)} className="cursor-pointer">
            <p className={`text-red-500 text-2xl p-2 bg-white rounded-lg ${loved ? 'hidden' : 'block'}`}>
              <i className="fa-regular fa-heart"></i></p>
            <p className={`text-red-600 text-2xl p-2 bg-white rounded-lg ${loved ? 'block' : 'hidden'}`}>
              <i className="fa-solid fa-heart"></i></p>
          </div>
        </div>
        <div className="">
          <p className="my-4">
            <span className={`p-2 rounded-lg bg-green-200 text-green-500`}>
              Delivered
            </span>
          </p>
          <Ratings value={5}/>
        </div>
        <p className="text-black text-2xl my-2 font-bold">
          ₦500,000
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
