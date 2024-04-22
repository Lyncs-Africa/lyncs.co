import React from 'react';

const Strip = () => {
  return (
    <div
      className="md:grid font-satoshiMedium grid-cols-12 py-[100px] md:py-[160px] xl:pt-[110px] xl:pb-[220px] bg-slate-950 md:gap-8 overflow-hidden relative md:z-10 px-1 md:px-0">
      <div className="bg-view-three bg-cover bg-bottom absolute opacity-50 inset-0"></div>
      <div className="xl:block hidden absolute bottom-[-10rem] right-[-2px] w-full z-30">
        <svg fill="#F1F1F8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 265.34">
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
          className="text-blue-300 font-satoshiBold text-[4rem] md:text-[4rem] leading-[1.1] font-semibold pt-[50px] relative min-h-[160px]"
        >
               <span
                     className="min-h-[100px] relative bg-clip-text text-white after:inline after:text-blue-500 w-max text-left"
               >
            Monetize your influence<br className="hidden md:block"/> by becoming an affiliate
            </span>
        </h2>

        <p className="md:text-[17px] text-[16px] py-5 text-slate-300 mb-10 md:px-4">
          Increase your earnings with each referral you make
        </p>

        <div className="flex flex-row md:justify-center items-center gap-7 z-30 w-full">
          <div
               className="cursor-pointer bg-white border text-[17px] text-black px-8 text-center py-3 rounded border ease transition-all hover:border-white hover:bg-transparent hover:text-white">
            Get started
          </div>
        </div>

      </div>
    </div>

  );
};

export default Strip;
