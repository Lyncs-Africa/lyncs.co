import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
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
            gsap.to(".shop", { opacity: 1, x: 0, duration: 1, delay: 0.3 });
        }
    }, [inView]);
    return (
        <>
            <div
                ref={ref}
                className="hidden md:relative text-black z-20 py-[160px] md:grid grid-cols-12 before:absolute before:right-0 before:top-[100px] before:content-[''] before:bg-[url(/assets/images/6.png)] before:bg-no-repeat before:bg-right-top before:w-full before:h-[955px] after:absolute after:left-0 after:top-[-150px] after:opacity-50 after:content-[''] after:bg-contain after:bg-[url(/assets/images/5.png)] after:bg-no-repeat after:bg-left-top after:w-full after:h-[800px] bg-white"
            >
                <div className="col-start-2 col-span-3 z-30">
                    <h2
                        className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative heading translate-x-[-50px] opacity-0 ">
                        How Lyncs empower businesses
                    </h2>
                    <p className="md:text-black text-[18px] py-2">
                        Connect your customers to :
                    </p>

                    <div className="space-y-6 mt-10">
                        <div className="relative flex items-center ecommerce translate-x-[-50px] opacity-0 ">
                            <div
                                onClick={() => swiper.slideTo?.(0)}
                                className={`relative w-[13px] h-[13px] rounded-full bg-gray-300 py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 0
                                    ? "before:border-[3px] before:border-blue-500"
                                    : ""
                                    }`}
                            ></div>
                            <p className="ml-[3rem] font-dmSans text-[18px]">Shop</p>
                        </div>
                        <div className="relative flex items-center credit-shopping translate-x-[-50px] opacity-0 ">
                            <div
                                onClick={() => swiper.slideTo?.(1)}
                                className={`relative w-[13px] h-[13px] rounded-full bg-gray-300 py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 1
                                    ? "before:border-[3px] before:border-blue-500"
                                    : ""
                                    }`}
                            ></div>
                            <p className="ml-[3rem] font-dmSans text-[18px]">Eat</p>
                        </div>
                        <div className="relative flex items-center shop translate-x-[-50px] opacity-0 ">
                            <div
                                onClick={() => swiper.slideTo?.(2)}
                                className={`relative w-[13px] h-[13px] rounded-full bg-gray-300 py-2 before:cursor-pointer before:content-[''] before:h-[30px] before:w-[30px] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${activeIndex === 2
                                    ? "before:border-[3px] before:border-blue-500"
                                    : ""
                                    }`}
                            ></div>
                            <p className="ml-[3rem] font-dmSans text-[18px]">
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
                            <p className="ml-[3rem] font-dmSans text-[18px]">
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
                            <p className="ml-[3rem] font-dmSans text-[18px]">
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
                            <p className="ml-[3rem] font-dmSans text-[18px]">
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
                            <p className="ml-[3rem] font-dmSans text-[18px]">
                                Event
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-start-6 col-span-6 shadow-lg swipe-up translate-y-[-50px] opacity-0 ">
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
                        <SwiperSlide className="bg-[#F4F6F8] rounded-2xl min-h-[750px]">
                            <div className="p-16">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Shop
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    Build a full online store with no backend or database
                                </p>
                                <button
                                    className="bg-blue-500 text-[18px] text-white px-8 py-4 rounded-md font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                                    Get started
                                </button>
                                <img
                                    className=""
                                    src={shopLyncsImg}
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-[#F4F6F8] rounded-2xl">
                            <div className="px-8 py-[70px] min-h-[750px]">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Build the Future of E-commerce
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    Your customers get to experience e-commerce at scale, at no extra cost to your business. No Merchant
                                    Acquisition, No Inventory, No Logistics, Nothing! We’ll handle everything!
                                </p>
                                <button
                                    className="bg-black text-[18px] text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                                    Get started
                                </button>
                                <img
                                    className="w-[70%] ml-auto"
                                    src="/assets/images/card.svg"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-[#F4F6F8] rounded-2xl">
                            <div className="px-8 py-[70px] min-h-[750px]">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Sophisticated Use Cases
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    Your customers can use our advanced filters to reduce delivery time by searching for products from
                                    merchants close to where they reside. They can also filter by the prices of listed items, merchant
                                    ratings, product categories, etc.
                                </p>
                                <button
                                    className="bg-black text-[18px] text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                                    Get started
                                </button>
                                <img
                                    className="w-[70%] ml-auto"
                                    src="/assets/images/shopping.svg"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-[#F4F6F8] rounded-2xl">
                            <div className="px-8 py-[70px] min-h-[750px]">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Advanced AI Shopping
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    With Lyncs AI, we’ll suggest better deals to you. eg Let’s say you want a TM shirt, and your budget is
                                    7k. If we can’t find a TM shirt, we’ll suggest other quality shirts for that price that would fit just
                                    as well as a TM shirt. Crazy right?
                                </p>
                                <button
                                    className="bg-black text-[18px] text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                                    Get started
                                </button>
                                <img
                                    className="w-[70%] ml-auto"
                                    src="/assets/images/Ai-shopping.svg"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-[#F4F6F8] rounded-2xl">
                            <div className="px-8 py-[70px] min-h-[750px]">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Advanced AI Shopping
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    With Lyncs AI, we’ll suggest better deals to you. eg Let’s say you want a TM shirt, and your budget is
                                    7k. If we can’t find a TM shirt, we’ll suggest other quality shirts for that price that would fit just
                                    as well as a TM shirt. Crazy right?
                                </p>
                                <button
                                    className="bg-black text-[18px] text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                                    Get started
                                </button>
                                <img
                                    className="w-[70%] ml-auto"
                                    src="/assets/images/Ai-shopping.svg"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-[#F4F6F8] rounded-2xl">
                            <div className="px-8 py-[70px] min-h-[750px]">
                                <h2 className="text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
                                    Advanced AI Shopping
                                </h2>
                                <p className="py-[2rem] font-dmSans text-[18px]">
                                    With Lyncs AI, we’ll suggest better deals to you. eg Let’s say you want a TM shirt, and your budget is
                                    7k. If we can’t find a TM shirt, we’ll suggest other quality shirts for that price that would fit just
                                    as well as a TM shirt. Crazy right?
                                </p>
                                <button
                                    className="bg-black text-[18px] text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                                    Get started
                                </button>
                                <img
                                    className="w-[70%] ml-auto"
                                    src="/assets/images/Ai-shopping.svg"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default FeaturesWeb;
