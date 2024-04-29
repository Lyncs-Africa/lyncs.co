import React from 'react';
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination} from "swiper/modules";


const MultiSecton = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div id="for">
      <div className="md:hidden block relative">
        <div className="absolute top-10 z-10 top-4 left-0 w-full gap-4 pagination-bullet flex items-center justify-center my-5"></div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          speed={1000}
          spaceBetween={0}
          modules={[Pagination]}
          pagination={{
            el: '.pagination-bullet', // Specify the container element for pagination bullets
            clickable: true, // Make pagination bullets clickable
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>'; // Custom bullet rendering
            }
          }}
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
      <div className="hidden md:grid xl:grid-cols-3 md:grid-cols-2 min-h-screen bg-slate-900">
        <div className="card p-6 flex flex-col justify-center gap-5 relative overflow-hidden group">
            <div className="inner-background bg-individuals bg-cover bg-center absolute inset-0"></div>
            <div>
              <h2
                className="text-white font-satoshiBold text-[4rem] md:text-[5rem] leading-[1.1] font-semibold relative">
                For
              </h2>
              <h2
                className="text-white font-satoshiBold text-[4rem] md:text-[5rem] leading-[1.1] font-semibold relative">
                Individuals
              </h2>
            </div>
          <Link href="/individuals">
            <button
              className="opacity-70 group-hover:opacity-100 relative cursor-pointer border text-[17px] text-white text-center py-3 px-8 rounded border ease transition-all border-white bg-transparent">
              Get started
            </button>
          </Link>
        </div>
        <div className="card p-6 flex flex-col justify-center gap-5 relative overflow-hidden bg-slate-950 group">
            <div
              className="opacity-70 inner-background bg-businesses bg-cover bg-center absolute inset-0 ease-in-out"></div>
           <div>
             <h2
               className="text-white font-satoshiBold text-[4rem] md:text-[5rem] leading-[1.1] font-semibold relative">
               For
             </h2>
             <h2
               className="text-white font-satoshiBold text-[4rem] md:text-[5rem] leading-[1.1] font-semibold relative">
               Businesses
             </h2>
           </div>
          <Link href="/businesses">
            <button
              className="opacity-70 group-hover:opacity-100 relative cursor-pointer border text-[17px] text-white text-center py-3 px-8 rounded border ease transition-all border-white bg-transparent">
              Get started
            </button>
          </Link>
        </div>
        <div className="card p-6 flex flex-col justify-center gap-5 relative overflow-hidden group">
          <div className="inner-background bg-affiliates bg-cover bg-top absolute inset-0 ease-in-out"></div>
          <div>
            <h2
              className="text-white font-satoshiBold text-[4rem] md:text-[5rem] leading-[1.1] font-semibold relative">
              For
            </h2>
            <h2
              className="text-white font-satoshiBold text-[4rem] md:text-[5rem] leading-[1.1] font-semibold relative">
              Affiliates
            </h2>
          </div>
          <Link href="/affilates">
            <button
              className="opacity-70 group-hover:opacity-100 relative cursor-pointer border text-[17px] text-white text-center py-3 px-8 rounded border ease transition-all border-white bg-transparent">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default MultiSecton;
