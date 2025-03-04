import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip"
import SwiperCore from "swiper";
import {Autoplay, Pagination} from "swiper/modules";

const options = [
  "Japa",
  "Study Abroad",
  "Escape Traffic",
  "Book Local Flights",
  "Book Global Flights",
  "Go on Vacation",
  "Shock Village People",
  "Explore the World",
  "Do Long Distance",
  "TravelCard for NYSC",
  "Get TravelCard Visa",
  "Flex on Social Media",
  "Form Fake Life",
  "Spend Chief's Money",
  "Oppress your Ex",
  "Try out New Dishes",
  "Find Peace of Mind",]
const HeroMobile = ({handleOpen}) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  SwiperCore.use([Autoplay]);
  return (
    <div className="font-satoshiMedium md:hidden pt-[70px] bg-slate-800 px-4 min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-[url('/images/2.jpg')] bg-center opacity-80"/>
      <div className="absolute bottom-12 w-full left-0 p-4">
        <Swiper
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
          }}
          speed={1000}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={() => setActiveIndex(swiper.activeIndex)}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            options.map((option, id) => (
              <SwiperSlide key={id} className="relative">
                <div className="absolute inset-0 bg-slate-950 rounded-lg opacity-50"></div>
                <div className="p-8 space-y-4 relative">
                  <h2 className="text-[3rem] text-white font-[900] leading-[1.1] relative">
                    A Better Way To
                    <span className="text-blue-500"> {option}</span>
                  </h2>
                  <p className="text-gray-300">
                    Affordable, flexible, and secure
                    mobility solutions at your fingertips.
                  </p>
                  <button onClick={handleOpen}
                          className="bg-white border text-black px-8 text-center py-3 rounded-lg hover:bg-transparent hover:border-white hover:text-white ease transition-all">
                    Start your journey
                  </button>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
};

export default HeroMobile;
