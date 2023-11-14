import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import shopLyncsImg from "/public/images/lyncs-shop.svg"
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

function FeaturesWeb() {
    SwiperCore.use([Autoplay]);
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { ref, inView, entry } = useInView({
        threshold: 0.3,
    });
    useEffect(() => {
        if (inView) {
            gsap.to(".heading", { opacity: 1, x: 0, duration: 1 });
            gsap.to(".swipe-up", { opacity: 1, y: 0, duration: 1 });
            gsap.to(".ecommerce", { opacity: 1, x: 0, duration: 1, delay: 0.1 });
            gsap.to(".credit-shopping", {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.2,
            });
            gsap.to(".shop", { opacity: 1, x: 0, duration: 0.1, delay: 0.1 });
        }
    }, [inView]);
    return (
        <>
            <div
                ref={ref}
                className="hidden md:relative text-black z-20 py-[160px] md:grid grid-cols-12 before:absolute before:right-0 before:top-[100px] before:content-[''] before:bg-[url(/assets/images/6.png)] before:bg-no-repeat before:bg-right-top before:w-full before:h-[955px] after:absolute after:left-0 after:top-[-150px] after:opacity-50 after:content-[''] after:bg-contain after:bg-[url(/assets/images/5.png)] after:bg-no-repeat after:bg-left-top after:w-full after:h-[800px] bg-[#F4F6F8]"
            >
                <div className="col-start-2 col-span-3 z-30">
                    <h2
                        className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative heading translate-x-[-50px] opacity-0 ">
                        Explore core products
                    </h2>
                    <div className="text-lg font-semibold text-blue-500 py-2 mt-4 flex flex-row justify-start items-center gap-2">
                        See all products <ArrowForwardIcon fontSize="small" className="" />
                    </div>

                    <div className="space-y-6 mt-10">
                        <div className="relative flex items-center ecommerce translate-x-[-50px] opacity-0 ">
                            <div
                                onClick={() => swiper.slideTo?.(0)}
                                className={`relative w-[13px] h-[13px] rounded-full bg-gray-300 py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 0
                                    ? "before:border-[3px] before:border-blue-500"
                                    : ""
                                    }`}
                            ></div>
                            <p className="ml-[2rem] font-dmSans text-gray-700 text-[18px]">Shop</p>
                        </div>
                        <div className="relative flex items-center credit-shopping translate-x-[-50px] opacity-0 ">
                            <div
                                onClick={() => swiper.slideTo?.(1)}
                                className={`relative w-[13px] h-[13px] rounded-full bg-gray-300 py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 1
                                    ? "before:border-[3px] before:border-blue-500"
                                    : ""
                                    }`}
                            ></div>
                            <p className="ml-[2rem] font-dmSans text-gray-700 text-[18px]">Eat</p>
                        </div>
                        <div className="relative flex items-center shop translate-x-[-50px] opacity-0 ">
                            <div
                                onClick={() => swiper.slideTo?.(2)}
                                className={`relative w-[13px] h-[13px] rounded-full bg-gray-300 py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 2
                                    ? "before:border-[3px] before:border-blue-500"
                                    : ""
                                    }`}
                            ></div>
                            <p className="ml-[2rem] text-gray-700 font-dmSans text-[18px]">
                                Ride
                            </p>
                        </div>
                        <div className="relative flex items-center shop translate-x-[-50px] opacity-0 ">
                            <div
                                onClick={() => swiper.slideTo?.(3)}
                                className={`relative w-[13px] h-[13px] rounded-full bg-gray-300 py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 3
                                    ? "before:border-[3px] before:border-blue-500"
                                    : ""
                                    }`}
                            ></div>
                            <p className="ml-[2rem] text-gray-700 font-dmSans text-[18px]">
                                Delivery
                            </p>
                        </div>
                        <div className="relative flex items-center shop translate-x-[-50px] opacity-0 ">
                            <div
                                onClick={() => swiper.slideTo?.(4)}
                                className={`relative w-[13px] h-[13px] rounded-full bg-gray-300 py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 4
                                    ? "before:border-[3px] before:border-blue-500"
                                    : ""
                                    }`}
                            ></div>
                            <p className="ml-[2rem] text-gray-700 font-dmSans text-[18px]">
                                Travel
                            </p>
                        </div>
                        <div className="relative flex items-center shop translate-x-[-50px] opacity-0 ">
                            <div
                                onClick={() => swiper.slideTo?.(5)}
                                className={`relative w-[13px] h-[13px] rounded-full bg-gray-300 py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 5
                                    ? "before:border-[3px] before:border-blue-500"
                                    : ""
                                    }`}
                            ></div>
                            <p className="ml-[2rem] text-gray-700 font-dmSans text-[18px]">
                                Bus
                            </p>
                        </div>
                        <div className="relative flex items-center shop translate-x-[-50px] opacity-0 ">
                            <div
                                onClick={() => swiper.slideTo?.(6)}
                                className={`relative w-[13px] h-[13px] rounded-full bg-gray-300 py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 6
                                    ? "before:border-[3px] before:border-blue-500"
                                    : ""
                                    }`}
                            ></div>
                            <p className="ml-[2rem] text-gray-700 font-dmSans text-[18px]">
                                Event
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-start-6 col-span-6 swipe-up translate-y-[-50px]">
                    <Swiper
                        // autoplay={{
                        //     delay: 3000,
                        //     disableOnInteraction: false,
                        // }}
                        speed={5000}
                        spaceBetween={30}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        onSlideChange={() => setActiveIndex(swiper.activeIndex)}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="bg-white rounded-2xl min-h-[750px] h-full p-0 shadow-md">
                            <div className="px-12 pt-12 relative">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Shop
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    Build a full online store with no backend or database
                                </p>
                                <button
                                    className="bg-blue-500 text-[16px] text-white px-8 py-3 rounded-md font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black shadow-md">
                                    Get started
                                </button>

                                <hr className="my-10 w-full" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full items-center">
                                    <p>Companies integrating our shop service</p>

                                    <div className="w-full flex flex-row justify-start items-center gap-7">
                                        <img src="/images/clan.png" className="w-20 rounded-full" />
                                        <img src="/images/BuySimply.jpg" className="w-20 rounded-full" />
                                    </div>
                                </div>

                                <div style={{ backgroundImage: 'url("/images/lyncs-shop.svg")' }} className="bg-no-repeat bg-center object-contain h-[400px] w-full mt-10"></div>
                                <div className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-yellow-400 h-[120px] overflow-hidden left-[26px]">
                                    <img src="/images/home-products-pattern.svg" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-white rounded-2xl min-h-[750px] p-0">
                            <div className="px-12 pt-12 relative">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Eat
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    Build a complete food-ordering service within your app
                                </p>
                                <button
                                    className="bg-blue-500 text-[16px] text-white px-8 py-3 rounded-md font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black shadow-md">
                                    Get started
                                </button>

                                <hr className="my-10 w-full" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full items-center">
                                    <p>Companies integrating our shop service</p>

                                    <div className="w-full flex flex-row justify-start items-center gap-7">
                                        <img src="/images/clan.png" className="w-20 rounded-full" />
                                        <img src="/images/BuySimply.jpg" className="w-20 rounded-full" />
                                    </div>
                                </div>

                                <div style={{ backgroundImage: 'url("/images/lyncs-shop.svg")' }} className="bg-no-repeat bg-center object-contain h-[400px] w-full mt-10"></div>
                                <div className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-green-400 h-[120px] overflow-hidden left-[26px]">
                                    <img src="/images/home-products-pattern.svg" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-white rounded-2xl min-h-[750px] p-0">
                            <div className="px-12 pt-12 relative">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Ride
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    Build an e-hailing service for your customers
                                </p>
                                <button
                                    className="bg-blue-500 text-[16px] text-white px-8 py-3 rounded-md font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black shadow-md">
                                    Get started
                                </button>

                                <hr className="my-10 w-full" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full items-center">
                                    <p>Companies integrating our shop service</p>

                                    <div className="w-full flex flex-row justify-start items-center gap-7">
                                        <img src="/images/clan.png" className="w-20 rounded-full" />
                                        <img src="/images/BuySimply.jpg" className="w-20 rounded-full" />
                                    </div>
                                </div>

                                <div style={{ backgroundImage: 'url("/images/lyncs-shop.svg")' }} className="bg-no-repeat bg-center object-contain h-[400px] w-full mt-10"></div>
                                <div className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-green-400 h-[120px] overflow-hidden left-[26px]">
                                    <img src="/images/home-products-pattern.svg" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-white rounded-2xl min-h-[750px] p-0">
                            <div className="px-12 pt-12 relative">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Delivery
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    Deliver anything anywhere within your app | Build a full logistics platform end-to-end in minutes
                                </p>
                                <button
                                    className="bg-blue-500 text-[16px] text-white px-8 py-3 rounded-md font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black shadow-md">
                                    Get started
                                </button>

                                <hr className="my-10 w-full" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full items-center">
                                    <p>Companies integrating our shop service</p>

                                    <div className="w-full flex flex-row justify-start items-center gap-7">
                                        <img src="/images/clan.png" className="w-20 rounded-full" />
                                        <img src="/images/BuySimply.jpg" className="w-20 rounded-full" />
                                    </div>
                                </div>

                                <div style={{ backgroundImage: 'url("/images/lyncs-shop.svg")' }} className="bg-no-repeat bg-center object-contain h-[400px] w-full mt-10"></div>
                                <div className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-green-400 h-[120px] overflow-hidden left-[26px]">
                                    <img src="/images/home-products-pattern.svg" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-white rounded-2xl min-h-[750px] p-0">
                            <div className="px-12 pt-12 relative">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Travel
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    Build a flight booking and ticket-issuing service
                                </p>
                                <button
                                    className="bg-blue-500 text-[16px] text-white px-8 py-3 rounded-md font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black shadow-md">
                                    Get started
                                </button>

                                <hr className="my-10 w-full" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full items-center">
                                    <p>Companies integrating our shop service</p>

                                    <div className="w-full flex flex-row justify-start items-center gap-7">
                                        <img src="/images/clan.png" className="w-20 rounded-full" />
                                        <img src="/images/BuySimply.jpg" className="w-20 rounded-full" />
                                    </div>
                                </div>

                                <div style={{ backgroundImage: 'url("/images/lyncs-shop.svg")' }} className="bg-no-repeat bg-center object-contain h-[400px] w-full mt-10"></div>
                                <div className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-green-400 h-[120px] overflow-hidden left-[26px]">
                                    <img src="/images/home-products-pattern.svg" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-white rounded-2xl min-h-[750px] p-0">
                            <div className="px-12 pt-12 relative">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Bus
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    Build an Inter-state transport service in your app
                                </p>
                                <button
                                    className="bg-blue-500 text-[16px] text-white px-8 py-3 rounded-md font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black shadow-md">
                                    Get started
                                </button>

                                <hr className="my-10 w-full" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full items-center">
                                    <p>Companies integrating our shop service</p>

                                    <div className="w-full flex flex-row justify-start items-center gap-7">
                                        <img src="/images/clan.png" className="w-20 rounded-full" />
                                        <img src="/images/BuySimply.jpg" className="w-20 rounded-full" />
                                    </div>
                                </div>

                                <div style={{ backgroundImage: 'url("/images/lyncs-shop.svg")' }} className="bg-no-repeat bg-center object-contain h-[400px] w-full mt-10"></div>
                                <div className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-green-400 h-[120px] overflow-hidden left-[26px]">
                                    <img src="/images/home-products-pattern.svg" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-white rounded-2xl min-h-[750px] p-0">
                            <div className="px-12 pt-12 relative">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Event
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    Search, Book and Get Tickets for any Event in Africa
                                </p>
                                <button
                                    className="bg-blue-500 text-[16px] text-white px-8 py-3 rounded-md font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black shadow-md">
                                    Get started
                                </button>

                                <hr className="my-10 w-full" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full items-center">
                                    <p>Companies integrating our shop service</p>

                                    <div className="w-full flex flex-row justify-start items-center gap-7">
                                        <img src="/images/clan.png" className="w-20 rounded-full" />
                                        <img src="/images/BuySimply.jpg" className="w-20 rounded-full" />
                                    </div>
                                </div>

                                <div style={{ backgroundImage: 'url("/images/lyncs-shop.svg")' }} className="bg-no-repeat bg-center object-contain h-[400px] w-full mt-10"></div>
                                <div className="absolute bottom-0 right-[26px] -z-10 rounded-t-xl bg-green-400 h-[120px] overflow-hidden left-[26px]">
                                    <img src="/images/home-products-pattern.svg" />
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default FeaturesWeb;
