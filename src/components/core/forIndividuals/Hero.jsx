import React, {useEffect, useRef} from "react";
import Typed from "typed.js";

function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Book flight tickets,",
        "Stream Share,",
        "Shop from online stores,",
        "Buy data and airtime,",
        "Order cleaning services,",
        "Order washing services,",
        "Pay for rides,",
        "Buy bus tickets,",
        "Buy online courses,",
        "Pay for meals,",
        "Book hotels",
        "Buy event tickets,",
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

  const handleOpen = () => window.LyncsWidget.open("a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0")

  return (
    <>
      <div
        className="min-h-screen md:grid font-satoshiMedium grid-cols-12 py-[100px] md:py-[160px] xl:pt-[110px] xl:pb-[220px] bg-slate-900 md:gap-8 overflow-hidden md:relative md:z-10 px-1 md:px-0">
        <div className="bg-view-one bg-cover bg-center absolute opacity-20 inset-0">

        </div>
        <div className="xl:block hidden absolute bottom-[-10rem] right-[-2px] w-full z-30">
          <img alt="curve" src="/images/lyncs-hero-curve-light.svg"/>
        </div>
        <div className="col-span-10 col-start-2 z-30 relative md:text-center w-full px-4 md:px-0 z-10">
          <h2
            className="text-blue-300 font-satoshiBold text-[4rem] md:text-[6rem] leading-[1.1] font-semibold pt-[50px] relative min-h-[160px]"
          >
            <span
              className="min-h-[100px] relative bg-clip-text text-white after:inline after:text-blue-500 w-max text-left">
           Don't just
            </span>
            <p className="min-h-[125px] md:min-h-0">
            <span ref={el}
                  className="min-h-[100px] relative bg-clip-text text-transparent bg-gradient-to-r from-[#00AFEF] to-blue-500 after:inline after:text-blue-500 w-max text-left"
            >
            Book flight tickets,
            </span>
            </p>
            <span
              className="min-h-[100px] relative bg-clip-text text-white after:inline after:text-blue-500 w-max text-left">
           Go and prosper
            </span>
          </h2>

          <p className="md:text-[17px] text-[16px] py-5 text-slate-300 mb-10 md:px-4">
            Access a range of services, all in one place
          </p>

          <div className="flex flex-row md:justify-center items-center gap-7 z-30 w-full">
            <div onClick={handleOpen}
                 className="cursor-pointer bg-white border text-[17px] text-black px-8 text-center py-3 rounded border ease transition-all hover:border-white hover:bg-transparent hover:text-white">
              Get started
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Hero;
