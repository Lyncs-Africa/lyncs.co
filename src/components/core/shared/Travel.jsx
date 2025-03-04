import React, {useEffect, useRef} from 'react';
import Typed from "typed.js";

const Travel = () => {
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
    <div>
      <div>
        <div className="md:flex items-center gap-4 p-6">
          <img alt="Lyncs icon" className="w-[50px]" src="/images/face-1.png"/>
          <div>
            <p className="text-gray-50 text-2xl flex gap-2"><span className="hidden xl:block">Chidera</span> Ezeh</p>
            <p className="text-gray-200">Passenger</p>
          </div>
        </div>
        <hr className="border-[1px] border-dotted border-gray-500"/>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 p-6">
          <div>
            <p className="text-gray-200 text-sm">Gate</p>
            <p className="text-gray-50 text-[17px]">B2</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm">Seat</p>
            <p className="text-gray-50 text-[17px]">19A</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm">Class</p>
            <p className="text-gray-50 text-[17px]">Economy</p>
          </div>
        </div>
        <div className="px-6 flex flex-col items-center">
          <img alt="Lyncs serial number" className="hidden md:block h-[30px] w-full object-cover" src="/images/serial-number.png"/>
          <p ref={el} className="text-gray-200 pt-2 tracking-[7px] md:text-sm min-h-[25px] text-[9px]">87J27309FTQ</p>
        </div>
      </div>
    </div>
  );
};

export default Travel;
