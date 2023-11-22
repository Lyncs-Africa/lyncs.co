import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Autoplay, Pagination } from "swiper/modules";

//Dropdow Icons
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ModeOfTravelTwoToneIcon from '@mui/icons-material/ModeOfTravelTwoTone';
import LocalDiningTwoToneIcon from '@mui/icons-material/LocalDiningTwoTone';
import OtherHousesTwoToneIcon from '@mui/icons-material/OtherHousesTwoTone';
import EventIcon from '@mui/icons-material/Event';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import LocalTaxiTwoToneIcon from '@mui/icons-material/LocalTaxiTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';

import Link from "next/link";

function FeaturesMobile() {
    SwiperCore.use([Autoplay]);
    return (
        <>
            <div className="md:hidden top-[-3rem] font-dmSans py-10 px-4 relative z-10 bg-[#F4F6F8]">

                <h2 className="py-10 text-[2.5rem] font-[900] text-black font-dmSans leading-[1.1] relative heading">
                    Explore core products
                </h2>
                <div className="text-lg font-semibold mb-7 text-blue-500 py-2 flex flex-row justify-start items-center gap-2">
                    See all products <ArrowForwardIcon fontSize="small" className="" />
                </div>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    slidesPerView={1}
                    spaceBetween={40}
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
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1100: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                    }}
                    className="text-black flex flex-col justify-stretch items-stretch "
                >
                    <SwiperSlide className="bg-white rounded-lg">
                        <div className="px-8 py-10 h-96">
                            <div className="text-6xl relative mb-10">
                                <div className="heart"></div>
                                <StorefrontOutlinedIcon fontSize="inherit" className="text-gray-700 mb-4" />
                            </div>

                            <p className="font-dmSans text-[#54667f]">
                                SHOP
                            </p>
                            <h2 className="text-lg font-medium font-dmSans mt-5 mb-10">
                                Build a full online store with no backend or database
                            </h2>
                            <Link href="https://app.lyncs.africa/register"
                                className="bg-black text-md text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                                Get started
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-lg">
                        <div className="px-8 py-10 h-96">
                            <div className="text-6xl relative mb-10">
                                <div className="heart-2"></div>
                                <LocalDiningTwoToneIcon fontSize="inherit" className="text-gray-700 mb-4" />
                            </div>
                            <p className="font-dmSans text-[#54667f]">
                                EAT
                            </p>
                            <h2 className="text-lg font-medium font-dmSans mt-5 mb-10">
                                Build a complete food-ordering service within your app
                            </h2>
                            <Link href="https://app.lyncs.africa/register"
                                className="bg-black text-md text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                                Get started
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-lg">
                        <div className="px-8 py-10 h-96">
                            <div className="text-6xl relative mb-10">
                                <div className="heart-3"></div>
                                <LocalTaxiTwoToneIcon fontSize="inherit" className="text-gray-700 mb-4" />
                            </div>
                            <p className="font-dmSans text-[#54667f]">
                                Ride
                            </p>
                            <h2 className="text-lg font-medium font-dmSans mt-5 mb-10">
                                Build an e-hailing service for your customers
                            </h2>
                            <Link href="https://app.lyncs.africa/register"
                                className="bg-black text-md text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                                Get started
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-lg">
                        <div className="px-8 py-10 text-black h-96">
                            <div className="text-6xl relative mb-10">
                                <div className="heart"></div>
                                <LocalShippingTwoToneIcon fontSize="inherit" className="text-gray-700 mb-4" />
                            </div>
                            <p className="font-dmSans text-[#54667f]">
                                Delivery
                            </p>
                            <h2 className="text-lg font-medium font-dmSans mt-5 mb-10">
                                Deliver anything anywhere within your app | Build a full logistics platform end-to-end in minutes
                            </h2>
                            <Link href="https://app.lyncs.africa/register"
                                className="bg-black text-md text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                                Get started
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-lg">
                        <div className="px-8 py-10 h-96">
                            <div className="text-6xl relative mb-10">
                                <div className="heart-2"></div>
                                <ModeOfTravelTwoToneIcon fontSize="inherit" className="text-gray-700 mb-4" />
                            </div>

                            <p className="font-dmSans text-[#54667f]">
                                Travel
                            </p>

                            <h2 className="text-lg font-meh2dium font-dmSans mt-5 mb-10">
                                Build a flight booking and ticket-issuing service.
                            </h2>
                            <Link href="https://app.lyncs.africa/register"
                                className="bg-black text-[17px] text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                                Get started
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-lg">
                        <div className="px-8 py-10 h-96">
                            <div className="text-6xl relative mb-10">
                                <div className="heart-3"></div>
                                <DirectionsBusTwoToneIcon fontSize="inherit" className="text-gray-700 mb-4" />
                            </div>
                            <p className="font-dmSans text-[#54667f]">
                                Bus
                            </p>
                            <h2 className="text-lg font-meh2dium font-dmSans mt-5 mb-10">
                                Build an Inter-state transport service in your app
                            </h2>
                            <Link href="https://app.lyncs.africa/register"
                                className="bg-black text-md text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                                Get started
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-lg h-96">
                        <div className="px-8 py-10 ">
                            <div className="text-6xl relative mb-10">
                                <div className="heart-4"></div>
                                <EventIcon fontSize="inherit" className="text-gray-700 mb-4" />
                            </div>

                            <p className="font-dmSans text-[#54667f]">
                                Event
                            </p>
                            <h2 className="text-lg font-meh2dium font-dmSans mt-5 mb-10">
                                Search, Book and Get Tickets for any Event in Africa
                            </h2>
                            <Link href="https://app.lyncs.africa/register"
                                className="bg-black text-[17px] text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
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
