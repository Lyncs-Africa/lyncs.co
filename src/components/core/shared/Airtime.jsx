import React from 'react';

const Airtime = () => {
  return (
    <div className="w-[200px] rounded-lg bg-gray-300 shadow-lg p-6 relative">
      <p className="text-gray-800 text-2xl font-bold">Airtime & data</p>
      <div className="my-2 flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-5 mt-4">
          <img className="w-[60px] rounded-lg" src="/images/providers/mtn.png"/>
          <img className="w-[60px] object-cover rounded-lg" src="/images/providers/glo.png"/>
          <img className="w-[60px] rounded-lg" src="/images/providers/airtel.png"/>
          <img className="w-[60px] rounded-lg" src="/images/providers/9mobile.png"/>
        </div>
      </div>
    </div>
  );
};

export default Airtime;