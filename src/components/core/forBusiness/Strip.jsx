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
      handleIsWidgetLoading(false); // Ensure loading state is reset in case of error
    }
  };

  return (
    <div
      className="block py-[100px] px-4 md:px-0 md:pb-[70px] relative bg-black overflow-hidden font-satoshiMedium">
      <div className="md:grid grid-cols-12">
        <div className="container mx-auto bg-[url('/images/abstract.jpg')] bg-cover md:text-center col-start-2 col-span-10 md:w-[80%] mx-auto bg-black p-10 md:p-24 rounded-lg md:rounded-[32px] relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-800 opacity-70"></div>
          <div className="relative">
            <h2 className="text-gray-300 text-[3rem] md:text-[3.5rem] font-bold leading-[1.1] relative z-10">
              Refer a friend
            </h2>
            <p className="md:text-[18px] text-gray-300 my-3">
              Refer a friend and earn a bonus for each successful referral!
            </p>
            <div className="ml-auto mt-4">
              <button onClick={handleOpen} className="my-3 md:text-[17px] text-gray-300 bg-black px-5 py-3 rounded-lg hover:bg-white hover:border-gray-300 hover:text-black">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strip;
