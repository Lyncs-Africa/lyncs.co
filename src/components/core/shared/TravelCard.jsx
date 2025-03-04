import React, {useEffect, useRef} from 'react';
import Typed from "typed.js";

const TravelCard = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "41B27309GTR",
        "87J27309FTQ",
        "98DS0314MGD",
        "63EU02901PM",
        "77FG9234DS9",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      loopCount: Infinity,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="bg-[#FBFBFB] w-[300px] shadow-lg rounded-lg hidden xl:block">
      <div className="p-6">
        <p className="text-gray-800 text-2xl font-bold">Travel</p>
        <div className="my-2 flex flex-col gap-2">
          <div className="h-[20px] w-[100px] bg-gray-200 rounded"></div>
          <div className="h-[20px] w-[150px] bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="py-4 rounded-t-[34px] bg-[#282A30]">
        <div className="flex items-center gap-4 p-6">
          <img alt="Lyncs icon" className="w-[50px]" src="/images/face-three.png"/>
          <div>
            <p className="text-gray-50 text-2xl">Sophia Bakare</p>
            <p className="text-gray-200">Passenger</p>
          </div>
        </div>
        <hr className="border-[1px] border-dotted border-gray-500"/>
        <div className="grid grid-cols-4 gap-2 p-6">
          <div>
            <p className="text-gray-200 text-sm">Gate</p>
            <p className="text-gray-50 text-[17px]">B2</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm">Seat</p>
            <p className="text-gray-50 text-[17px]">19A</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm">Flight No</p>
            <p className="text-gray-50 text-[17px]">RD42</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm">Class</p>
            <p className="text-gray-50 text-[17px]">Economy</p>
          </div>
        </div>
        <div className="px-6 flex flex-col items-center">
          <img alt="Lyncs serial number" src="/images/serial-number.png"/>
          <p ref={el} className="text-gray-200 pt-2 tracking-[7px] text-sm min-h-[25px]">87J27309FTQ</p>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
