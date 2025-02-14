import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="relative w-full overflow-hidden font-satoshiMedium bg-[#F1F1F8] -mt-16">
      <div className="xl:block hidden absolute bottom-[-10rem] right-0 w-full z-30">
        <svg fill="#000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 265.34">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path className="cls-1"
                    d="M.17,10.74C43.4,20,87.41,29.54,125.87,51.36c49.88,28.29,86.24,81.56,141.49,99.85a115.56,115.56,0,0,0,71,.33c20.72-6.65,39.05-19,57.45-30.63,34.42-21.75,71.93-40,112.69-45.4,83.85-11.09,164.77,46.12,248.13,17.9,44.46-15,78-52.21,120.65-71.76A236.83,236.83,0,0,1,1000,1.25l-1.71,264.09H.2C.2,180.48-.23,95.6.17,10.74Z"/>
            </g>
          </g>
        </svg>
      </div>
      <div className="mx-auto md:block pt-[160px] xl:pb-[18rem] pb-0 relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12 relative text-center">
            <div className="absolute w-full">
              <div className="container md:w-[70%] w-[80%] h-[350px] mx-auto bg-white p-6 rounded-lg shadow-lg relative">
                <FaQuoteLeft
                  className="absolute md:text-[7rem] text-[2rem] top-10 md:left-[7rem] text-black opacity-10"/>
                <h2
                  className="pt-[50px] text-black leading-[1] text-center text-[2.5rem] md:text-[5rem] font-bold"
                >
                  See why your mates <br className="hidden md:block"/>are travelling
                </h2>
              </div>
            </div>
            <div className="my-[2rem] mt-[13rem]">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 5000,
                }}
                speed={1000}
                modules={[Pagination, Autoplay]}
                slidesPerView={4.5}
                spaceBetween={60}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  470: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  760: {
                    slidesPerView: 3.2,
                    spaceBetween: 20,
                  },
                  1100: {
                    slidesPerView: 3.2,
                    spaceBetween: 20,
                  },
                }}
                className="mySwiper h-full"
              >
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[280px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="Lyncs testimonial" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Dolapo Olanreqaju&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Dolapo
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        Went to avoid family drama... Turns out, it’s much easier to escape in a different time zone
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[280px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="Lyncs testimonial" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Richard Obasi&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Rosemary
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        Because life’s too short, and my vacation days were going to waste. I needed to put them to good
                        use!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[280px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="Lyncs testimonial" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Abdul Omar&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Abdul
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        I traveled to study abroad and avoid another awkward encounter with my ex.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[280px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="Lyncs testimonial" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Tomi Bakare&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Tolani
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        Took a trip to visit my daddy, sorry guardian. Ended up staying for the wifi and escaping all
                        the drama in Lagos.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[280px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="Lyncs testimonial" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Tara Oke&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Sochi
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        Because studying abroad was cheaper than therapy. Plus, who needs to explain your life when
                        you're in a completely different time zone?
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[280px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="Lyncs testimonial" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Kachi Beauty&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Beauty
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        I traveled because my glucose guardian said he was paying for everything... So why not use it to
                        see
                        the world, right?
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[280px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="Lyncs testimonial" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Emeka Chukwudum&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Chelsea
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        I traveled because my best friend got married to my fiancee and I found out on the wedding day
                        while scrolling through instagram
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[280px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="Lyncs testimonial" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Priscilla Onu&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Ogechi
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        Traveling was my way of celebrating my achievements and rewarding myself with some new memories
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[280px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="Lyncs testimonial" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Richard Obasi&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Femi
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        Traveling was my way of recharging after a long period of work. Nothing beats a getaway to bring
                        back that spark
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
