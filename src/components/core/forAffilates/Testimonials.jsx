import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="relative w-full overflow-hidden font-satoshiMedium bg-[#F1F1F8] -mt-16">
      <div className="mx-auto md:block py-[160px] md:pt-[200px] md:pb-[70px] pb-0 relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12 relative text-center">
            <div className="absolute w-full">
              <div
                className="container md:w-[70%] w-[80%] h-[350px] mx-auto bg-white p-6 rounded-lg shadow-lg relative">
                <FaQuoteLeft
                  className="absolute md:text-[7rem] text-[2rem] top-10 md:left-[7rem] text-black opacity-10"/>
                <h2
                  className="pt-[50px] text-black leading-[1] text-center text-[2.5rem] md:text-[5rem] font-bold"
                >
                  Trusted By Affiliates <br className="hidden md:block"/>Everywhere
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
                           src="https://ui-avatars.com/api/?name=Nsikan&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Nsikan
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        I used to just help friends and family book flights for free, now I actually make money from it
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
                           src="https://ui-avatars.com/api/?name=Kikelomo&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Kikelomo
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        The discounts are solid, and being able to put my own logo on tickets makes me feel like a legit
                        travel agent.
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
                           src="https://ui-avatars.com/api/?name=Ebuka&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Ebuka
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        One thing I appreciate is the refund policy. Customers always ask, ‘What if I need to cancel?’
                        and now I have an actual answer that gives them peace of mind.
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
                           src="https://ui-avatars.com/api/?name=Chimdi&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Chimdi
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        This started as a side hustle, but now I’m making real money from it. The best part? I can do
                        everything from my phone. No stress, just extra income.
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
                           src="https://ui-avatars.com/api/?name=Sochi Oke&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Kate
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        One of my customers was so happy when she realized she could pay for her flight gradually. She even referred her friends, and now they all book through me
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
                           src="https://ui-avatars.com/api/?name=Mustapha&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Mustapha
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        This platform has given me the opportunity to grow my side hustle into a full-fledged business. The discounted rates give me a solid profit margin, and the support team is always there to help me out
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
                           src="https://ui-avatars.com/api/?name=Kazeem&background=000000&color=eeeeee"/>
                      <p className="text-2xl font-bold text-black mt-2">
                        Kazeem
                      </p>
                      <p className="text-[16px] text-gray-500 text-left my-10">
                        I used to lose a lot of potential customers because they couldn’t afford full payments at once. Now, I tell them about the installment option, and they’re always excited to book
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
