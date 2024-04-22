import React, {useEffect, useRef} from "react";
import Typed from "typed.js";
import Link from "next/link";

function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Make up to a 100k daily,",
        "Need cash on demand?",
        "Make extra cash everyday,"
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


  return (
    <>
      <div
        className="min-h-screen md:grid font-satoshiMedium grid-cols-12 py-[100px] md:py-[160px] xl:pt-[110px] xl:pb-[220px] bg-slate-900 md:gap-8 overflow-hidden relative md:z-10 px-1 md:px-0">
        <div className="bg-view-two bg-cover bg-center absolute opacity-50 inset-0">
        </div>
        <div className="xl:block hidden absolute bottom-[-10rem] right-[-2px] w-full z-30">
          <img alt="curve" src="/images/lyncs-hero-curve-light.svg"/>
        </div>
        <div className="col-span-10 col-start-2 z-30 relative md:text-center w-full px-4 md:px-0 z-10">
          <h2
            className="text-blue-300 font-satoshiBold text-[4rem] md:text-[6rem] leading-[1.1] font-semibold pt-[50px] relative min-h-[160px]"
          >
            <p className="min-h-[185px] md:min-h-0">
            <span ref={el}
                     className="min-h-[100px] relative bg-clip-text text-white after:inline after:text-blue-500 w-max text-left"
               >
            Make up to a 100k daily
            </span>
            </p>
            <span
              className="min-h-[100px] relative bg-clip-text text-white after:inline after:text-blue-500 w-max text-left">
            Become an affiliate
            </span>
          </h2>

          <p className="md:text-[17px] text-[16px] py-5 text-slate-300 mb-10 md:px-4">
            Earn passive income by becoming an affiliate with lyncs
          </p>

          <div className="flex flex-row md:justify-center items-center gap-7 z-30 w-full">
            <Link href="https://app.lyncs.africa/register" target="_blank"
                 className="cursor-pointer bg-white border text-[17px] text-black px-8 text-center py-3 rounded border ease transition-all hover:border-white hover:bg-transparent hover:text-white">
              Get started
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Hero;
