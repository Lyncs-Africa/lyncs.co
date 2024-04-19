import React, { useState } from 'react';
import Ratings from "@/components/global/Ratings";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip"
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import TestimonialsMobile from "@/components/core/responsive/TestimonialsMobile";

const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div
        className="hidden md:relative z-20 py-[160px] xl:pt-[100px] xl:pb-[160px] md:grid grid-cols-12 bg-black font-poppins"
      >
        <div className="col-start-2 col-span-3 z-30 flex flex-col justify-center">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] relative">
            Why Tech Companies are integrating Lyncs
          </h2>
          <p className="md:text-black text-[18px] py-5">
            Here's what some of them are saying
          </p>

          <div className="space-y-4 mt-5">
            <div className="relative flex items-center cursor-pointer">
              <div
                onClick={() => swiper.slideTo?.(0)}
                className="relative rounded-lg bg-slate-300 p-4 flex items-center w-full"
              >
                <img
                  className="w-[50px] rounded-full"
                  src={`https://ui-avatars.com/api/?name=Femi Bejide&background=000000&color=eeeeee`}
                  alt=""
                />
                <div className="ml-8">
                  <p className="text-[18px] text-black font-bold">
                    Femi Bejide
                  </p>
                  <p className="text-gray-800">
                    Ceo, Clan Africa
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center ecommerce cursor-pointer">
              <div
                onClick={() => swiper.slideTo?.(1)}
                className="relative rounded-lg bg-slate-300 p-4 flex items-center w-full"
              >
                <img
                  className="w-[50px] rounded-full"
                  src={`https://ui-avatars.com/api/?name=Folu Ijagbulu&background=000000&color=eeeeee`}
                  alt=""
                />
                <div className="ml-8">
                  <p className="text-[18px] text-black font-bold">
                    Folu Ijagbulu
                  </p>
                  <p className="text-gray-800">
                    Ceo, Buy Simply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-6 col-span-6 flex">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 5000,
            }}
            speed={10000}
            onSwiper={(swiper) => setSwiper(swiper)}
            onSlideChange={() => setActiveIndex(swiper.activeIndex)}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="bg-slate-300 rounded-lg md:min-h-[400px]">
              <div className="px-8 py-[70px]">
                <h2 className="text-[2.5rem] font-bold leading-[1.1] relative text-black">
                  Helped in building a global shopping <br /> platform for our customers.
                </h2>
                <div className="my-4">
                  <Ratings value={5} />
                </div>
                <p className="text-[18px] text-gray-800">
                  We had a major issue with showing our customers’ merchants’ products in real time
                  because the products would have been sold and we wouldn’t know because it was really
                  hard to update the status of each item regularly.<br />
                  I contacted the Lyncs CEO, and that problem is now history lol.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-slate-300 rounded-lg md:min-h-[400px]">
              <div className="px-8 py-[70px]">
                <h2 className="text-[2.5rem] font-bold leading-[1.1] relative text-black">
                  Helped BuySimply simplify integration to new marketplaces.
                </h2>
                <div className="my-2">
                  <Ratings value={5} />
                </div>
                <p className="text-[18px] text-gray-800">
                  I was pulling products from multiple marketplaces and it was hard to integrate all
                  the marketplaces from scratch. My developers were finding it hard to keep
                  integrating new marketplaces.<br />
                  I found out about Lyncs from a friend and I was really amazed at how many products I
                  could get by just calling their APIs at no extra cost! Unbelievable!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <TestimonialsMobile />
    </>
  );
};

export default Testimonials;