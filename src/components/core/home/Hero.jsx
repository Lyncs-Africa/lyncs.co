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
        "online store",
        "food ordering ",
        "flight booking",
        "delivery",
        "event booking",
        "e-hailing ride",
        // "bill payment",
      ],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleOpen = () => {
    window.LyncsWidget.open("6a57c8cb21584e478c91d735de8697cca853be3435198181bba2a8")

  }

  return (
    <>
      <div
        className="md:grid grid-cols-12 py-[100px] md:py-[160px] xl:pt-[110px] xl:pb-[220px] md:gap-8 overflow-hidden bg-[#fbfbfb] font-poppins md:relative md:z-10 px-4 md:px-0">
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
        <div className="col-span-10 col-start-2 z-30 relative text-center">
          <h2
            className="text-blue-500 text-[4rem] md:text-[6rem] leading-[1.1] font-semibold pt-[50px] relative min-h-[160px]"
          >
            {/* <span className="text-[18px] relative md:text-blue-500 uppercase tracking-wider">
                  For merchants
                </span><br /> */}
            <span className="relative md:text-black pr-2">
              Embed<br />
            </span>
            <span ref={el}
              className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#00AFEF] to-[#0915BA] after:animate-blink after:content-['|'] after:inline after:text-blue-500"> </span><br />
            <span className="relative text-black">into your business</span>
          </h2>

          <p className="text-[18px] py-4 text-gray-800 mb-10">
            Add commercial services to your mobile or web app in minutes not <b className="line-through text-blue-500">months</b>
          </p>

          <div className="flex flex-row justify-center items-center gap-7 z-30 w-full">
            <Link target="_blank" href="https://lyncs-website.vercel.app"
              className="bg-black border text-[16px] text-white px-5 text-center py-4 rounded-[12px] hover:border hover:border-black hover:bg-transparent hover:text-black ease transition-all">
              Get started
            </Link>
            <div onClick={handleOpen}
              className="bg-transparent border border-black text-black text-[16px] px-5 py-4 rounded-[12px] hover:border hover:border-black hover:bg-black cursor-pointer w-max ease transition-all hover:text-white">
              Get demo
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Hero;
