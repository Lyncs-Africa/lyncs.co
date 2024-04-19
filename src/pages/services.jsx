import Footer from "@/components/global/footer/Footer";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Navbar from "@/components/global/navbar/Navbar";
import {useEffect, useLayoutEffect, useState} from "react";
import Link from "next/link";
import services from "@/lib/services";
import ServiceIcon from "@/components/core/shared/ServiceIcon";

const Services = () => {
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

  const launchShopWidget = () => window.LyncsWidget.open("a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0")

  return (
    <div className="h-full">
      <Navbar scrollTop={scrollTop}/>

      <div
        className="py-[100px] md:py-[160px] xl:pt-[120px] xl:pb-[220px] md:gap-8 overflow-hidden bg-[#EEEEEE] font-satoshiMedium w-full flex flex-col justify-center items-center md:relative">
        <div className="w-full p-7 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-black text-center font-satoshi font-bold">
            Experience the unique lyncs widget
          </h1>

          <p className="sm:text-[16px] font-satoshiMedium text-md py-2 text-gray-500 mb-7 px-4">

            Manage and customize your services as you like
          </p>

        </div>

        <div className="w-full flex flex-col justify-center items-center self-center max-w-7xl relative px-5 md:px-0">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {
              services.map((service) => (
                <div key={service.id}
                     className="py-4 bg-white border-gray-200 rounded min-h-[100px] shadow">
                  <div className="px-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <ServiceIcon service={service.alias}/>
                      <p className="text-black text-[17px]">{service.name}</p>
                    </div>

                  </div>
                  <p className="px-4 text-gray-500 text-[13px] py-4">{service.subtext}</p>
                  <hr className="border-gray-300"/>
                  <div className="mt-4 px-4 flex items-center gap-4">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm border border-blue-500">
                      View Docs
                    </button>
                  </div>
                </div>
              ))
            }

          </div>
        </div>


        <section className="w-full max-w-7xl mt-24 p-4">
          <div
            className=" md:p-20 p-5 gap-10 relative flex-wrap hidden md:flex flex-row justify-between items-center w-full rounded-lg font-satoshiMedium bg-blue-600 text-white bg-pattern bg-no-repeat bg-right">
            <h1 className="font-satoshiBold text-4xl">Get free API calls when<br/> you sign up</h1>
            <Link href="https://app.lyncs.africa/register" target="_blank"
                  className="bg-white text-[16px] font-medium border text-black hover:bg-transparent hover:text-white ease transition-all rounded-md hover:opacity-80">
              <button className="dropdown-content py-3 px-5">
                Get Started
              </button>
            </Link>

          </div>

          <div
            className="block md:hidden md:px-0 md:pb-[70px] relative overflow-hidden font-satoshiMedium">
            <div
              className="bg-[url('/images/abstract.jpg')] bg-cover md:text-center col-start-2 col-span-10 md:w-[80%] mx-z p-10 md:p-24 rounded-lg md:rounded-[32px] relative overflow-hidden">
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
      <Footer dark/>
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop}/>
    </div>
  );
};

export default Services;
