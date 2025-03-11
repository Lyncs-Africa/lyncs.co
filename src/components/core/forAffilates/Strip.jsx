import React from 'react';
import {FaPlus} from "react-icons/fa6";
import CountUp from 'react-countup';

const Strip = () => {
  return (
    <div
      className="md:min-h-full md:grid font-satoshiMedium grid-cols-12 py-[100px] md:py-[160px] xl:pt-[110px] xl:pb-[280px] bg-[url('/images/8.jpg')] bg-cover bg-center md:gap-8 overflow-hidden relative px-1 md:px-0">
      <div className="absolute inset-0 bg-slate-800 opacity-90"/>
      <div className="xl:block hidden absolute bottom-[-10rem] right-0 w-full z-30">
        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 265.34">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path className="cls-1"
                    d="M.17,10.74C43.4,20,87.41,29.54,125.87,51.36c49.88,28.29,86.24,81.56,141.49,99.85a115.56,115.56,0,0,0,71,.33c20.72-6.65,39.05-19,57.45-30.63,34.42-21.75,71.93-40,112.69-45.4,83.85-11.09,164.77,46.12,248.13,17.9,44.46-15,78-52.21,120.65-71.76A236.83,236.83,0,0,1,1000,1.25l-1.71,264.09H.2C.2,180.48-.23,95.6.17,10.74Z"/>
            </g>
          </g>
        </svg>

      </div>
      <div className="col-span-10 col-start-2 relative md:text-center px-4 md:px-0 md:w-[80%] mx-auto">
        <h2
          className="py-[50px] text-white leading-[1.3] text-center text-[3.5rem] md:text-[5rem] font-bold"
        >
          Start Booking, <br className="md:hidden block"/> <span className="bg-white text-black p-2 rounded">Start Earning</span>
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <div>
            <p className="md:text-[3.5rem] text-[2.5rem] text-white flex items-center justify-center gap-2">
              <CountUp start={0} end={150}  duration={5} /> <span><FaPlus /></span>
            </p>
            <p className="md:text-[20px] text-[16px] text-white text-center">
              Existing affiliates
            </p>
          </div>
          <div>
            <p className="md:text-[3.5rem] text-[2.5rem] text-white flex items-center justify-center gap-2">
              <CountUp start={0} end={200}  duration={5} /> <span><FaPlus /></span>
            </p>
            <p className="md:text-[20px] text-[16px] text-white text-center">
              Active airlines
            </p>
          </div>
          <div>
            <p className="md:text-[3.5rem] text-[2.5rem] text-white flex items-center justify-center gap-2">
              <CountUp start={0} end={5}  duration={5} />K <span><FaPlus /></span>
            </p>
            <p className="md:text-[20px] text-[16px] text-white text-center">
              Travel destinations
            </p>
          </div>
          <div>
            <p className="md:text-[3.5rem] text-[2.5rem] text-white flex items-center justify-center gap-2">
              <CountUp start={0} end={200}  duration={5} /> <span><FaPlus /></span>
            </p>
            <p className="md:text-[20px] text-[16px] text-white text-center">
              Travel deals
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Strip;
