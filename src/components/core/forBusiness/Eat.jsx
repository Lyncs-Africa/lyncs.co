import React from 'react';
import Food from "@/components/core/shared/Food";

const Eat = () => {
  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover min-h-[100vh] font-satoshiMedium">
      <div className="xl:block hidden absolute bottom-[-5rem] w-full z-30">
        <img alt="curve" src="/images/lyncs-hero-curve.svg" />
      </div>
      <div
        className="md:grid grid-cols-12 py-[100px] md:py-[160px] xl:pb-[25rem] overflow-hidden md:relative md:z-10">
        <div
          className="container mx-auto px-4 md:px-0 col-span-10 text-center col-start-2 z-50 relative flex flex-col justify-center">
          <h2
            className="text-bold font-satoshiBold leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
          >
            Integrate APIs <br /> for food delivery
          </h2>
          <p
            className="text-[18px] py-8 text-black">
            Build a complete food-ordering service within your app
          </p>
          <div className="flex flex-col gap-16 md:grid-cols-2 md:grid xl:grid-cols-4 gap-8 w-[75%] mx-auto my-[5rem]">
            <Food />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Eat;
