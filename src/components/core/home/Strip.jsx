import React from 'react';
import Link from "next/link";

const Strip = ({handleIsWidgetLoading}) => {
  const handleOpen = () => {
    handleIsWidgetLoading(true);
    try {
      window.LyncsWidget.open({
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0/?isSelectOpen=true&view=view-one',
        onReady: () => {
          handleIsWidgetLoading(false);
        }
      });
    } catch (error) {
      console.error("Failed to open widget", error);
      handleIsWidgetLoading(false);
    }
  };

  return (
    <div
      className="block py-[100px] px-4 md:px-0 md:pb-[70px] relative bg-black font-satoshiMedium">
      <div className="md:grid grid-cols-12">
        <div className="container bg-cover col-start-2 col-span-10 md:w-[90%] mx-auto p-10 md:p-24 md:pb-0 rounded-lg relative md:-mt-64 gap-4 grid grid-cols-1 md:grid-cols-2 bg-slate-800">
          <img className="relative xl:-mt-60 -mt-36" src="/images/hands.png"/>
          <div className="relative">
            <h2 className="text-gray-300 text-[3rem] md:text-[3rem] font-bold leading-[1.1] relative z-10">
              Refer a friend
            </h2>
            <p className="md:text-[17px] text-gray-300">
              Refer a friend and earn a bonus for each successful referral!
            </p>
            <button onClick={handleOpen}
                    className="my-4 inline-flex items-center py-5 px-8 ms-2 text-small font-medium text-white bg-primary rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Get referral link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strip;
