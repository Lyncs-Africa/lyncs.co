import React from 'react';

const StreamShare = () => {
  return (
    <div className="w-[200px] rounded-lg bg-[#FBFBFB] shadow-lg p-6 relative">
      <p className="text-gray-800 text-2xl font-bold">Stream Share</p>
      <div className="my-2 flex flex-col gap-2">
        <div className="h-[20px] w-[150px] bg-gray-200 rounded"></div>
        <div className="h-[20px] w-[100px] bg-gray-200 rounded"></div>
        <div
          className="absolute bg-[#FBFBFB] shadow-lg rounded-lg w-[150px] bottom-[-6.5rem] md:bottom-[-7rem] right-[-3rem] md:right-[-7rem] p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black rounded-lg p-2 flex items-center">
              <img src="/images/showmax.svg" className="ride-logo w-full" alt="logo"/>
            </div>
            <div className="bg-black rounded-lg p-2 flex items-center">
              <img src="/images/prime-video.svg" className="ride-logo w-full" alt="logo"/>
            </div>
            <div className="col-span-2 h-[50px] bg-black rounded-lg flex justify-center items-center">
              <img src="/images/netflix.svg" className="ride-logo w-[90px]" alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamShare;
