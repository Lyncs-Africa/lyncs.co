import React, { useRef, useState, useEffect } from "react";
import Ratings from "@/components/global/Ratings";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip"
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

function TestimonialsMobile() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div className="md:hidden pt-[70px] bg-dotted font-poppins bg-right relative bg-contain px-4">
        <h2 className="text-[2.5rem] font-[900] leading-[1.1] relative py-8">
          Why Tech Companies are integrating Lyncs
        </h2>
        <div className="my-8">
          <Swiper
            loop={true}
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
            <SwiperSlide className="bg-slate-300 rounded-lg">
              <div className="px-8 py-[70px]">
                <h2 className="text-[2rem] text-black font-[900] leading-[1.1] relative">
                  Helped in building a global shopping for our customers
                </h2>
                <div className="my-2">
                  <Ratings value={5} />
                </div>
                <p className="text-gray-800">
                  We had a major issue with showing our customers’ merchants’ products in real time
                  because the products would have been sold and we wouldn’t know because it was really
                  hard to update the status of each item regularly. <br />
                  I contacted the Lyncs CEO, and that problem is now history lol.
                </p>
                <div className="relative flex items-center cursor-pointer">
                  <div className="relative rounded-lg py-8 flex items-center w-full">
                    <img
                      className="w-[40px] rounded-full"
                      src={`https://ui-avatars.com/api/?name=Femi Bejide&background=000000&color=eeeeee`}
                      alt=""
                    />
                    <div className="ml-8">
                      <p className="text-black font-bold">
                        Femi Bejide
                      </p>
                      <p className="text-gray-800">
                        Ceo, Clan Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-slate-300 rounded-lg">
              <div className="px-8 py-[70px]">
                <h2 className="text-[2rem] text-black font-[900] leading-[1.1] relative">
                  Helped BuySimply simplify integration to marketplaces
                </h2>
                <div className="my-2">
                  <Ratings value={5} />
                </div>
                <p className="text-gray-800">
                  I was pulling products from multiple marketplaces and it was hard to integrate all the
                  marketplaces from scratch. My developers were finding it hard to keep integrating new
                  marketplaces.<br />
                  Lyncs keep it up!
                </p>
                <div
                  className="relative rounded-lg py-8 flex items-center w-full"
                >
                  <img
                    className="w-[40px] rounded-full"
                    src={`https://ui-avatars.com/api/?name=Folu Ijagbulu&background=000000&color=eeeeee`}
                    alt=""
                  />
                  <div className="ml-8">
                    <p className="text-black font-bold">
                      Folu Ijagbulu
                    </p>
                    <p className="text-gray-800">
                      Ceo, Buy Simply
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default TestimonialsMobile;
