import React from 'react';

const Ride = () => {
  return (
    <div className="w-[200px] rounded-lg bg-[#FBFBFB] shadow-lg p-6 relative">
      <p className="text-gray-800 text-2xl font-bold">Ride</p>
      <div className="my-2 flex flex-col gap-2">
        <div className="h-[20px] w-[150px] bg-gray-200 rounded"></div>
        <div className="h-[20px] w-[100px] bg-gray-200 rounded"></div>
        <div
          className="absolute bg-[#FBFBFB] shadow-lg rounded-lg w-[150px] bottom-[-11rem] right-[-7rem] p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black rounded-lg p-3 flex items-center">
              <img src="/images/ride-logo/bolt.svg" className="ride-logo w-[70px]" alt="logo" width="100%"/>
            </div>
            <div className="bg-black rounded-lg flex items-center">
              <img src="/images/ride-logo/uber.png" className="ride-logo w-[70px]" alt="logo" width="100%"/>
            </div>
            <div className="bg-black rounded-lg p-2 flex items-center">
              <img src="/images/ride-logo/shuttlers.png" className="ride-logo w-[70px]" alt="logo"/>
            </div>
            <div className="bg-black rounded-lg p-2 flex items-center">
              <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" viewBox="0 0 72 50"
                   aria-labelledby="lyft-logo" height="40px">
                <g><title id="lyft-logo">Lyft Logo</title>
                  <path
                    d="M.023.888h10.912v28.716c0 4.544 2.12 7.251 3.796 8.411-1.775 1.547-7.198 2.901-11.24-.386C1.106 35.69.022 32.504.022 29.507V.888z"></path>
                  <path
                    d="M68.218 24.742v-3.018h3.328V11.137H67.89C66.488 4.781 60.717.018 53.815.018c-7.95 0-14.396 6.32-14.396 14.116v24.724c2.265.312 4.964-.04 7.26-1.906 2.384-1.938 3.467-5.124 3.467-8.122v-.91h5.45V17.333h-5.45v-3.199h.013c0-1.98 1.637-3.585 3.656-3.585 2.02 0 3.662 1.605 3.662 3.585v10.608c0 7.796 6.453 14.116 14.403 14.116V28.326c-2.019 0-3.662-1.605-3.662-3.584"></path>
                  <path
                    d="M26.89 11.137v15.537c0 .883-.746 1.597-1.667 1.597-.92 0-1.667-.714-1.667-1.597V11.137H12.759V29.41c0 3.288 1.137 7.445 6.31 8.799 5.18 1.355 8.185-1.45 8.185-1.45-.274 1.848-2.049 3.201-4.909 3.491-2.164.22-4.93-.483-6.31-1.063v9.681c3.517 1.017 7.236 1.345 10.877.653 6.606-1.257 10.775-6.671 10.775-13.874v-24.51H26.891z"></path>
                </g>
              </svg>
            </div>
            <div className="col-span-2 h-[50px] bg-black rounded-lg flex justify-center items-center">
              <img src="/images/ride-logo/lagosride-logo.png" className="ride-logo w-[90px]" alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ride;