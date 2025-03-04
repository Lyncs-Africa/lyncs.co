import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import Link from "next/link";
import {usePathname} from 'next/navigation';
import {useDisclosure} from "@mantine/hooks";
import MobileNavbar from "./MobileNavbar.jsx";
import {DevelopersDropdown} from "./DevelopersDropdown.jsx";
import {WhyUsDropdown} from "./WhyUsDropdown.jsx";
import classNames from "classnames";
import {BsLuggage} from "react-icons/bs";

function Navbar(mode) {
  const [isChristmasSeason, setIsChristmasSeason] = useState(false)
  const [toggle, setToggle] = useState(false);
  const location = usePathname()
  const [opened, {open, close}] = useDisclosure(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggle(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useLayoutEffect(() => {
    let listener = () => {
      if (window.innerWidth < 768) setToggle(false)
      else setToggle(true)
    };
    listener()
    window.addEventListener("resize", listener)
    return window.removeEventListener("resize", listener)
  })

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);


  const handleOpen = () => {
    mode.handleIsWidgetLoading(true);
    try {
      window.LyncsWidget.open({
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0/?isSelectOpen=true&view=view-one',
        onReady: () => {
          mode.handleIsWidgetLoading(false);
        }
      });
    } catch (error) {
      console.error("Failed to open widget", error);
    }
  };

  function isGetChristmasSeason() {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();

    if (month === 11) {
      return true;
    }

    if (month === 11 && day >= 1 && day <= 31) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    if (isGetChristmasSeason()) {
      setIsChristmasSeason(true)
    } else {
      setIsChristmasSeason(false)
    }
  }, [])

  return (
    <>
      <MobileNavbar opened={opened} onClose={close}/>
      <div ref={wrapperRef}
           className={classNames(
             "z-40 md:grid md:grid-cols-12 font-satoshiMedium ease-in duration-200 transition-all py-2 w-full",
             {
               "bg-black": mode.dark,
               "md:bg-transparent": mode.transparent,
               "bg-black fixed": mode.scrollTop >= 100,
               "absolute": mode.scrollTop <= 100
             }
           )}>
        <nav className="border-gray-200 px-2 md:px-0 rounded col-start-2 col-span-10 py-4 md:py-0">
          <div className="md:container flex flex-wrap items-center justify-between mx-auto">
            <Link className="flex items-center" href="/">
              {mode.scrollTop >= 100 || mode.dark || mode.transparent ?
                <div>
                  {
                    isChristmasSeason ? (
                      <img
                        src="/images/christmas-logo.svg"
                        className="h-12 mr-3 xl:h-14"
                        alt="Lyncs Logo"
                      />
                    ) : (
                      <img
                        src="/images/logo-light.svg"
                        className="h-12 mr-3 xl:h-14"
                        alt="Lyncs Logo"
                      />
                    )
                  }
                </div>

                : <>
                  <img
                    src="/images/logo.svg"
                    className="h-12 mr-3 xl:h-14 hidden md:block"
                    alt="Lyncs Logo"
                  />
                  <img
                    src="/images/logo-light.svg"
                    className="h-12 mr-3 xl:h-14 md:hidden"
                    alt="Lyncs Logo"
                  />
                </>
              }
            </Link>

            {
              !mode.logo && (
                <>
                  <div className="flex md:order-2">
                    {
                      location === '/affilates' ? (
                        <button
                          type="button"
                          className={`hidden xl:block text-white bg-blue-500 hover:bg-blue-800 md:border md:bg-transparent ${mode.transparent || mode.dark || mode.scrollTop >= 100 ? 'border-white md:text-white' : 'md:border-blue-500 md:text-blue-500'} md:hover:bg-blue-500 md:hover:border-none md:hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[14px] px-8 py-2.5 text-center mr-3 md:mr-0`}
                        >
                          Get Started
                          <span className="">
                          <i className="fa-solid fa-right-to-bracket"></i>
                        </span>
                        </button>
                      ) : (
                        <button onClick={handleOpen}
                                type="button"
                                className={`hidden xl:block text-white bg-blue-500 hover:bg-blue-800 md:border md:bg-transparent ${mode.transparent || mode.dark || mode.scrollTop >= 100 ? 'border-white md:text-white' : 'md:border-blue-500 md:text-blue-500'} md:hover:bg-blue-500 md:hover:border-none md:hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[14px] px-8 py-2.5 text-center mr-3 md:mr-0`}
                        >
                          Get Started
                          <span className="">
                          <i className="fa-solid fa-right-to-bracket"></i>
                        </span>
                        </button>
                      )
                    }

                    <button
                      onClick={open}
                      type="button"
                      className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden bg-transparent focus:outline-none"
                      aria-controls="navbar-default"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className={classNames(
                          "fill-white w-6 h-6",
                          {
                            "fill-white": mode.scrollTop >= 200,
                            "fill-black": mode.dark
                          }
                        )}
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div

                    className="items-center justify-between w-full hidden md:flex md:w-auto md:order-1"
                  >
                    <ul
                      className={`flex flex-col px-4 py-1 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent ${mode.dark || mode.scrollTop >= 100 || mode.transparent ? 'bg-black border-none' : 'bg-black  border-gray-100'}`}>

                      <WhyUsDropdown mode={mode}/>

                      {/*<ProductsDropdown mode={mode}/>*/}

                      <DevelopersDropdown mode={mode}/>
                      {/*<button*/}
                      {/*  className={classNames(*/}
                      {/*    "flex flex-row justify-start items-center cursor-pointer ease transition-all text-lg hover:text-blue-700",*/}
                      {/*    {*/}
                      {/*      "text-white": mode.transparent || mode.dark || mode.scrollTop >= 100,*/}
                      {/*      "text-gray-300 md:text-gray-700" : mode.transparent || mode.dark || mode.scrollTop < 100,*/}
                      {/*      "md:hover:text-blue-300": mode.transparent,*/}
                      {/*      "mode.transparent": !mode.transparent*/}
                      {/*    }*/}
                      {/*  )}>*/}
                      {/*  Referrals*/}
                      {/*</button>*/}

                      <Link target="_blank" href="http://app.lyncs.africa">
                        <button
                          type="button"
                          className={`md:hidden w-full text-white bg-blue-500 hover:bg-blue-800 md:bg-transparent md:border ${location === "/login" ? 'md:bg-blue-500 md::text-white' : ''} ${mode.dark || mode.scrollTop >= 100 ? 'md:border-white md:text-white' : 'md:border-blue-500 md:text-blue-500'}  md:hover:bg-blue-500 md:hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-3 md:mr-0`}
                        >
                          Login
                          <span className="ml-2">
                      <i className="fa-solid fa-right-to-bracket"></i>
                    </span>
                        </button>
                      </Link>
                    </ul>
                  </div>
                </>
              )
            }


          </div>
        </nav>
      </div>
    </>);
}

export default Navbar;
