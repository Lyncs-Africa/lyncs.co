import ClientOnly from "@/components/global/ClientOnly";
import Footer from "@/components/global/footer/Footer";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Navbar from "@/components/global/navbar/Navbar";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useLayoutEffect, useState } from "react";

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

            <div className="py-[100px] md:py-[160px] xl:pt-[120px] xl:pb-[220px] md:gap-8 overflow-hidden bg-[#fbfbfb] font-poppins md:relative">
                <div className="w-full p-7 flex flex-col justify-center items-center">
                    <h1 className="text-4xl text-black font-satoshiBlack">Choose your plan</h1>
                    <p className="sm:text-[16px] font-satoshiMedium text-md py-4 text-gray-500 mb-10 px-4">
                        Tailored pricing solutions to align with your business requirements.</p>
                </div>

                <section className="w-full flex flex-col justify-center items-center">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-10 container self-center">
                        <div className="p-10  shadow-md rounded-lg bg-white">
                            <h2 className="font-medium leading-relaxed text-lg font-satoshiMedium">Small Business</h2>

                            <p className="py-7 text-lg">
                                These APIs can be particularly valuable for e-commerce platforms, price comparison websites,
                                or any application where real-time pricing information is critical. Developers can use the API to display current prices, compare costs across multiple vendors, or automate pricing updates within their applications.
                            </p>

                            <div className="self-center">
                                <img alt="" src="/images/save-money.png" className="mx-auto mt-7" />
                            </div>
                        </div>

                        <div className="w-full flex flex-col h-full">

                            <h2 className="font-semibold leading-relaxed  text-xl mb-7">Start your free plan now</h2>

                            <div className="px-10 py-4 bg-[#EE2E31] rounded-lg text-white">
                                <div className="w-full flex flex-row justify-between items-center">
                                    <p>Eat</p>
                                    <p>Free</p>
                                </div>
                                <p className="py-7 text-lg">
                                    These APIs can be particularly valuable for e-commerce platforms, price comparison websites,
                                    or any application where real-time pricing information is critical. Developers can use the API to display current prices, compare costs across multiple vendors, or automate pricing updates within their applications.
                                </p>

                                <div className="self-center">
                                    <img alt="" src="/images/save-money.png" className="mx-auto mt-7" />
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