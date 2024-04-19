import { Timeline, Text, Accordion } from '@mantine/core';
import Footer from "@/components/global/footer/Footer";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Navbar from "@/components/global/navbar/Navbar";
import { useEffect, useLayoutEffect, useState } from "react";
import { GitHub, Message } from '@mui/icons-material';
import Link from 'next/link';

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
                    <h1 className="text-4xl text-black font-satoshiBlack">Why choose us?</h1>
                    <p className="sm:text-[16px] font-satoshiMedium max-w-2xl text-center w-full text-md py-4 text-gray-500 mb-10 px-4">
                        Lyncs often come equipped with search features and filters that make it easy for users to find specific
                        products or narrow down options based on preferences, saving time and effort.
                    </p>
                </div>

                <section className="w-full flex flex-col justify-center items-center max-w-7xl">
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-20 md:px-0 px-5'>

                        <Timeline color="blue" active={4} lineWidth={2} bulletSize={30}>
                            <Timeline.Item title={<h1 className='font-bold text-xl'>Accessibility</h1>}>
                                <Text c="dimmed" size="md">
                                    Lyncs breaks down geographical barriers, allowing consumers to access products or services from vendors around the world.
                                    This global reach provides consumers with access to a broader market and unique products
                                </Text>
                            </Timeline.Item>

                            <Timeline.Item title={<h1 className='font-bold text-xl'>Wide product selection</h1>}>
                                <Text c="dimmed" size="md">
                                    Lyncs often have a vast array of products and services, providing consumers with a diverse selection to choose from.
                                    This variety is typically more extensive than what a physical store might offer.
                                </Text>
                            </Timeline.Item>

                            <Timeline.Item title={<h1 className='font-bold text-xl'>Convenience</h1>}>
                                <Text c="dimmed" size="sm">
                                    Lyncs allows users to shop anytime, anywhere, without the constraints of physical store hours. This convenience is particularly
                                    beneficial for individuals with busy schedules or those who prefer to shop from the comfort of their homes.
                                </Text>
                            </Timeline.Item>

                        </Timeline>

                        <img src='/images/lyncs-home.png' alt='' />
                    </div>
                </section>

                {/* frequently asked questions */}
                <section className="bg-white w-full flex flex-col justify-center text-[#222c3b] items-center mt-10 px-10 py-20">
                    <div className='w-full justify-start items-start max-w-5xl'>
                        <h1 className='text-3xl pl-20 pb-7 border-b font-medium'>Frequently Asked Questions</h1>
                        <Accordion defaultValue='1' className='mb-10 bg-white h-full'>
                            <Accordion.Item value="1" className='py-4'>
                                <Accordion.Control color='green'>
                                    <p className='text-xl font-medium'>What is Lyncs?</p>
                                </Accordion.Control>
                            </Accordion.Item>
                        </Accordion>
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
