import React, {useEffect, useMemo, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore from "swiper";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link"
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination} from "swiper/modules";

import {useInView} from "react-intersection-observer";
import {gsap} from "gsap";
import {easeInOut, motion} from "framer-motion";

function FeaturesWeb() {
  SwiperCore.use([Autoplay]);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const {ref, inView, entry} = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    if (inView) {
      gsap.to(".heading", {opacity: 1, x: 0, duration: 1});
      gsap.to(".swipe-up", {opacity: 1, y: 0, duration: 1});
      gsap.to(".ecommerce", {opacity: 1, x: 0, duration: 1, delay: 0.1});
      gsap.to(".credit-shopping", {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
      });
      gsap.to(".shop", {opacity: 1, x: 0, duration: 0.1, delay: 0.1});
    }
  }, [inView]);

  const btnVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        ease: easeInOut, delay: 0.3
      }
    }
  }, [])

  return (
    <>
      <div
        ref={ref}
        className="hidden md:relative font-satoshiMedium text-black z-20 py-[160px] md:grid grid-cols-12 bg-white"
      >
        <div className="container mx-auto col-span-10 col-start-2 grid grid-cols-12">
          <div className="col-span-4 z-30">
            <h2
              className="text-bold font-satoshiBold leading-[1] md:px-0 pl-2 text-[3.5rem] md:text-[4rem]">
              Explore core products
            </h2>

            <Link href="/services">
              <div
                className="text-lg font-semibold text-slate-800 py-2 mt-4 flex flex-row justify-start items-center gap-2">
                See all products <ArrowForwardIcon fontSize="small"/>
              </div>
            </Link>

            <div className="space-y-6 mt-10">
              <div className="relative flex items-center ecommerce translate-x-[-50px] opacity-0 ">
                <div
                  onClick={() => swiper.slideTo?.(0)}
                  className={`relative w-[13px] h-[13px] rounded-full py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 0
                    ? "before:border-[3px] before:border-blue-500 bg-slate-800"
                    : "bg-slate-500"
                  }`}
                ></div>
                <p
                  className={`ml-[2rem] font-semibold text-[16px] ${activeIndex === 0 ? 'text-slate-800' : 'text-slate-500'}`}>Online
                  Shopping</p>
              </div>
              <div className="relative flex items-center credit-shopping translate-x-[-50px] opacity-0 ">
                <div
                  onClick={() => swiper.slideTo?.(1)}
                  className={`relative w-[13px] h-[13px] rounded-full py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 1
                    ? "before:border-[3px] before:border-blue-500 bg-slate-800"
                    : "bg-slate-500"
                  }`}
                ></div>
                <p
                  className={`ml-[2rem] font-semibold text-[16px] ${activeIndex === 1 ? 'text-slate-800' : 'text-slate-500'}`}>Hotel
                  Booking</p>
              </div>
              <div className="relative flex items-center shop translate-x-[-50px] opacity-0 ">
                <div
                  onClick={() => swiper.slideTo?.(2)}
                  className={`relative w-[13px] h-[13px] rounded-full py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 2
                    ? "before:border-[3px] before:border-blue-500 bg-slate-800"
                    : "bg-slate-500"
                  }`}
                ></div>
                <p
                  className={`ml-[2rem] font-semibold text-[16px] ${activeIndex === 2 ? 'text-slate-800' : 'text-slate-500'}`}>
                  Cab Hailing
                </p>
              </div>
              <div className="relative flex items-center shop translate-x-[-50px] opacity-0 ">
                <div
                  onClick={() => swiper.slideTo?.(3)}
                  className={`relative w-[13px] h-[13px] rounded-full py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 3
                    ? "before:border-[3px] before:border-blue-500 bg-slate-800"
                    : "bg-slate-500"
                  }`}
                ></div>
                <p
                  className={`ml-[2rem] font-semibold text-[16px] ${activeIndex === 3 ? 'text-slate-800' : 'text-slate-500'}`}>
                  Food Ordering
                </p>
              </div>
              <div className="relative flex items-center shop translate-x-[-50px] opacity-0 ">
                <div
                  onClick={() => swiper.slideTo?.(4)}
                  className={`relative w-[13px] h-[13px] rounded-full py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 4
                    ? "before:border-[3px] before:border-blue-500 bg-slate-800"
                    : "bg-slate-500"
                  }`}
                ></div>
                <p
                  className={`ml-[2rem] font-semibold text-[16px] ${activeIndex === 4 ? 'text-slate-800' : 'text-slate-500'}`}>
                  Flight Booking
                </p>
              </div>
              <div className="relative flex items-center shop translate-x-[-50px] opacity-0 ">
                <div
                  onClick={() => swiper.slideTo?.(5)}
                  className={`relative w-[13px] h-[13px] rounded-full py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 5
                    ? "before:border-[3px] before:border-blue-500 bg-slate-800"
                    : "bg-slate-500"
                  }`}
                ></div>
                <p
                  className={`ml-[2rem] font-semibold text-[16px] ${activeIndex === 5 ? 'text-slate-800' : 'text-slate-500'}`}>
                  Stream Share
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-6 col-span-7 swipe-up translate-y-[-50px]">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={5000}
              spaceBetween={30}
              onSwiper={(swiper) => setSwiper(swiper)}
              onSlideChange={() => setActiveIndex(swiper.activeIndex)}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="bg-[#F4F6F8] rounded-2xl min-h-[750px] h-full p-0 shadow-md">
                <div className="px-20 pt-14 relative">
                  <p className="text-[16px] md:text-[17px] text-slate-800 font-medium  leading-[1.1] relative">
                    Online Shopping
                  </p>

                  <h2 className="py-[1.5rem] text-black text-[3rem] font-bold leading-[1]">
                    Speed up your Online E-commerce
                  </h2>

                  <p className="text-[17px] md:text-[16px] text-slate-800 mb-8">
                    Build a full online store with no backend or database in seconds.
                  </p>
                  <div>
                    <motion.button
                      variants={btnVariant}
                      initial="hidden"
                      whileInView="visible"
                      className="flex gap-2 items-center bg-black text-[16px] text-white px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-black hover:bg-transparent hover:text-black">
                      <Link href="https://app.lyncs.africa/register"> Learn more</Link>
                    </motion.button>
                  </div>

                  <div style={{backgroundImage: 'url("/images/online-shopping.jpg")'}}
                       className="bg-no-repeat bg-center object-contain h-[400px] w-full mt-10 rounded-xl"></div>
                  <div
                    className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-yellow-400 h-[120px] overflow-hidden left-[26px]">
                    <img alt="" src="/images/home-products-pattern.svg"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#F4F6F8] rounded-2xl min-h-[750px] p-0">
                <div className="px-20 pt-14 relative">
                  <p className="text-[16px] md:text-[17px] text-slate-800 font-medium  leading-[1.1] relative">
                    Hotel Booking
                  </p>

                  <h2 className="py-[1.5rem] text-black text-[3rem] font-bold leading-[1]">
                    Accelerate your hotel booking platform
                  </h2>

                  <p className="text-[17px] md:text-[16px] text-slate-800 mb-8">
                    Effortlessly build a hotel booking platform for your customers in minutes.
                  </p>

                  <div>
                    <motion.button
                      variants={btnVariant}
                      initial="hidden"
                      whileInView="visible"
                      className="flex gap-2 items-center bg-black text-[16px] text-white px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-black hover:bg-transparent hover:text-black">
                      <Link href="https://app.lyncs.africa/register"> Learn more</Link>
                    </motion.button>
                  </div>

                  <hr className="my-10 w-full"/>

                  <div style={{backgroundImage: 'url("/images/hotel-booking.jpg")'}}
                       className="bg-no-repeat  bg-center bg-cover rounded-xl h-[400px] w-full mt-10"></div>
                  <div
                    className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-green-400 h-[120px] overflow-hidden left-[26px]">
                    <img alt="" src="/images/housing.jpg"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#F4F6F8] rounded-2xl min-h-[750px] p-0">
                <div className="px-20 pt-14 relative">
                  <p className="text-[16px] md:text-[17px] text-slate-800 font-medium  leading-[1.1] relative">
                    Cab Hailing
                  </p>

                  <h2 className="py-[1.5rem] text-black text-[3rem] font-bold leading-[1]">
                    Optimize your cab hailing efficiency.
                  </h2>

                  <p className="text-[17px] md:text-[16px] text-slate-800 mb-8">
                    Build an e-hailing service for your customers
                  </p>

                  <div>
                    <motion.button
                      variants={btnVariant}
                      initial="hidden"
                      whileInView="visible"
                      className="flex gap-2 items-center bg-black text-[16px] text-white px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-black hover:bg-transparent hover:text-black">
                      <Link href="https://app.lyncs.africa/register"> Learn more</Link>
                    </motion.button>
                  </div>

                  <hr className="my-10 w-full"/>

                  <div style={{backgroundImage: 'url("/images/ride-share.jpg")'}}
                       className="bg-no-repeat  rounded-xl object-cover h-[400px] w-full mt-10"></div>
                  <div
                    className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-green-400 h-[120px] overflow-hidden left-[26px]">
                    <img alt="" src="/images/home-products-pattern.svg"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#F4F6F8] rounded-2xl min-h-[750px] p-0">
                <div className="px-20 pt-14 relative">
                  <p className="text-[16px] md:text-[17px] text-slate-800 font-medium  leading-[1.1] relative">
                    Food Ordering
                  </p>

                  <h2 className="py-[1.5rem] text-black text-[3rem] font-bold leading-[1]">
                    Boost your food ordering efficiency.
                  </h2>

                  <p className="text-[17px] md:text-[16px] text-slate-800 mb-8">
                    Create a sweet and swift online food ordering platform for your customers in a matter of seconds
                  </p>

                  <div>
                    <motion.button
                      variants={btnVariant}
                      initial="hidden"
                      whileInView="visible"
                      className="flex gap-2 items-center bg-black text-[16px] text-white px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-black hover:bg-transparent hover:text-black">
                      <Link href="https://app.lyncs.africa/register"> Learn more</Link>
                    </motion.button>
                  </div>

                  <hr className="my-10 w-full"/>

                  <div style={{backgroundImage: 'url("/images/food-delivery.jpg")'}}
                       className="bg-no-repeat rounded-xl bg-center object-contain h-[400px] w-full mt-10"></div>

                  <div
                    className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-green-400 h-[120px] overflow-hidden left-[26px]">
                    <img src="/images/home-products-pattern.svg" alt=""/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#F4F6F8] rounded-2xl min-h-[750px] p-0">
                <div className="px-20 pt-14 relative">
                  <p className="text-[16px] md:text-[17px] text-slate-800 font-medium  leading-[1.1] relative">
                    Flight Booking
                  </p>

                  <h2 className="py-[1.5rem] text-black text-[3rem] font-bold leading-[1]">
                    Streamlined Flight Reservations.
                  </h2>

                  <p className="text-[17px] md:text-[16px] text-slate-800 mb-8">
                    Create a smooth and enjoyable online experience for your customers when booking package deliveries in
                    just seconds </p>

                  <div>
                    <motion.button
                      variants={btnVariant}
                      initial="hidden"
                      whileInView="visible"
                      className="flex gap-2 items-center bg-black text-[16px] text-white px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-black hover:bg-transparent hover:text-black">
                      <Link href="https://app.lyncs.africa/register"> Learn more</Link>
                    </motion.button>
                  </div>

                  <hr className="my-10 w-full"/>

                  <div style={{backgroundImage: 'url("/images/flight-booking.jpg")'}}
                       className="bg-no-repeat bg-center rounded-xl bg-contain h-[400px] w-full mt-10"></div>
                  <div
                    className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-green-400 h-[120px] overflow-hidden left-[26px]">
                    <img src="/images/home-products-pattern.svg" alt=""/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#F4F6F8] rounded-2xl min-h-[750px] p-0">
                <div className="px-20 pt-14 relative">
                  <p className="text-[16px] md:text-[17px] text-slate-800 font-medium  leading-[1.1] relative">
                    Stream share
                  </p>

                  <h2 className="py-[1.5rem] text-black text-[3rem] font-bold leading-[1]">
                    Access to multiple movie streaming platforms
                  </h2>
                  <p className="text-[17px] md:text-[16px] text-slate-800 mb-8">
                    Enjoy access to Netflix, Prime and Showmax for just ₦3,900
                  </p>

                  <div>
                    <motion.button
                      variants={btnVariant}
                      initial="hidden"
                      whileInView="visible"
                      className="flex gap-2 items-center bg-black text-[16px] text-white px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-black hover:bg-transparent hover:text-black">
                      <Link href="https://app.lyncs.africa/register"> Learn more</Link>
                    </motion.button>
                  </div>

                  <hr className="my-10 w-full"/>

                  <div style={{backgroundImage: 'url("/images/stream.jpg")'}}
                       className="bg-no-repeat bg-center object-contain h-[400px] w-full mt-10 rounded-xl"></div>
                  <div
                    className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-green-400 h-[120px] overflow-hidden left-[26px]">
                    <img alt="" src="/images/home-products-pattern.svg"/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesWeb;
