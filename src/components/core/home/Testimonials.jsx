import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="relative w-full overflow-hidden font-satoshiMedium bg-[#F1F1F8]">
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
      <div className="container mx-auto md:block pt-[160px] xl:pb-[18rem] pb-0 relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12 relative text-center">
            <div className="absolute w-full">
              <div className="md:w-[70%] w-[80%] h-[350px] mx-auto bg-white p-6 rounded-lg shadow-lg relative">
                <FaQuoteLeft className="absolute md:text-[7rem] text-[2rem] top-10 md:left-[7rem] text-black opacity-10"/>
                <h2
                  className="pt-[50px] text-black leading-[1] text-center text-[2.5rem] md:text-[5rem] font-bold"
                >
                  See what people are <br className="hidden md:block"/> saying about lyncs
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
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                  },
                  1100: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                  },
                }}
                className="mySwiper h-full"
              >
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[250px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="img-16" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Dolapo Olanreqaju&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Dolapo Olanrewaju
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        They helped me find flexible options for my trip, even made sure I could use
                        multiple airlines to book. I’ll definitely be using this service again!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[250px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="img-17" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Richard Obasi&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Richard Obasi
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        Great service and affordable prices! I managed to find the perfect bus for my last-minute trip
                        with no hassle. Highly recommend
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[250px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="img-17" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Abdul Omar&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Abdul Omar
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        The filtering options were a lifesaver! I could easily compare buses based on amenities and
                        departure times. My go-to for travel now!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[250px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="img-17" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Tomi Bakare&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Tomi Bakare
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        The entire journey from browsing deals to booking my seat was flawless. Plus, the support team
                        was quick to answer my questions.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[250px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="img-17" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Tara Oke&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Tara Oke
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        This site made it so easy to find flights that fits my budget and schedule. The entire process
                        was smooth from booking to boarding!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[250px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="img-17" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Kachi Beauty&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Kachi Beauty
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        I was impressed by the variety of choices available! I could pick the flight with my preference,
                        and everything was just as expected. Great experience!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[250px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="img-17" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Emeka Chukwudum&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Emeka Chukwudum
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        I got an incredible rate on my flight ticket, and the flow was so smooth. Their
                        customer service even followed up to make sure everything went well
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[250px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="img-17" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Priscilla Onu&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Ogechi Onu
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        I loved the user-friendly site and clear options. Customer support was amazing, making sure I
                        had everything I needed for a smooth trip!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <div className="bg-white min-h-[250px] w-full rounded-lg my-[5rem] p-6 shadow-lg">
                    <div className="relative z-50">
                      <FaQuoteLeft className="absolute text-5xl top-[6rem] left-0 text-black opacity-10 z-[-1]"/>
                      <FaQuoteRight className="absolute text-5xl bottom-[-3rem] right-0 text-black opacity-10 z-[-1]"/>
                      <img alt="img-17" className="h-[50px] w-[50px] rounded-full object-cover mx-auto"
                           src="https://ui-avatars.com/api/?name=Richard Obasi&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Femi Salami
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        Effortless booking with unbeatable rates! I booked a bus for a cross-country trip, and it was
                        fast, simple, and stress-free
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
