import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Typed from "typed.js";

function Hero() {
  const el = useRef(null);
  {/* <div className="flex flex-row justify-center items-center gap-1 flex-nowrap w-full mt-4">
            <img src="/images/clan-logo.jpg" alt="brand_logo" className="w-20 rounded-full border-2" />
          </div> */}
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Online Shopping",
        "Food Ordering",
        "Cab Hailing",
        "Flight Booking",
        "Ticket Buying",
        "Hotel Booking",
        "Package Delivery",
      ],
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleOpen = () => window.LyncsWidget.open("6a57c8cb21584e478c91d735de8697cca853be3435198181bba2a8")

  return (
    <>
      <div
        className="md:grid font-satoshiMedium grid-cols-12 py-[100px] md:py-[160px] xl:pt-[110px] xl:pb-[220px] md:gap-8 overflow-hidden bg-[#fbfbfb] md:relative md:z-10 px-1 md:px-0">
        <div className="xl:block hidden absolute bottom-[-10rem] w-full z-30">
          <img alt="curve" src="/images/lyncs-hero-curve.svg" />
        </div>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="col-span-10 col-start-2 z-30 relative text-center w-full">
          <h2
            className="text-blue-500 font-satoshiBold text-[3.5rem] md:text-[6rem] leading-[1.1] font-semibold pt-[50px] relative min-h-[160px]"
          >

            <span className="relative text-black">
              Embed<br />
            </span>
            <span ref={el}
              className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#00AFEF] to-[#0915BA] after:inline after:text-blue-500 w-max text-left"
            >
              Online store
            </span><br />
            <span className="relative text-black">into your business</span>
          </h2>

          <p className="text-[16px] text-md py-4 text-gray-800 mb-10 px-4">
            Add commercial services to your mobile or web app in minutes not <b className="line-through text-blue-500">months</b>
          </p>

          <div className="flex flex-row justify-center items-center gap-7 z-30 w-full">
            <Link target="_blank" href="https://app.lyncs.africa/register"
              className="bg-black border text-[16px] text-white px-5 text-center py-4 rounded-[12px] hover:border hover:border-black hover:bg-transparent hover:text-black ease transition-all">
              Get started
            </Link>
            <div onClick={handleOpen}
              className="bg-transparent border border-black text-black text-[16px] px-5 py-4 rounded-[12px] hover:border hover:border-black hover:bg-black cursor-pointer w-max ease transition-all hover:text-white">
              See demo
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Hero;
