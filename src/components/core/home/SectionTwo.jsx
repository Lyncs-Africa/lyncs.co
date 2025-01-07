import React, {useEffect, useRef} from "react";
import Link from "next/link";
import Typed from "typed.js";

function SectionTwo({handleIsWidgetLoading}) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Purchase Delivery Bikes,",
        "Purchase Keke Napep,",
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

  const handleWait= (service) => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: `/waitlist/?service=${service}&launchDate=2025-04-01T00:00:00`,
        onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

  return (
    <>
      <div
        className="min-h-screen md:min-h-full 2xl:min-h-[90vh] md:grid font-satoshiMedium grid-cols-12 py-[70px] md:py-[160px] xl:pt-[110px] xl:pb-[270px] md:gap-8 overflow-hidden bg-[#fff] md:relative md:z-10 px-1 md:px-0">
        <div className="md:block md:-bottom-24 hidden absolute xl:bottom-[-10rem] absolute bottom-[-10rem] w-full z-30">
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
            <p className="min-h-[125px] md:min-h-0">
               <span ref={el}
                     className="min-h-[100px] relative bg-clip-text text-transparent bg-gradient-to-r from-[#00AFEF] to-[#0915BA] after:inline after:text-blue-500 w-max text-left"
               >
             Purchase Delivery Bikes
            </span>
            </p>
            <span className="relative text-black">Pay back small small</span>
          </h2>

          <p className="md:text-[17px] text-[16px] py-5 text-slate-800 md:px-4">
            Own your delivery bike or Keke napep now and enjoy affordable monthly payments.
          </p>

          <div className="flex flex-row md:justify-center items-center gap-7 z-30 w-full">
            <button onClick={() => handleWait('Keke Napep')}
                  className="bg-black border text-[16px] text-white px-8 text-center py-4 rounded-lg hover:bg-transparent hover:border-black hover:text-black ease transition-all">
              Join the waitlist
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default SectionTwo;
