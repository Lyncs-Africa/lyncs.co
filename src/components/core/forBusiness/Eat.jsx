import React from 'react';
import Food from "@/components/core/shared/Food";

const Eat = ({handleIsWidgetLoading}) => {
  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover font-satoshiMedium">
      <div
        className="md:grid grid-cols-12 py-[100px] md:py-[70px] md:pt-0 overflow-hidden md:relative md:z-10">
        <div
          className="container mx-auto px-4 md:px-0 col-span-10 text-center col-start-2 z-50 relative flex flex-col justify-center">
          <h2
            className="text-bold font-satoshiBold leading-[1] text-[3.5rem] md:text-[5rem] font-bold"
          >
            Bus ticketing for <br className="hidden md:block"/>Inter city trips
          </h2>
          <p
            className="text-[18px] py-8 text-black">
            Book bus tickets locally and nationwide at the best rates.<br className="hidden md:block"/> Filter by multiple options to find the perfect ride for you.
          </p>
          <div className="flex flex-col gap-20 md:gap-8 md:grid-cols-2 md:grid xl:grid-cols-4 w-[75%] mx-auto my-[5rem]">
            <Food handleIsWidgetLoading={handleIsWidgetLoading} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Eat;
