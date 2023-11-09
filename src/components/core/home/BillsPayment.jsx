import React, { useEffect } from 'react';
import { particles } from "@/lib/utils";
import Airtime from "@/components/core/shared/Airtime";
import Cable from "@/components/core/shared/Cable";

const BillsPayment = () => {
  useEffect(() => {
    particles()
  }, []);

  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-black md:bg-right bg-cover font-poppins">
      <div className="absolute inset-0" id="particles-js"></div>
      <div
        className="container mx-auto md:grid grid-cols-12 py-[100px] md:py-[160px] xl:pb-[250px] xl:pt-[100px] overflow-hidden md:relative md:z-10">
        <div
          className="md:pt-[50px] px-4 md:px-0 col-span-10 text-center col-start-2 z-50 relative flex flex-col justify-center">
          <h2
            className="text-white leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
          >
            Intergrate APIs <br />for bills payments
          </h2>
          <p
            className="text-[18px] py-8 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, sed!
          </p>
          <div>
            <button
              className="text-[17px] text-black bg-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-white hover:bg-transparent hover:text-white">
              Get started
            </button>
          </div>
        </div>
        <div>
          <div
            className="absolute h-[300px] w-[300px] bg-[#77595D] rounded-full left-[0rem] md:left-[30%] blur-[6rem] opacity-40">
          </div>
          <div
            className="absolute h-[300px] w-[300px] bg-[#FBFBFB] rounded-full right-[-1rem] md:right-[30%] top-[10rem] blur-[5.5rem] opacity-20">
          </div>
          <div
            className="absolute h-[150px] w-[150px] bg-[#CE99FF] rounded-full top-[25rem] right-[8rem] md:right-[45%] blur-[5rem] opacity-40">
          </div>
        </div>
        <div className="animate-bounceTwo absolute right-[7%] top-[5%] hidden md:block">
          <Airtime />
        </div>
        <div className="animate-bounceTwo delay-two absolute left-[7%] top-[50%] hidden md:block">
          <Cable />
        </div>
      </div>
    </div>

  );
};

export default BillsPayment;