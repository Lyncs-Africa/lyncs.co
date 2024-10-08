import {useRef, useState} from "react";
import Link from "next/link";

import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import LocalTaxiTwoToneIcon from '@mui/icons-material/LocalTaxiTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import FlightIcon from '@mui/icons-material/Flight';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';

import {usePathname} from "next/navigation";

export const ProductsDropdown = ({mode}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = usePathname()

  const handleOpenDropdown = () => {
    setIsDropdownOpen(true);
    clearTimeout(closeTimeoutRef.current);
  };

  const handleCloseDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100);
  };

  return (
    <div ref={dropdownRef} className="group relative font-satoshiMedium">

      <div
        className={`${mode.transparent || mode.dark || mode.scrollTop >= 100 ? 'text-white' : 'text-gray-300 md:text-gray-700'} ${mode.transparent ? 'md:hover:text-blue-300' : 'md:hover:text-blue-700'} flex flex-row justify-start items-center cursor-pointer ease transition-all`}
        onMouseEnter={handleOpenDropdown} onMouseLeave={handleCloseDropdown}>
        <p className='block py-7 px-4 text-lg rounded md:border-0'>
          Products
        </p>

        <div className={`${isDropdownOpen && "rotate-180"} ease transition-all`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" onClick={handleOpenDropdown}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>

      <div
        className='opacity-0 translate-y-10 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 transition-display transition-all duration-300 origin-to-right absolute z-50 top-20 -left-72 w-[200px] md:w-[750px] rounded-xl modal-card bg-[#ffffff] ease-in-out px-7 py-5'
      >

        <div
          className="py-1 dropdown-content w-full grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu-button"
          onMouseEnter={handleOpenDropdown}
          onMouseLeave={handleCloseDropdown}
        >
          <div
            className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
            <div className="p-3 rounded-full bg-blue-400">
              <FlightIcon style={{fontSize: 25, color: 'white'}}/>
            </div>
            <div className="space-y-2">
              <Link
                className='text-[15px] text-black font-medium'
                href="/shop"
                role="menuitem"
              >
                Flights Booking
              </Link>
              {
                location === '/businesses' ? (
                  <p className="text-gray-500 font-light text-[13px]">Api to book flights both local and internationally at the
                    best rates & filter by a bunch of factors </p>
                ) : (
                  <p className="text-gray-500 font-light text-[13px]">Book flights both local and internationally at the
                    best rates & filter by a bunch of factors </p>
                )
              }
            </div>

          </div>

          <div
            className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
            <div className="p-3 rounded-full bg-red-500">
              <StorefrontTwoToneIcon style={{fontSize: 25, color: 'white'}}/>
            </div>
            <div className="space-y-2">
              <Link
                className='text-[15px] text-black font-medium'
                href="/shop"
                role="menuitem"
              >
                Online Shopping
              </Link>
              {
                location === '/businesses' ? (
                  <p className="text-gray-500 font-light text-[13px]">Api to shop for items from multiple stores and get the best
                    deals for each item</p>
                ) : (
                  <p className="text-gray-500 font-light text-[13px]">Shop for items from multiple stores and get teh best
                    deals for each item</p>
                )
              }
            </div>

          </div>

          <div
            className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                 className="fill-pink-950 mx-auto w-[52px] h-[52px] rounded-full bg-pink-100 p-3" height="1em"
                 width="1em" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M209 19.39c-16.9 2.15-23 19.58-29.7 33.81-15.5-5.07-38.7-11.67-48.3-4-2.3 2.31-4.3 7.35-5 14.31-.6 6.95-.1 15.42 1 23.45 1.5 10.37 3.9 19.94 5.3 25.24 10.3 4.2 17.8 10.7 21.8 18.3 5.3 9.8 5 21.6-1.9 29.9l-13.8-11.6c1.5-1.8 2.3-5.3-.1-9.8-10.4-11.1-50.17-26.9-63.92-13.1-1.29 1.5-2.69 5-2.96 10.4-.26 5.3.52 12 1.79 18.3 1.65 8.5 3.64 14.8 5.09 19 108.4 15.5 151.1 21.4 208.3 18 1-4.5 2.8-11.6 5.7-19.8 4.6-12.8 10.3-27.7 23-35.4 11-5.5 22.9-3.9 33.4-1.5 2.3-6.4 6.2-13.4 10.9-16.7 12.8-7.3 28.8-2.1 41.7 1.9l-7.4 13.3c-7.5-3.8-17.1-5.5-24.2-.3-6.3 4.6-7.6 16.4-10.7 22.9-8.4-1.9-26.4-8.4-34.3-4.2-4.4 2.3-11.4 14.6-15.4 26-1.6 4.5-2.9 8.8-3.9 12.5 32.3-2.8 71-8.2 127.9-16 6.3-7 18-23.3 17-30.7-13-5.3-27.9-3-41.7-2.2 5.6-10.4 19.9-24.4 18.7-36.3-13.9-11.21-41-8.41-56.3-7.11-1.3-13.56-6.4-45.29-16.2-51.29-20.4-2.19-37.7 8.35-55.5 18.48-2.7-10.73-6.4-36.42-15.9-39.07-14.2-3.96-27.2 4.31-40.5 10.82-12.2-7.94-26.9-18.44-33.9-17.54zm173.2 39.86c1.9 6.38 3.4 13.3 4.5 19.59 10.2-.11 19.3.21 28.6 1.9-.9-7.53-2.4-17.9-8.5-22.35-8.6-3.56-16.8-1.65-24.6.86zm-174.7 4.14c15.3 6.11 20.1 24.04 22.9 37.61 11.6-5.08 26.8-9.48 37.1-3.66 14.9 10.86 16 33.96 15.9 48.86l-18-.4c-.5-10-.4-18.5-3.9-28-1.5-4.6-4.4-5.7-8.5-5.2-13.3 2.1-24.9 9.3-36.8 16.1-1.8-13.2-1.1-45.12-13.9-48.1-12.5-2.91-23.8 13.25-32.7 23.4l-13.8-11.63c11.8-12.27 33-34.25 51.7-28.98zM87.62 88.25c-.43 4.61 0 10.47.91 16.35 8.47.1 16.27 1.3 24.07 2.8-2.4-10.47-3.9-19.81-4.7-29.74-10.58-2.27-19.11-.87-20.28 10.59zM76.29 191.5L135.4 487H182l-13.9-139.1c-10.5-10-17.1-22.2-17.1-35.9 0-10.6 4-20.3 10.6-28.8l-8.1-81c-21.9-2.9-47-6.4-77.21-10.7zm359.31.7c-30.2 4.2-55.3 7.6-77.2 10.4l-8 80.6c6.6 8.4 10.6 18.2 10.6 28.8 0 13.7-6.6 25.9-17.1 35.9L330 487h46.6zm-263.7 12.3l6.4 63.5c1.7-1.2 3.5-2.3 5.3-3.4 17-9.9 39.1-16.1 63.4-17.4v-36.9c-22.6-.4-45.9-2.4-75.1-5.8zm168.1.3c-29 3.4-52.3 5.2-75 5.6v36.8c24.3 1.3 46.4 7.5 63.4 17.4 1.8 1.1 3.6 2.2 5.3 3.4zM256 265c-25.1 0-47.7 6-63.3 15.2C177 289.3 169 300.7 169 312s8 22.7 23.7 31.8C208.3 353 230.9 359 256 359c25.1 0 47.7-6 63.3-15.2C335 334.7 343 323.3 343 312s-8-22.7-23.7-31.8C303.7 271 281.1 265 256 265zm-68.4 96.6L200.2 487H247V376.8c-22.5-1.2-43-6.6-59.4-15.2zm136.7 0c-16.4 8.6-36.9 14-59.3 15.2V487h46.8z"></path>
            </svg>
            <div className="space-y-2">
              <Link
                className='text-[15px] text-black font-medium'
                href="/shop"
                role="menuitem"
              >
                Stream Share
              </Link>
              {
                location === '/businesses' ? (
                  <p className="text-gray-500 font-light text-[13px]">Api to Watch Netflix, Prime and Showmax</p>
                ) : (
                  <p className="text-gray-500 font-light text-[13px]">Watch Netflix, Prime and Showmax for ₦3,900</p>
                )
              }
            </div>

          </div>

          <div
            className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
            <div className="p-3 rounded-full bg-purple-500">
              <LocalTaxiTwoToneIcon style={{fontSize: 25, color: 'white'}}/>
            </div>
            <div className="space-y-2">
              <Link
                className='text-[15px] text-black font-medium'
                href="/shop"
                role="menuitem"
              >
                Cab Hailing
              </Link>
              {
                location === '/businesses' ? (
                  <p className="text-gray-500 font-light text-[13px]">Api to get good discounts on Bolt rides</p>
                ) : (
                  <p className="text-gray-500 font-light text-[13px]">Get good discounts on Bolt rides</p>
                )
              }
            </div>
          </div>


          <div
            className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
            <div className="p-3 rounded-full bg-teal-950">
              <DryCleaningIcon style={{fontSize: 25, color: 'white'}}/>
            </div>
            <div className="space-y-2">
              <Link
                className='text-[15px] text-black font-medium'
                href="/shop"
                role="menuitem"
              >
                Washing & Cleaning
              </Link>
              {
                location === '/businesses' ? (
                  <p className="text-gray-500 font-light text-[13px]">Api to order for dry cleaning & house cleaning
                    services for affordable rates</p>
                ) : (
                  <p className="text-gray-500 font-light text-[13px]">Order for dry cleaning & house cleaning
                    services for affordable rates</p>
                )
              }
            </div>
          </div>

          <div
            className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
            <div className="p-3 rounded-full bg-orange-800">
              <DirectionsBusFilledIcon style={{fontSize: 25, color: 'white'}}/>
            </div>
            <div className="space-y-2">
              <Link
                className='text-[15px] text-black font-medium'
                href="/shop"
                role="menuitem"
              >
                Bus Ticketing
              </Link>
              {
                location === '/businesses' ? (
                  <p className="text-gray-500 font-light text-[13px]">Api to book bus tickets for Inter state & Inter country
                    trips</p>
                ) : (
                  <p className="text-gray-500 font-light text-[13px]">Book bus tickets for Inter state & Inter country
                    trips</p>
                )
              }
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 w-full col-span-2 mt-4 border-t pt-4">
            <div
              className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
              <div className="p-3 rounded-full bg-black">
                <DashboardTwoToneIcon style={{fontSize: 25, color: 'white'}}/>
              </div>
              <div className="space-y-2">
                <Link
                  className='text-[15px] text-black font-medium'
                  href="/services"
                  role="menuitem"
                >
                  Explore all services
                </Link>
                <p className="text-gray-500 font-light text-[13px]">Explore all available services lyncs provide</p>
              </div>
            </div>

            {
              location !== '/individuals' && (
                <div className="flex flex-row justify-center gap-5 w-full items-center">
                  <Link href="https://app.lyncs.africa"
                        className=" text-[16px] font-medium px-8 py-3 ease transition-all rounded-md font-satoshiMedium  hover:text-blue-500">
                    Login
                  </Link>

                  <Link href="https://app.lyncs.africa/register"
                        className="bg-blue-500 hover:opacity-75 ease transition-all text-[16px] font-medium text-white px-8 py-3 rounded-md font-dmSans shadow-md">
                    Sign Up
                  </Link>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};
