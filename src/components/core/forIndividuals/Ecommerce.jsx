import React, {useMemo} from 'react';
import {easeInOut, motion} from "framer-motion";
import SwiperCore from "swiper";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Ecommerce = () => {
  SwiperCore.use([Autoplay]);
  const headerVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: {opacity: 0, x: 450},
    visible: {
      opacity: 1, x: 0,
      transition: {
        type: 'spring',
        stiffness: 50
      }
    }
  }, [])
  const btnVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        ease: easeInOut, delay: 0.3
      }
    }
  }, [])

  const handleOpen = () => window.LyncsWidget.open("a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0")

  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover font-satoshiMedium">
      <div
        className="container mx-auto flex flex-col md:grid grid-cols-12 gap-10 pb-[70px] md:pb-[160px] overflow-hidden md:relative md:z-10">
        <div className="col-span-7 flex gap-8 md:h-[400px] h-[150px]">
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            speed={3000}
            slidesPerView={1}
            spaceBetween={40}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              470: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              760: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              1100: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
            }}
            className=""
          >
            <SwiperSlide>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-slate-800 opacity-50 rounded-lg"></div>
                <div className="h-full">
                  <img className="object-cover rounded-lg h-full w-full" src="/images/categories/beauty.png" alt=""/>
                </div>
                <div className="absolute  bottom-0 left-8">
                  <p className="md:text-[2.5rem] text-[2rem] font-quicksand leading-[1.1] py-8 text-white">Health & Beauty</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-slate-800 opacity-50 rounded-lg"></div>
                <div className="h-full">
                  <img className="object-cover rounded-lg h-full w-full" src="/images/categories/books.jpg" alt=""/>
                </div>
                <div className="absolute  bottom-0 left-8">
                  <p className="md:text-[2.5rem] text-[2rem] font-quicksand leading-[1.1] py-8 text-white">Books</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-slate-800 opacity-50 rounded-lg"></div>
                <div className="h-full">
                  <img className="object-cover rounded-lg h-full w-full" src="/images/categories/sporting.jpg"
                       alt=""/>
                </div>
                <div className="absolute  bottom-0 left-8">
                  <p className="md:text-[2.5rem] text-[2rem] font-quicksand leading-[1.1] py-8 text-white">Sporting goods</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-slate-800 opacity-50 rounded-lg"></div>
                <div className="h-full">
                  <img className="object-cover rounded-lg h-full w-full" src="/images/categories/fashion.jpg"
                       alt=""/>
                </div>
                <div className="absolute  bottom-0 left-8">
                  <p className="md:text-[2.5rem] text-[2rem] font-quicksand leading-[1.1] py-8 text-white">Fashion</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-slate-800 opacity-50 rounded-lg"></div>
                <div className="h-full">
                  <img className="object-cover rounded-lg h-full w-full" src="/images/categories/appliances.jpg"
                       alt=""/>
                </div>
                <div className="absolute  bottom-0 left-8">
                  <p className="md:text-[2.5rem] text-[2rem] font-quicksand leading-[1.1] py-8 text-white">Home appliances</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-slate-800 opacity-50 rounded-lg"></div>
                <div className="h-full">
                  <img className="object-cover rounded-lg h-full w-full" src="/images/categories/home.jpg" alt=""/>
                </div>
                <div className="absolute  bottom-0 left-8">
                  <p className="md:text-[2.5rem] text-[2rem] font-quicksand leading-[1.1] py-8 text-white">Home & office</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-slate-800 opacity-50 rounded-lg"></div>
                <div className="h-full">
                  <img className="object-cover rounded-lg h-full w-full" src="/images/categories/music.jpg" alt=""/>
                </div>
                <div className="absolute bottom-0 left-8">
                  <p className="md:text-[2.5rem] text-[2rem] leading-[1.1] font-quicksand py-8 text-white">Musical instruments</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-slate-800 opacity-50 rounded-lg"></div>
                <div className="h-full">
                  <img className="object-cover rounded-lg h-full w-full" src="/images/categories/phones.jpg" alt=""/>
                </div>
                <div className="absolute  bottom-0 left-8">
                  <p className="md:text-[2.5rem] text-[2rem] font-quicksand leading-[1.1] py-8 text-white">Phones & tablets</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
        <div
          className="px-4 md:px-0 col-span-4 text-left col-start-8 z-50 relative flex flex-col justify-center">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            className="text-bold font-satoshiBold leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
          >
            Elevating Ecommerce Accessibility
          </motion.h2>
          <motion.p
            className="text-[18px] py-8 text-gray-800">
            Shop from multiple market places all in one place and filter items
          </motion.p>
          <div>
            <motion.button
              onClick={handleOpen}
              variants={btnVariant}
              initial="hidden"
              whileInView="visible"
              className="flex gap-2 items-center bg-black text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
              <p>Get started</p>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
