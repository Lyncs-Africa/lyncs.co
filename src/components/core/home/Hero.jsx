import React from 'react';
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination} from "swiper/modules";


const Hero = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div className="md:hidden block">
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          speed={1000}
          spaceBetween={0}
          modules={[Pagination]}
          pagination={true}
          slidesPerView={1}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="min-h-screen relative font-satoshi">
              <div className="inner-background bg-individuals bg-cover bg-[75%] absolute inset-0"></div>
              <div className="min-h-[60%] absolute w-[75%] bottom-0 right-0 p-6 rounded-tl-lg">
                <div className="bg-black opacity-40 rounded-tl-lg inset-0 absolute"></div>
                <div className="relative">
                  <h2
                    className="text-white font-satoshiBold text-[3rem] md:text-[6rem] leading-[1.1] font-semibold relative">
                    For Individuals
                  </h2>
                  <p className="text-[17px] py-5 text-slate-300 mb-4 md:px-4">
                    Book flights, shop online, access cleaning services and other amazing services all in one place
                  </p>
                  <Link href="/individuals">
                    <button
                      className="cursor-pointer bg-white border text-[17px] text-black text-center py-3 px-8 rounded border ease transition-all hover:border-white hover:bg-transparent hover:text-white">
                      Get started
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-screen relative font-satoshi">
              <div className="inner-background bg-businesses bg-cover bg-center absolute inset-0"></div>
              <div className="min-h-[60%] absolute w-[75%] bottom-0 right-0 p-6 rounded-tl-lg">
                <div className="bg-black opacity-40 rounded-tl-lg inset-0 absolute"></div>
                <div className="relative">
                  <h2
                    className="text-white font-satoshiBold text-[3rem] md:text-[6rem] leading-[1.1] font-semibold relative">
                    For Businesses
                  </h2>
                  <p className="text-[17px] py-5 text-slate-300 mb-4 md:px-4">
                    Add commercial services to your mobile or web app in minutes
                  </p>
                  <Link href="/businesses">
                    <button
                      className="cursor-pointer bg-white border text-[17px] text-black text-center py-3 px-8 rounded border ease transition-all hover:border-white hover:bg-transparent hover:text-white">
                      Get started
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-screen relative font-satoshi">
              <div className="inner-background bg-affiliates bg-cover bg-[60%] absolute inset-0"></div>
              <div className="min-h-[60%] absolute w-[75%] bottom-0 right-0 p-6 rounded-tl-lg">
                <div className="bg-black opacity-40 rounded-tl-lg inset-0 absolute"></div>
                <div className="relative">
                  <h2
                    className="text-white font-satoshiBold text-[3rem] md:text-[6rem] leading-[1.1] font-semibold relative">
                    For Affiliates
                  </h2>
                  <p className="text-[17px] py-5 text-slate-300 mb-4 md:px-4">
                    Make some extra cash everyday by signing up as an affiliate
                  </p>
                  <Link href="/affilates">
                    <button
                      className="cursor-pointer bg-white border text-[17px] text-black text-center py-3 px-8 rounded border ease transition-all hover:border-white hover:bg-transparent hover:text-white">
                      Get started
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden md:grid grid-cols-3 min-h-screen">
        <div className="card p-6 flex items-center relative overflow-hidden">
          <Link href="/individuals">
            <div className="inner-background bg-individuals bg-cover bg-center absolute inset-0"></div>
            <h2
              className="text-white font-satoshiBold text-[4rem] md:text-[6rem] leading-[1.1] font-semibold relative">
              For
            </h2>
            <h2
              className="text-white font-satoshiBold text-[4rem] md:text-[6rem] leading-[1.1] font-semibold relative">
              Individuals
            </h2>
          </Link>
        </div>
        <div className="card p-6 flex items-center relative overflow-hidden bg-slate-950">
          <Link href="/businesses">
            <div
              className="opacity-70 inner-background bg-businesses bg-cover bg-center absolute inset-0 ease-in-out"></div>
            <h2
              className="text-white font-satoshiBold text-[4rem] md:text-[6rem] leading-[1.1] font-semibold relative">
              For
            </h2>
            <h2
              className="text-white font-satoshiBold text-[4rem] md:text-[6rem] leading-[1.1] font-semibold relative">
              Businesses
            </h2>
          </Link>
        </div>
        <div className="card p-6 flex items-center relative overflow-hidden">
          <Link href="/affilates">
            <div className="inner-background bg-affiliates bg-cover bg-center absolute inset-0 ease-in-out"></div>
            <h2
              className="text-white font-satoshiBold text-[4rem] md:text-[6rem] leading-[1.1] font-semibold relative">
              For
            </h2>
            <h2
              className="text-white font-satoshiBold text-[4rem] md:text-[6rem] leading-[1.1] font-semibold relative">
              Affiliates
            </h2>
          </Link>
        </div>
      </div>
    </>

  );
};

export default Hero;
