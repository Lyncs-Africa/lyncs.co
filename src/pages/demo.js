import Footer from "@/components/global/footer/Footer";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Navbar from "@/components/global/navbar/Navbar";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";

import FastfoodIcon from '@mui/icons-material/Fastfood';
import OtherHousesTwoToneIcon from '@mui/icons-material/OtherHousesTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import FlightIcon from '@mui/icons-material/Flight';
import { LocalDining, LocalShipping, Storefront } from "@mui/icons-material";

const Demo = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (event) => {
        setScrollTop(event.target.scrollingElement.scrollTop);
    };

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    useLayoutEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.scrollingElement.style.overflowY = "auto"
    }, [])

    const launchShopWidget = () => window.LyncsWidget.open("6a57c8cb21584e478c91d735de8697cca853be3435198181bba2a8")

    return (
        <div className="h-full">
            <Navbar scrollTop={scrollTop} />

            <div className="py-[100px] md:py-[160px] xl:pt-[120px] xl:pb-[220px] md:gap-8 overflow-hidden bg-[#fbfbfb] font-satoshiMedium w-full flex flex-col justify-center items-center md:relative">
                <div className="w-full p-7 flex flex-col justify-center items-center">
                    <h1 className="text-4xl text-black text-center font-satoshiBlack">
                        Experience the unique lyncs widget
                    </h1>

                    <p className="sm:text-[16px] font-satoshiMedium text-md py-4 text-gray-500 mb-7 px-4">
                        See why businesses use lyncs.
                    </p>

                </div>

                <div className="w-full flex flex-col justify-center items-center self-center max-w-7xl relative px-5 md:px-0">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        <div className="bg-white hover:shadow-md ease transition-all hover:scale-105 rounded-xl px-5 py-4">
                            <div className="text-blue-500">
                                <Storefront fontSize="large" color="inherit" />
                            </div>

                            <h1 className="text-xl mt-5 font-semibold">Online Shopping</h1>

                            <p className="text-[#909090] pt-4">
                                Discover the convenience of our online shopping platform with a user-friendly design
                                that streamlines navigation and exploration. Click the launch button to explore how Lyncs enhances your shopping experience.
                            </p>

                            <button onClick={launchShopWidget} className="w-full rounded-full font-semibold shadow-sm bg-blue-500 py-2 mt-10 text-white">
                                Launch
                            </button>

                        </div>
                        {/* Food ordering */}
                        <div className="bg-white hover:shadow-md ease transition-all hover:scale-105 rounded-xl px-5 py-4">
                            <div className="text-orange-700">
                                <FastfoodIcon fontSize="large" color="inherit" />
                            </div>

                            <h1 className="text-xl mt-5 font-semibold">Food Ordering</h1>

                            <p className="text-[#909090] pt-4">
                                Discover the convenience of our food ordering service with a user-friendly design that streamlines navigation
                                and exploration. Click the launch button to experience how lyncs operates.
                            </p>

                            <button className="w-full  text-blue-500 py-2 text-left font-semibold mt-10">
                                Coming soon
                            </button>

                        </div>
                        {/* Cab Hailing */}
                        <div className="bg-white hover:shadow-md ease transition-all hover:scale-105 rounded-xl px-5 py-4">
                            <div className="text-orange-700">
                                <LocalTaxiIcon fontSize="large" color="inherit" />
                            </div>

                            <h1 className="text-xl mt-5 font-semibold">Cab Hailing</h1>

                            <p className="text-[#909090] pt-4">
                                Experience the simplicity of our cab hailing service through an intuitive
                                design that makes navigation and exploration effortless. Click the launch button to see how lyncs Cab hailing widget operates.
                            </p>

                            <button className="w-full  text-blue-500 py-3 text-left font-semibold mt-10 ">
                                Coming soon
                            </button>

                        </div>

                        {/* Hotel Booking */}
                        <div className="bg-white hover:shadow-md ease transition-all hover:scale-105 rounded-xl px-5 py-4">
                            <div className="text-purple-700">
                                <FlightIcon fontSize="large" color="inherit" />
                            </div>

                            <h1 className="text-xl mt-5 font-semibold">Hotel Booking</h1>

                            <p className="text-[#909090] pt-4">
                                Experience the simplicity of our hotel booking service, featuring an intuitive design
                                for effortless navigation. Click on the launch button to explore how Lyncs transforms your booking experience.
                            </p>

                            <button className="w-full text-blue-500 py-3 text-left font-semibold mt-10 ">
                                Coming soon
                            </button>

                        </div>

                        {/* Package Delivery */}
                        <div className="bg-white hover:shadow-md ease transition-all hover:scale-105 rounded-xl px-5 py-4">
                            <div className="text-orange-700">
                                <LocalShipping fontSize="large" color="inherit" />
                            </div>

                            <h1 className="text-xl mt-5 font-semibold">Package Delivery</h1>

                            <p className="text-[#909090] pt-4">
                                Discover the convenience of our package delivery service, enhanced with a user-friendly design for easy
                                navigation. Click the launch button to experience how Lyncs streamlines your delivery process.
                            </p>

                            <button className="w-full  text-blue-500 py-3 text-left font-semibold mt-10 ">
                                Coming soon
                            </button>

                        </div>

                        {/* Interstate Transportation */}
                        <div className="bg-white hover:shadow-md ease transition-all hover:scale-105 rounded-xl px-5 py-4">
                            <div className="text-cyan-300">
                                <LocalTaxiIcon fontSize="large" color="inherit" />
                            </div>

                            <h1 className="text-xl mt-5 font-semibold">Interstate Transportation</h1>

                            <p className="text-[#909090] pt-4">
                                Streamline your interstate transportation with ease through our seamless and user-friendly service.
                                Click the launch button to explore the efficiency of Lyncs in simplifying your travel experience.
                            </p>

                            <button className="w-full text-blue-500 py-3 text-left font-semibold mt-10 ">
                                Coming soon
                            </button>

                        </div>
                    </div>

                </div>

                <section className="w-full max-w-7xl mt-24 p-4">
                    <div className=" md:p-20 p-5 gap-10 relative flex-wrap hidden md:flex flex-row justify-between items-center w-full rounded-lg font-satoshiMedium bg-blue-600 text-white bg-pattern bg-no-repeat bg-right">
                        <h1 className="font-satoshiBold text-4xl">Get free API calls when<br /> you sign up</h1>
                        <Link href="https://app.lyncs.africa/register" target="_blank"
                            className="bg-white text-[16px] font-medium border text-black hover:bg-black hover:text-white ease transition-all rounded-md hover:opacity-80">
                            <button className="dropdown-content py-3 px-5">
                                Get Started
                            </button>
                        </Link>

                    </div>

                    <div
                        className="block md:hidden md:px-0 md:pb-[70px] relative overflow-hidden font-satoshiMedium">
                        <div className="bg-[url('/images/abstract.jpg')] bg-cover md:text-center col-start-2 col-span-10 md:w-[80%] mx-z p-10 md:p-24 rounded-lg md:rounded-[32px] relative overflow-hidden">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="relative">
                                <h2 className="text-gray-300 text-[2rem] md:text-[3.5rem] font-bold leading-[1.1] relative z-10">
                                    Connect today
                                </h2>
                                <p className="md:text-[18px] text-gray-300 my-3">
                                    Get free API calls when you sign up
                                </p>
                                <div className="ml-auto">
                                    <button
                                        className="my-3 md:text-[17px] text-gray-300 bg-black px-5 py-3 rounded-lg  hover:bg-blue-500 hover:border-gray-300 hover:text-white  ">
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer dark />
            <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
        </div>
    );
};

export default Demo;