import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from "swiper/modules";
import SwiperCore from "swiper";
import 'swiper/swiper-bundle.css';
import Typed from "typed.js";

const Home = ({isOpen, handleIsWidgetLoading}) => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Explore the World",
        "Explore Dubai, UAE",
        "Explore the World",
        "Explore Abuja, Nigeria",
        "Explore the World",
        "Explore Osaka, Japan",
        "Explore the World",
        "Explore Accra, Ghana",
        "Explore the World",
        "Explore New York, USA",
        "Explore the World",
        "Explore London, UK",
        "Explore the World",
        "Explore Bejing, China",
        "Explore the World",
        "Explore Singapore",
        "Explore the World",
        "Explore South Africa",
        "Explore the World",
        "Explore Rome, Italy",
        "Explore the World",
        "Explore Lagos, Nigeria",
      ],

      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  SwiperCore.use([Autoplay]);
  const [backgroundImage, setBackgroundImage] = useState('/images/london.jpg');
  console.log(backgroundImage)

  const handleOpen = () => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: '/flights/local-flight',
        onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

const carouselImages =[
  {
    imgSrc: '/images/rome.jpg',
    location: 'Rome, Italy'
  },
  {
    imgSrc: '/images/china.jpg',
    location: 'Bejing, China'
  },
  {
    imgSrc: '/images/dubai.jpg',
    location: 'Dubai, UAE'
  },
  {
    imgSrc: '/images/japan.jpg',
    location: 'Osaka, Japan'
  },
  {
    imgSrc: '/images/london.jpg',
    location: 'London, United Kingdom'
  },
  {
    imgSrc: '/images/new-york.jpg',
    location: 'New york, USA'
  },
  {
    imgSrc: '/images/singapore.jpg',
    location: 'Marina Bay Sands, Singapore'
  }
]

  return (
    <div className="relative min-h-screen font-satoshiMedium bg-slate-800">
      <div className="carousel-container inset-0 absolute opacity-50"
           style={{
             backgroundImage: `url(${backgroundImage})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             transition: 'background-image 0.5s ease-in-out',
           }}>
      </div>
      <div className="bg-slate-800 opacity-70 absolute inset-0"></div>
      <div className="flex flex-col min-h-screen">
        <div className="md:w-[80%] w-[90%] mx-auto relative z-10 flex flex-col xl:min-h-[73vh] md:min-h-[70vh]">
          <img alt="Lyncs logo" className="w-[100px] pt-5" src="/images/logo-white.svg"/>
          <div className="relative z-10 md:text-center py-8 my-auto">
            <h1 className="md:text-[6rem] text-[4rem] leading-[1] font-satoshiMedium text-white">
              <span ref={el} className="text-blue-400">Explore the World</span>
              <br/>Your Next Adventure<br/> Starts Here!</h1>
            <p
              className={`${isOpen ? 'text-slate-800' : 'text-slate-300'} md:text-[17px] text-[16px] py-4 md:px-4`}>
              Book flights both local and internationally at the best rates & filter by a bunch of factors
            </p>
            <div className="flex flex-row md:justify-center items-center gap-7 z-30 w-full">
              <button onClick={handleOpen}
                      className={`${isOpen ? 'bg-black text-white' : 'bg-white text-black hover:border-white hover:bg-transparent hover:text-white'} cursor-pointer border text-[17px] px-8 text-center py-3 rounded border ease transition-all`}>
                Book a trip
              </button>
            </div>
          </div>

        </div>
        <div className="mt-auto w-full pb-16 md:pt-0">
          <div className="mx-auto md:w-[80%] w-[90%] container">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={10}
              breakpoints={{
                0: {
                  slidesPerView: 2.2,
                  spaceBetween: 10,
                },
                470: {
                  slidesPerView: 3.5,
                  spaceBetween: 20,
                },
                760: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              onSlideChange={(swiper) => {
                const newIndex = swiper.realIndex;
                setBackgroundImage(carouselImages[newIndex].imgSrc);
              }}
            >
              {carouselImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative">
                    <img
                      className="w-[250px] h-[150px] object-cover rounded-lg"
                      src={image.imgSrc}
                      alt={`Lyncs fly Slide ${index + 1}`}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[50px] bg-slate-900 opacity-80 rounded-t-xl p-2 flex items-center justify-center">
                      <p className="relative text-white">{image.location}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
