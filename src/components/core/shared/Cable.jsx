import React from 'react';

const Cable = () => {
  return (
    <div className="w-[200px] rounded-lg bg-gray-300 shadow-lg p-6 relative">
      <p className="text-gray-800 text-2xl font-bold">Cable Tv</p>
      <div className="my-2 flex flex-col gap-2">
        <div className="bg-slate-900 p-4 rounded-lg mt-4 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg flex items-center">
            <img src="/images/providers/gotv.png" className="rounded-lg w-[70px]" alt="logo" width="100%"/>
          </div>
          <div className="bg-white rounded-lg flex items-center">
            <img src="/images/providers/startimes.png" className="ride-logo w-[70px]" alt="logo" width="100%"/>
          </div>
          <div className="col-span-2 h-[50px] bg-white overflow-hidden rounded-lg flex justify-center items-center">
            <img src="/images/providers/dstv.png" className="ride-logo w-[90px]" alt="logo"/>
          </div>
        </div>
         </div>
    </div>
  );
};

export default Cable;