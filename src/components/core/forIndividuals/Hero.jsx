import React, {useEffect, useRef, useState} from "react";
import Typed from "typed.js";
import {BounceLoader} from "react-spinners";

function Hero({isOpen, handleIsWidgetLoading}) {
  const el = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Book flight tickets",
        "Stream share",
        "Shop online",
        "Purchase airtime",
        "Purchase data",
        "Pay for cleaning",
        "Pay for laundry",
        "Pay for rides",
        "Buy bus tickets",
        "Buy online courses",
        "Pay for meals",
        "Book hotels",
        "Buy event tickets",
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

  const handleOpen = () => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0', onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

  return (
    <>
      <div
        className="min-h-screen md:grid font-satoshiMedium grid-cols-12 py-[100px] md:py-[160px] xl:pt-[110px] xl:pb-[220px] bg-slate-900 md:gap-8 overflow-hidden relative md:z-10 px-1 md:px-0">
        <div className={`${isOpen ? 'bg-white' : 'bg-view-one bg-cover bg-center opacity-20'} absolute inset-0`}>
        </div>
        {
          isOpen ? (
            <div className="xl:block hidden absolute bottom-[-10rem] w-full z-30">
              <img alt="curve" src="/images/lyncs-hero-curve.svg"/>
            </div>
          ) : (
            <div className="xl:block hidden absolute bottom-[-10rem] right-[-2px] w-full z-30">
              <img alt="curve" src="/images/lyncs-hero-curve-light.svg"/>
            </div>
          )
        }
        <div className="col-span-10 col-start-2 z-30 relative md:text-center w-full px-4 md:px-0 z-10">
          <h2
            className="mt-[50px] md:mt-0 text-blue-300 font-satoshiBold text-[4rem] md:text-[6rem] leading-[1.1] font-semibold md:pt-[50px] relative min-h-[160px]"
          >
            <p className="min-h-[125px] md:min-h-0">
            <span ref={el}
                  className={`${isOpen ? 'from-[#00AFEF] to-[#0915BA]' : 'from-[#00AFEF] to-blue-500'} bg-gradient-to-r text-transparent min-h-[100px] relative bg-clip-text after:inline after:text-blue-500 w-max text-left`}
            >
            Book flight tickets,
            </span>
            </p>
            <span
              className={`${isOpen ? 'text-black' : 'text-white'} min-h-[100px] relative bg-clip-text after:inline after:text-blue-500 w-max text-left`}>
            In Elegant Fashion
            </span>
          </h2>

          <p
            className={`${isOpen ? 'text-slate-800' : 'text-slate-300'} md:text-[17px] text-[16px] py-5 mb-10 md:px-4`}>
            Access a range of services, all in one place
          </p>

          <div className="flex flex-row md:justify-center items-center gap-7 z-30 w-full">
            <button onClick={handleOpen}
                    className={`${isOpen ? 'bg-black text-white' : 'bg-white text-black hover:border-white hover:bg-transparent hover:text-white'} cursor-pointer border text-[17px] px-8 text-center py-3 rounded border ease transition-all`}>
              Get started
            </button>
          </div>

        </div>
      </div>

    </>
  );
}

export default Hero;
