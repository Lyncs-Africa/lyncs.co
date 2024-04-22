import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {Autoplay, EffectFlip, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip"

const CabHailing = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="relative font-satoshiMedium">
      <div>
        <div className="hidden md:block absolute py-6 px-4 bg-[#1A2747] rounded-lg w-[50%] top-[2rem] left-[-5rem] md:text-[17px] text-[15px]">
          <Swiper
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            speed={1000}
            modules={[Pagination]}
            slidesPerView={1}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex items-center gap-5">
                <img src="/images/face-1.png"/>
                <div>
                  <p className="text-white md:text-[15px]">
                    Good Afternoon,
                  </p>
                  <p className="text-white">
                    Oluwatosin Ewatomi
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-5">
                <svg className="w-[50px] h-[50px] rounded-full bg-[#F1F1F8] p-3" fill="#000"
                     xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                  <path
                    d="M370-440h60v-120h100v120h60v-185l-110-73-110 73v185Zm110 281q133-121 196.5-219.5T740-552q0-118-75.5-193T480-820q-109 0-184.5 75T220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                </svg>
                <div>
                  <p className="text-white text-[17px]">77, Samuel Adedoyin, Victoria Island</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-5">
                <svg className="w-[50px] h-[50px] rounded-full bg-[#F1F1F8] p-3" fill="#000"
                     xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                  <path
                    d="M480-298q103.95-83.86 156.975-161.43Q690-537 690-604q0-59-21.5-100t-53.009-66.88q-31.51-25.881-68.271-37.5Q510.459-820 480-820q-30.459 0-67.22 11.62-36.761 11.619-68.271 37.5Q313-745 291.5-704T270-604q0 67 53.025 144.57T480-298Zm0 76Q343-325 276.5-419.199q-66.5-94.2-66.5-184.554Q210-672 234.5-723.5T298-810q39-35 86.98-52.5 47.98-17.5 95-17.5T575-862.5q48 17.5 87 52.5t63.5 86.533Q750-671.934 750-603.544 750-513 683.5-419 617-325 480-222Zm.089-318Q509-540 529.5-560.589q20.5-20.588 20.5-49.5Q550-639 529.411-659.5q-20.588-20.5-49.5-20.5Q451-680 430.5-659.411q-20.5 20.588-20.5 49.5Q410-581 430.589-560.5q20.588 20.5 49.5 20.5ZM210-80v-60h540v60H210Zm270-524Z"/>
                </svg>
                <div>
                  <p className="text-white text-[17px]">186 Awolowo road, Ojodu Berger</p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
        <div className="hidden md:block absolute w-[50%] overflow-hidden bottom-[1rem] left-[10rem]">
          <Swiper
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: true,
            }}
            speed={1000}
            modules={[EffectFlip]}
            effect="flip"
            slidesPerView={1}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="py-6 px-4 bg-[#1A2747] rounded-lg">
                <p className="text-white">
                  Please enter your ride link
                </p>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      ></path>
                    </svg>
                  </div>
                  <input disabled type="text" name="email" id="topbar-search"
                         className="bg-gray-900 text-sm text-gray-500 rounded-lg block w-full pl-10 p-2.5 my-2"
                         placeholder="StreamShare link"/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-6 px-4 bg-[#1A2747] rounded-lg">
                <p className="text-white">Driver's information</p>
                <li className="flex items-center gap-2">
                  <svg className="w-[30px]" fill="#fff"
                       xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                    <path
                      d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42.411-18h59.178Q534-880 552-862t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H570v30q0 28-18 44t-42.411 16h-59.178Q426-530 408-546t-18-44v-30H140v480Zm92-107h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q22.5 0 38.25-15.75T408-418q0-22.5-15.75-38.25T354-472q-22.5 0-38.25 15.75T300-418q0 22.5 15.75 38.25T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Zm30 210Z"/>
                  </svg>
                  <p className="text-white text-[17px]">Timileyin Odunsin</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-[30px]" fill="#fff"
                       xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                    <path
                      d="M200-204v54q0 12.75-8.625 21.375T170-120h-20q-12.75 0-21.375-8.625T120-150v-324l85-256q5-14 16.5-22t26.5-8h464q15 0 26.5 8t16.5 22l85 256v324q0 12.75-8.625 21.375T810-120h-21q-13 0-21-8.625T760-150v-54H200Zm3-330h554l-55-166H258l-55 166Zm-23 60v210-210Zm105.765 160Q309-314 324.5-329.75T340-368q0-23.333-15.75-39.667Q308.5-424 286-424q-23.333 0-39.667 16.265Q230-391.471 230-368.235 230-345 246.265-329.5q16.264 15.5 39.5 15.5ZM675-314q23.333 0 39.667-15.75Q731-345.5 731-368q0-23.333-16.265-39.667Q698.471-424 675.235-424 652-424 636.5-407.735q-15.5 16.264-15.5 39.5Q621-345 636.75-329.5T675-314Zm-495 50h600v-210H180v210Z"/>
                  </svg>
                  <p className="text-white text-[17px]">Toyota Camry 2009 Blue FST907DC</p>
                </li>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-6 px-4 bg-[#1A2747] rounded-lg flex items-center gap-5">
                <svg className="w-[50px] h-[50px] rounded-full bg-[#F1F1F8] p-3" fill="#000"
                     xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                  <path
                    d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/>
                </svg>
                <div>
                  <p className="text-white text-[17px]">Successfully paid for your ride</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-6 px-4 bg-[#1A2747] rounded-lg flex items-center gap-5">
                <svg className="w-[50px] h-[50px] rounded-full bg-[#F1F1F8] p-3" fill="#000"
                     xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                  <path
                    d="M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-470h480q29 0 54.5 9t45.5 26v-45q0-42-29-71t-71-29H240q-42 0-71 29t-29 71v45q20-17 45.5-26t54.5-9Zm-97 136 477 115q7 2 14.5.5T647-385l160-134q-13-23-36-37t-51-14H240q-35 0-62 21.5T143-494Z"/>
                </svg>
                <div>
                  <p className="text-white">Your plan balance</p>
                  <p className="text-white text-[17px]">₦34,560</p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
        <div className="absolute md:w-[40%] justify-center md:top-[7rem] py-6 px-4 bg-[#1A2747] rounded-lg flex items-center gap-4 md:right-[-3rem] right-0 top-[3rem]">
          <div>
            <p className="text-white">Trips today</p>
            <p className="text-white text-[17px]">2 Trips</p>
          </div>
          <div className="border-l border-gray-500 h-[50px] w-[5px]"></div>
          <div className="relative">
            <svg className="w-[40px] h-[40px]" fill="#fff" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
            </svg>
            <div className="animate-bounceTwo absolute bg-slate-600 flex items-center justify-center shadow-lg h-[30px] w-[30px] rounded-full top-[-1rem] right-[-0.5rem]">
              <p className="text-white text-sm">3</p>
            </div>
          </div>
        </div>
      </div>
      <img alt="img" className="w-full werp" src="/images/picase.png"/>
    </div>
  );
};

export default CabHailing;
