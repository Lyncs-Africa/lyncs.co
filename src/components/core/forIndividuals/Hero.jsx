import React, {useEffect, useRef} from "react";
import Typed from "typed.js";

function Hero({isOpen, handleIsWidgetLoading}) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Book flight tickets",
        "Stream share",
        "Shop online",
        "Pay for cleaning",
        "Pay for laundry",
        "Pay for rides",
        "Buy bus tickets",
        "Buy online courses",
        "Pay for meals",
        "Book hotels",
        "Buy event tickets",
        "Purchase airtime",
        "Purchase data",
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
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0/?isSelectOpen=true&view=view-one', onReady: () => {
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
        <div className="xl:block hidden absolute bottom-[-10rem] right-[-2px] w-full z-30">
          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 265.34">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path className="cls-1"
                      d="M.17,10.74C43.4,20,87.41,29.54,125.87,51.36c49.88,28.29,86.24,81.56,141.49,99.85a115.56,115.56,0,0,0,71,.33c20.72-6.65,39.05-19,57.45-30.63,34.42-21.75,71.93-40,112.69-45.4,83.85-11.09,164.77,46.12,248.13,17.9,44.46-15,78-52.21,120.65-71.76A236.83,236.83,0,0,1,1000,1.25l-1.71,264.09H.2C.2,180.48-.23,95.6.17,10.74Z"/>
              </g>
            </g>
          </svg>

        </div>
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
