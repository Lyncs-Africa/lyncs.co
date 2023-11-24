import ClientOnly from "@/components/global/ClientOnly";
import Footer from "@/components/global/footer/Footer";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Navbar from "@/components/global/navbar/Navbar";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";

const Page = () => {
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

    return (
        <div className="h-full">
            <Navbar scrollTop={scrollTop} />

            <div className="py-[100px] md:py-[160px] xl:pt-[120px] xl:pb-[220px] md:gap-8 overflow-hidden bg-[#fbfbfb] font-satoshiMedium w-full flex flex-col justify-center items-center md:relative">
                <div className="w-full p-7 flex flex-col justify-center items-center">
                    <h1 className="text-4xl text-black font-satoshiBlack">Choose your plan</h1>
                    <p className="sm:text-[16px] font-satoshiMedium text-md py-4 text-gray-500 mb-10 px-4">
                        Tailored pricing solutions to align with your business requirements.
                    </p>
                </div>

                <section className="w-full flex flex-col justify-center items-center self-center max-w-7xl relative">

                    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-10 container self-center md:p-0 p-5">

                        <div className="px-14 py-10 rounded-2xl bg-white shadow-xl w-full h-full">
                            <h2 className="font-medium leading-relaxed text-xl font-satoshiMedium w-full text-center">Small Business</h2>

                            <p className="py-7 text-4xl font-black font-satoshiBlack w-full text-center">
                                Free
                            </p>

                            <ul className="w-full list-disc text-gray-500 space-y-4 text-lg mt-7">
                                <li>Free Setup Cost </li>
                                <li>Free Live APIs    </li>
                                <li>Sales Commission </li>
                                <li>Embed Online Shopping </li>
                                <li>Embed Food Ordering </li>
                                <li>Embed Cab Hailing </li>
                                <li>Embed Package Delivery</li>
                                <li>Embed Ticket Buying</li>
                            </ul>

                            <Link href="https://app.lyncs.africa/register"
                                className="bg-blue-600 text-[16px] dropdown-content font-medium text-white py-5 rounded-md hover:opacity-80">
                                <button className="mt-14 dropdown-content w-full">
                                    Get Started
                                </button>
                            </Link>
                        </div>

                        {/* Medium Business */}
                        <div className="px-14 pb-10 pt-16 rounded-2xl translate-y-0 shadow-2xl md:-translate-y-10 bg-blue-600 text-gray-100 dropdown-content w-full h-full overflow-hidden">
                            <div className="bg-yellow-500 font-medium absolute left-6 top-0 text-white p-4 rounded-b-lg">Best value</div>
                            <h2 className="font-medium leading-relaxed text-xl font-satoshiMedium w-full text-center">Medium Business</h2>

                            <p className="py-7 text-white text-4xl font-black font-satoshiBlack w-full text-center">
                                Free
                            </p>

                            <ul className="w-full list-disc space-y-4 text-lg mt-7">
                                <li>Free Setup Cost </li>
                                <li>Free Live APIs    </li>
                                <li>Sales Commission </li>
                                <li>Embed Online Shopping </li>
                                <li>Embed Food Ordering </li>
                                <li>Embed Cab Hailing </li>
                                <li>Embed Package Delivery</li>
                                <li>Embed Ticket Buying</li>
                            </ul>

                            <Link href="https://app.lyncs.africa/register"
                                className="bg-white text-blue-600 text-[16px] dropdown-content font-medium py-5 rounded-md hover:opacity-95 ease transition-all">
                                <button className="mt-16 dropdown-content w-full">
                                    Get Started
                                </button>
                            </Link>
                        </div>

                        {/* Large Business */}
                        <div className="px-14 py-10 rounded-2xl bg-white shadow-xl w-full h-full">
                            <h2 className="font-medium leading-relaxed text-xl font-satoshiMedium w-full text-center">Large Business</h2>

                            <p className="py-7 text-4xl font-black font-satoshiBlack w-full text-center">
                                Free
                            </p>

                            <ul className="w-full list-disc text-gray-500 space-y-4 text-lg mt-7">
                                <li>Free Setup Cost </li>
                                <li>Free Live APIs    </li>
                                <li>Sales Commission </li>
                                <li>Embed Online Shopping </li>
                                <li>Embed Food Ordering </li>
                                <li>Embed Cab Hailing </li>
                                <li>Embed Package Delivery</li>
                                <li>Embed Ticket Buying</li>
                            </ul>

                            <Link href="https://app.lyncs.africa/register"
                                className="bg-white text-[16px] dropdown-content font-medium border text-black hover:bg-black hover:text-white ease transition-all py-5 rounded-md hover:opacity-80">
                                <button className="mt-14 dropdown-content w-full">
                                    Get Started
                                </button>
                            </Link>
                        </div>

                    </div>
                </section>

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

export default Page;