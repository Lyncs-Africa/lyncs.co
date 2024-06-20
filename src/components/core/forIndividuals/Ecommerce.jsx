import React, {useMemo} from 'react';
import {easeInOut, motion} from "framer-motion";
import SwiperCore from "swiper";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const categories = [
  {
    name: "Fashion",
    imgSrc: "/images/categories/fashion.jpg",
    path: '/shop/categories/fashion'
  },
  {
    name: "Home appliances",
    imgSrc: "/images/categories/appliances.jpg",
    path: '/shop/categories/appliances'
  },
  {
    name: "Home & office",
    imgSrc: "/images/categories/home.jpg",
    path: '/shop/categories/home-and-office'
  },
  {
    name: "Musical instruments",
    imgSrc: "/images/categories/music.jpg",
    path: '/shop/categories/musical-instruments'
  },
  {
    name: "Phones & tablets",
    imgSrc: "/images/categories/phones.jpg",
    path: '/shop/categories/phones-and-tablets'
  },
  {
    name: "Health and beauty",
    imgSrc: "/images/categories/beauty.png",
    path: '/shop/categories/health-and-beauty'
  },
  {
    name: "Books",
    imgSrc: "/images/categories/books.jpg",
    path: '/shop/categories/books'
  },
  {
    name: "Sporting goods",
    imgSrc: "/images/categories/sporting.jpg",
    path: '/shop/categories/sporting-goods'
  }
].map((item, i) => ({...item, id: i + 1}))

const Ecommerce = ({handleIsWidgetLoading}) => {
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


  const handleOpen = (path) => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: path,
        onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover font-satoshiMedium">
      <div
        className="container mx-auto flex flex-col md:grid grid-cols-12 gap-10 pb-[70px] md:pb-[160px] overflow-hidden md:relative md:z-10">
        <div className="col-span-7 flex gap-8 md:h-[400px] h-[150px] w-full">
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
            className="w-full"
          >
            {
              categories.map((category) => (
                <SwiperSlide key={category.id}>
                  <div className="relative h-full group">
                    <div className="absolute inset-0 bg-slate-800 opacity-50 rounded-lg"></div>
                    <div className="h-full">
                      <img className="object-cover rounded-lg h-full w-full" src={category.imgSrc} alt=""/>
                    </div>
                    <div className="absolute bottom-0 left-8 space-y-2 my-8">
                      <p
                        className="md:text-[2.5rem] text-[2rem] font-quicksand leading-[1.1] text-white">{category.name}</p>
                      <button onClick={() => handleOpen(category.path)}
                              className="opacity-70 group-hover:opacity-100 relative cursor-pointer border text-[17px] text-white text-center py-2 md:py-3 px-5 md:px-8 rounded border ease transition-all border-white bg-transparent">
                        Shop now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }

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
              onClick={() => handleOpen('/shop')}
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
