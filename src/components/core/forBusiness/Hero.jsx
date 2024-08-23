import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Typed from "typed.js";

function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Flight <br class='block md:hidden'/> Booking",
        "Cab <br class='block md:hidden'/> Hailing",
        "Online <br class='block md:hidden'/> Shopping",
        "Food <br class='block md:hidden'/> Ordering",
        "Ticket <br class='block md:hidden'/> Buying",
        "Hotel <br class='block md:hidden'/> Booking",
        "Package <br class='block md:hidden'/> Delivery",
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

  const handleOpen = () => window.LyncsWidget.open({
    key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0'
  })

  return (
    <>
      <div
        className="min-h-screen md:min-h-full 2xl:min-h-[90vh] md:grid font-satoshiMedium grid-cols-12 py-[100px] md:py-[160px] xl:pt-[110px] xl:pb-[220px] md:gap-8 overflow-hidden bg-[#fbfbfb] md:relative md:z-10 px-1 md:px-0">
        <div className="xl:block hidden absolute bottom-[-10rem] w-full z-30">
          <svg fill="#000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 265.34">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path className="cls-1"
                      d="M.17,10.74C43.4,20,87.41,29.54,125.87,51.36c49.88,28.29,86.24,81.56,141.49,99.85a115.56,115.56,0,0,0,71,.33c20.72-6.65,39.05-19,57.45-30.63,34.42-21.75,71.93-40,112.69-45.4,83.85-11.09,164.77,46.12,248.13,17.9,44.46-15,78-52.21,120.65-71.76A236.83,236.83,0,0,1,1000,1.25l-1.71,264.09H.2C.2,180.48-.23,95.6.17,10.74Z"/>
              </g>
            </g>
          </svg>

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
        <div className="col-span-10 col-start-2 z-30 relative md:text-center w-full px-4 md:px-0">
          <h2
                 className="text-blue-500 font-satoshiBold text-[4rem] md:text-[6rem] leading-[1.1] font-semibold md:pt-[50px] relative min-h-[160px]"
               >

            <span className="relative text-black">
              Embed<br />
            </span>
                 <p className="min-h-[125px] md:min-h-0">
               <span ref={el}
                     className="min-h-[100px] relative bg-clip-text text-transparent bg-gradient-to-r from-[#00AFEF] to-[#0915BA] after:inline after:text-blue-500 w-max text-left"
               >
              Online store
            </span>
            </p>
            <span className="relative text-black">into your business</span>
          </h2>

          <p className="md:text-[17px] text-[16px] py-5 text-slate-800 mb-10 md:px-4">
            Add commercial services to your mobile or web app in <b className="line-through">months</b> minutes
          </p>

          <div className="flex flex-row md:justify-center items-center gap-7 z-30 w-full">
            <Link target="_blank" href="https://app.lyncs.africa/register"
              className="bg-black border text-[16px] text-white px-5 text-center py-4 rounded-[12px] ease transition-all">
              Get started
            </Link>
            <div onClick={handleOpen}
              className="bg-transparent border border-black text-black text-[16px] px-5 py-3 rounded-[12px] hover:border hover:border-black hover:bg-black cursor-pointer w-max ease transition-all hover:text-white">
              See demo
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Hero;
