import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";

function FeaturesMobile() {
    SwiperCore.use([Autoplay]);
    return (
        <>
            <div className="md:hidden top-[-3rem] font-urbanist py-[70px] px-4 bg-dotted relative z-10">
                <h2 className="py-10 text-[2.5rem] font-[900] font-urbanist leading-[1.1] relative heading">
                    How Lyncs Powers Businesses
                </h2>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    slidesPerView={1.5}
                    spaceBetween={40}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 20,
                        },
                        470: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        760: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        1100: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide className="bg-gray-200 rounded-lg min-h-[550px]">
                        <div className="px-8 py-[70px]">
                            <h2 className="text-[2rem] font-[900] font-urbanist leading-[1.1] relative">
                                Build an E-commerce platform at no overhead cost
                            </h2>
                            <p className="py-[2rem] font-urbanist text-[17px]">
                                Your customers can shop for items from over 10,000 merchants and get them delivered to their doorsteps.
                            </p>
                            <Link to="/register"
                                className="bg-black text-[17px] text-white px-8 py-4 rounded-[12px] font-urbanist hover:border hover:border-black hover:bg-transparent hover:text-black">
                                Get started
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-gray-200 rounded-lg">
                        <div className="px-8 py-[70px] min-h-[550px]">
                            <h2 className="text-[2rem] font-[900] font-urbanist leading-[1.1] relative">
                                Access Health Products
                            </h2>
                            <p className="py-[2rem] font-urbanist text-[17px]">
                                Connect to Pharmacies, access HMO services, consult medical practitioners, gym memberships, and more.
                            </p>
                            <Link to="/register"
                                className="bg-black text-[17px] text-white px-8 py-4 rounded-[12px] font-urbanist hover:border hover:border-black hover:bg-transparent hover:text-black">
                                Get started
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-gray-200 rounded-lg">
                        <div className="px-8 py-[70px] min-h-[550px]">
                            <h2 className="text-[2rem] font-[900] font-urbanist leading-[1.1] relative">
                                Give the Split Payment option to Riders
                            </h2>
                            <p className="py-[2rem] font-urbanist text-[17px]">
                                Riders can split their ride fares with other riders as cheaper transportation alternatives to commercial buses at greater comfort and conveniences
                            </p>
                            <Link to="/register"
                                className="bg-black text-[17px] text-white px-8 py-4 rounded-[12px] font-urbanist hover:border hover:border-black hover:bg-transparent hover:text-black">
                                Get started
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-gray-200 rounded-lg">
                        <div className="px-8 py-[70px] min-h-[550px]">
                            <h2 className="text-[2rem] font-[900] font-urbanist leading-[1.1] relative">
                                Make School fees payments with ease
                            </h2>
                            <p className="py-[2rem] font-urbanist text-[17px]">
                                Students can now pay their tuition from within your app at no extra cost. You can also monitor payments received on your dashboard.
                            </p>
                            <Link to="/register"
                                className="bg-black text-[17px] text-white px-8 py-4 rounded-[12px] font-urbanist hover:border hover:border-black hover:bg-transparent hover:text-black">
                                Get started
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-gray-200 rounded-lg">
                        <div className="px-8 py-[70px] min-h-[550px]">
                            <h2 className="text-[2rem] font-[900] font-urbanist leading-[1.1] relative">
                                Connect Tenants and landlords to their homes
                            </h2>
                            <p className="py-[2rem] font-urbanist text-[17px]">
                                Looking for a house? We can find you a house. We also allow you to pay rent monthly while we settle your landlord in full.
                            </p>
                            <Link to="/register"
                                className="bg-black text-[17px] text-white px-8 py-4 rounded-[12px] font-urbanist hover:border hover:border-black hover:bg-transparent hover:text-black">
                                Get started
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-gray-200 rounded-lg">
                        <div className="px-8 py-[70px] min-h-[550px]">
                            <h2 className="text-[2rem] font-[900] font-urbanist leading-[1.1] relative">
                                Supercharge Airtime, Data and Bill payments
                            </h2>
                            <p className="py-[2rem] font-urbanist text-[17px]">
                                Buy airtime,data, cable tv, electricity bills, book flights, movie tickets, process visas and more
                            </p>
                            <Link to="/register"
                                className="bg-black text-[17px] text-white px-8 py-4 rounded-[12px] font-urbanist hover:border hover:border-black hover:bg-transparent hover:text-black">
                                Get started
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default FeaturesMobile;
