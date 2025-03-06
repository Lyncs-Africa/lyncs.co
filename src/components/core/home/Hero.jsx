import React, {useEffect, useRef} from "react";
import Typed from "typed.js";
import {FaFly} from "react-icons/fa6";
import {PiPlanetFill} from "react-icons/pi";
import {BsBusFront, BsFillSuitcase2Fill} from "react-icons/bs";
import {FaGlobeAfrica, FaShuttleVan} from "react-icons/fa";
import {RiEBikeFill} from "react-icons/ri";
import {IoTicketOutline, IoWalletOutline} from "react-icons/io5";
import HeroMobile from "@/components/core/responsive/HeroMobile";

function Hero({handleIsWidgetLoading}) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Japa",
        "Study Abroad",
        "Escape Traffic",
        "Book Flights",
        "Go on Vacation",
        "Shock Village People",
        "Explore the World",
        "Do Long Distance",
        "Travel for NYSC",
        "Get Visa",
        "Flex on Social Media",
        "Form Fake Life",
        "Spend Chief's Money",
        "Oppress Your Ex",
        "Try Out New Dishes",
        "Find Peace of Mind",
      ],
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleOpen = () => {
    handleIsWidgetLoading(true);
    window.LyncsWidget.open({
      key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
      path: '/flights/local-flight',
      onReady: () => {
        handleIsWidgetLoading(false)
      },
    });
  };

  const handleWait = (service) => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: `/waitlist/?service=${service}&launchDate=2025-04-01T00:00:00`,
        onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

  return (
    <>
      <div
        className="hidden md:grid font-satoshiMedium grid-cols-12 md:pt-[100px] md:pb-[250px] md:gap-8 overflow-hidden bg-[#fff] md:relative md:z-10 px-1 md:px-0">
        <div className="md:block md:-bottom-24 hidden absolute xl:bottom-[-9rem] w-full z-30">
          <svg fill="#000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 265.34">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path className="cls-1"
                      d="M.17,10.74C43.4,20,87.41,29.54,125.87,51.36c49.88,28.29,86.24,81.56,141.49,99.85a115.56,115.56,0,0,0,71,.33c20.72-6.65,39.05-19,57.45-30.63,34.42-21.75,71.93-40,112.69-45.4,83.85-11.09,164.77,46.12,248.13,17.9,44.46-15,78-52.21,120.65-71.76A236.83,236.83,0,0,1,1000,1.25l-1.71,264.09H.2C.2,180.48-.23,95.6.17,10.74Z"/>
              </g>
            </g>
          </svg>

        </div>
        <div className="area">
          <ul className="circles">
            <li><FaFly size="80px" className="text-black"/></li>
            <li><PiPlanetFill size="80px" className="text-black"/></li>
            <li><BsFillSuitcase2Fill size="40px" className="text-black"/></li>
            <li><BsBusFront size="40px" className="text-black"/></li>
            <li><FaGlobeAfrica size="70px" className="text-blue-500"/></li>
            <li><RiEBikeFill size="50px" className="text-black"/></li>
            <li><IoWalletOutline size="40px" className="text-orange-900"/></li>
            <li></li>
            <li><FaShuttleVan size="60px" className="text-black"/></li>
            <li><IoTicketOutline size="50px" className="text-green-500"/></li>
          </ul>
        </div>
        <div className="col-span-10 col-start-2 z-30 relative md:text-center w-full px-4 md:px-0">
          <h2
            className="text-slate-900 text-[4rem] md:text-[7rem] leading-[1.1] font-semibold md:pt-[50px] relative min-h-[160px]"
          >
            A Better Way to
            <br/>
            <span
              ref={el}
              className="min-h-[125px] relative bg-clip-text text-transparent bg-gradient-to-r from-[#00AFEF] to-[#0915BA] after:inline after:text-blue-500 w-max text-left">
             Purchase Delivery Bikes
            </span>
          </h2>

          <p className="md:text-[17px] text-[16px] py-5 text-slate-800 md:px-4">
            Affordable, flexible, and secure
            mobility solutions at your fingertips.
          </p>

          <div className="flex flex-row md:justify-center items-center gap-7 z-30 w-full">
            <button onClick={handleOpen}
                    className="bg-black border text-[16px] text-white px-8 text-center py-4 rounded-lg hover:bg-transparent hover:border-black hover:text-black ease transition-all">
              Start your journey
            </button>
          </div>

        </div>
      </div>
      <HeroMobile handleOpen={handleOpen}/>
    </>
  );
}

export default Hero;
