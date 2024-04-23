import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//Dropdow Icons
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ModeOfTravelTwoToneIcon from '@mui/icons-material/ModeOfTravelTwoTone';
import LocalDiningTwoToneIcon from '@mui/icons-material/LocalDiningTwoTone';
import EventIcon from '@mui/icons-material/Event';
import LocalTaxiTwoToneIcon from '@mui/icons-material/LocalTaxiTwoTone';
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';

import Link from "next/link";

function FeaturesMobile() {
  // SwiperCore.use([Autoplay]);
  return (
    <>
      <div className="md:hidden top-[-3rem] font-satoshiMedium py-10 px-4 relative z-10 bg-[#F4F6F8]">

        <h2 className="py-10 text-[2.5rem] font-[900] text-black  leading-[1.1] relative heading">
          Explore core products
        </h2>
        <div className="text-lg font-semibold mb-7 text-blue-500 py-2 flex flex-row justify-start items-center gap-2">
          See all products <ArrowForwardIcon fontSize="small" className=""/>
        </div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={3000}
          slidesPerView={1}
          spaceBetween={40}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            470: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            760: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          className="text-black flex flex-col justify-stretch items-stretch "
        >
          <SwiperSlide className="bg-white rounded-xl">
            <div className="px-8 py-10 h-96">
              <div className="text-6xl relative mb-10">
                <div className="heart"></div>
                <StorefrontOutlinedIcon fontSize="inherit" className="text-gray-700 mb-4"/>
              </div>

              <p className=" font-medium text-xl uppercase">
                ONLINE SHOPPING
              </p>
              <h2 className="text-lg mt-5 mb-10 text-[#54667f]">
                Build a full online store with no backend or database in seconds.
              </h2>
              <Link href="https://app.lyncs.africa/register"
                    className="bg-black text-md text-white px-8 py-4 rounded-[12px]  hover:border hover:border-black hover:bg-transparent hover:text-black">
                Get started
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-xl">
            <div className="px-8 py-10 h-96">
              <div className="text-6xl relative mb-10">
                <div className="heart-2"></div>
                <LocalDiningTwoToneIcon fontSize="inherit" className="text-gray-700 mb-4"/>
              </div>

              <p className=" font-medium text-xl uppercase">
                Hotel Booking
              </p>

              <h2 className="text-lg mt-5 mb-10 text-[#54667f]">
                Effortlessly build a hotel booking platform for your customers in minutes.
              </h2>
              <Link href="https://app.lyncs.africa/register"
                    className="bg-black text-md text-white px-8 py-4 rounded-[12px]  hover:border hover:border-black hover:bg-transparent hover:text-black">
                Get started
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-xl">
            <div className="px-8 py-10 h-96">
              <div className="text-6xl relative mb-10">
                <div className="heart-3"></div>
                <LocalTaxiTwoToneIcon fontSize="inherit" className="text-gray-700 mb-4"/>
              </div>

              <p className=" font-medium text-xl uppercase">
                Cab Hailing
              </p>

              <h2 className="text-lg mt-5 mb-10 text-[#54667f]">
                Build an e-hailing service for your customers
              </h2>
              <Link href="https://app.lyncs.africa/register"
                    className="bg-black text-md text-white px-8 py-4 rounded-[12px]  hover:border hover:border-black hover:bg-transparent hover:text-black">
                Get started
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-xl">
            <div className="px-8 py-10 text-black h-96">
              <div className="text-6xl relative mb-10">
                <div className="heart"></div>
                <LocalShippingTwoToneIcon fontSize="inherit" className="text-gray-700 mb-4"/>
              </div>

              <p className=" font-medium text-xl uppercase">
                Food Ordering
              </p>

              <h2 className="text-lg mt-5 mb-10 text-[#54667f]">
                Create a sweet and swift online food ordering platform for your customers in a matter of seconds
              </h2>
              <Link href="https://app.lyncs.africa/register"
                    className="bg-black text-md text-white px-8 py-4 rounded-[12px]  hover:border hover:border-black hover:bg-transparent hover:text-black">
                Get started
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-xl">
            <div className="px-8 py-10 h-96">
              <div className="text-6xl relative mb-10">
                <div className="heart-2"></div>
                <ModeOfTravelTwoToneIcon fontSize="inherit" className="text-gray-700 mb-4"/>
              </div>

              <p className="font-medium text-xl uppercase">
                Flight Booking
              </p>

              <h2 className="text-lg mt-5 mb-10 text-[#54667f]">
                Offer customers a seamless online experience for booking deliveries in seconds.
              </h2>
              <Link href="https://app.lyncs.africa/register"
                    className="bg-black text-[17px] text-white px-8 py-4 rounded-[12px]  hover:border hover:border-black hover:bg-transparent hover:text-black">
                Get started
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-xl">
            <div className="px-8 py-10 h-96">
              <div className="text-6xl relative mb-10">
                <div className="heart-3"></div>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                  height="1em"
                  width="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M209 19.39c-16.9 2.15-23 19.58-29.7 33.81-15.5-5.07-38.7-11.67-48.3-4-2.3 2.31-4.3 7.35-5 14.31-.6 6.95-.1 15.42 1 23.45 1.5 10.37 3.9 19.94 5.3 25.24 10.3 4.2 17.8 10.7 21.8 18.3 5.3 9.8 5 21.6-1.9 29.9l-13.8-11.6c1.5-1.8 2.3-5.3-.1-9.8-10.4-11.1-50.17-26.9-63.92-13.1-1.29 1.5-2.69 5-2.96 10.4-.26 5.3.52 12 1.79 18.3 1.65 8.5 3.64 14.8 5.09 19 108.4 15.5 151.1 21.4 208.3 18 1-4.5 2.8-11.6 5.7-19.8 4.6-12.8 10.3-27.7 23-35.4 11-5.5 22.9-3.9 33.4-1.5 2.3-6.4 6.2-13.4 10.9-16.7 12.8-7.3 28.8-2.1 41.7 1.9l-7.4 13.3c-7.5-3.8-17.1-5.5-24.2-.3-6.3 4.6-7.6 16.4-10.7 22.9-8.4-1.9-26.4-8.4-34.3-4.2-4.4 2.3-11.4 14.6-15.4 26-1.6 4.5-2.9 8.8-3.9 12.5 32.3-2.8 71-8.2 127.9-16 6.3-7 18-23.3 17-30.7-13-5.3-27.9-3-41.7-2.2 5.6-10.4 19.9-24.4 18.7-36.3-13.9-11.21-41-8.41-56.3-7.11-1.3-13.56-6.4-45.29-16.2-51.29-20.4-2.19-37.7 8.35-55.5 18.48-2.7-10.73-6.4-36.42-15.9-39.07-14.2-3.96-27.2 4.31-40.5 10.82-12.2-7.94-26.9-18.44-33.9-17.54zm173.2 39.86c1.9 6.38 3.4 13.3 4.5 19.59 10.2-.11 19.3.21 28.6 1.9-.9-7.53-2.4-17.9-8.5-22.35-8.6-3.56-16.8-1.65-24.6.86zm-174.7 4.14c15.3 6.11 20.1 24.04 22.9 37.61 11.6-5.08 26.8-9.48 37.1-3.66 14.9 10.86 16 33.96 15.9 48.86l-18-.4c-.5-10-.4-18.5-3.9-28-1.5-4.6-4.4-5.7-8.5-5.2-13.3 2.1-24.9 9.3-36.8 16.1-1.8-13.2-1.1-45.12-13.9-48.1-12.5-2.91-23.8 13.25-32.7 23.4l-13.8-11.63c11.8-12.27 33-34.25 51.7-28.98zM87.62 88.25c-.43 4.61 0 10.47.91 16.35 8.47.1 16.27 1.3 24.07 2.8-2.4-10.47-3.9-19.81-4.7-29.74-10.58-2.27-19.11-.87-20.28 10.59zM76.29 191.5L135.4 487H182l-13.9-139.1c-10.5-10-17.1-22.2-17.1-35.9 0-10.6 4-20.3 10.6-28.8l-8.1-81c-21.9-2.9-47-6.4-77.21-10.7zm359.31.7c-30.2 4.2-55.3 7.6-77.2 10.4l-8 80.6c6.6 8.4 10.6 18.2 10.6 28.8 0 13.7-6.6 25.9-17.1 35.9L330 487h46.6zm-263.7 12.3l6.4 63.5c1.7-1.2 3.5-2.3 5.3-3.4 17-9.9 39.1-16.1 63.4-17.4v-36.9c-22.6-.4-45.9-2.4-75.1-5.8zm168.1.3c-29 3.4-52.3 5.2-75 5.6v36.8c24.3 1.3 46.4 7.5 63.4 17.4 1.8 1.1 3.6 2.2 5.3 3.4zM256 265c-25.1 0-47.7 6-63.3 15.2C177 289.3 169 300.7 169 312s8 22.7 23.7 31.8C208.3 353 230.9 359 256 359c25.1 0 47.7-6 63.3-15.2C335 334.7 343 323.3 343 312s-8-22.7-23.7-31.8C303.7 271 281.1 265 256 265zm-68.4 96.6L200.2 487H247V376.8c-22.5-1.2-43-6.6-59.4-15.2zm136.7 0c-16.4 8.6-36.9 14-59.3 15.2V487h46.8z"></path>
              </svg>
              </div>

              <p className=" font-medium text-xl uppercase">
                Stream share
              </p>

              <h2 className="text-lg mt-5 mb-10 text-[#54667f]">
                Empower your platform with our seamless package delivery API for swift and reliable logistics
                integration.
              </h2>
              <Link href="https://app.lyncs.africa/register"
                    className="bg-black text-md text-white px-8 py-4 rounded-[12px]  hover:border hover:border-black hover:bg-transparent hover:text-black">
                Get started
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-xl h-96">
            <div className="px-8 py-10 ">
              <div className="text-6xl relative mb-10">
                <div className="heart-4"></div>
                <EventIcon fontSize="inherit" className="text-gray-700 mb-4"/>
              </div>

              <p className=" font-medium text-xl uppercase">
                Event
              </p>

              <h2 className="text-lg mt-5 mb-10 text-[#54667f]">
                Search, Book and Get Tickets for any Event in Africa
              </h2>
              <Link href="https://app.lyncs.africa/register"
                    className="bg-black text-[17px] text-white px-8 py-4 rounded-[12px]  hover:border hover:border-black hover:bg-transparent hover:text-black">
                Get started
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default FeaturesMobile;
