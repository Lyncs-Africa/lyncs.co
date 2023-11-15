import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import useSignupStore from "@/store/signup";
import { splitName } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import { ProductsDropdown } from "../navbar/Dropdowns.jsx";
// import { UseCasesDropdown } from "./DevelopersDropdown.jsx";
import { AnimatePresence, easeInOut, motion } from "framer-motion"
import { useDisclosure } from "@mantine/hooks";
import MobileNavbar from "./MobileNavbar.jsx";
import { DevelopersDropdown } from "./DevelopersDropdown.jsx";

function Navbar(mode) {
  const { data } = useSignupStore((state) => state)
  const [toggle, setToggle] = useState(false);
  const [profile, setProfile] = useState(false);
  const location = usePathname()
  const { logout } = useAuth();

  const [opened, { open, close }] = useDisclosure(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggle(false)
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
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

  const containerVariant = useMemo(() => typeof window !== "undefined" && window.innerWidth > 768 ? {} : {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: {
        duration: 0.5, ease: easeInOut
      }
    }
  }, [])
  return (
    <>
      <MobileNavbar opened={opened} onClose={close} />

      <div ref={wrapperRef}
        className={`z-50 md:grid md:grid-cols-12 font-poppins ${mode.dark ? 'bg-black' : 'ease-in duration-200 transition-all'} ${mode.transparent && mode.scrollTop <= 100 ? 'md:bg-transparent' : ''} ${mode.scrollTop >= 100 ? 'bg-black fixed' : 'absolute'} w-full`}>
        <nav className="border-gray-200 px-2 sm:px-4 rounded col-start-2 col-span-10 py-4 md:py-0">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link className="flex items-center" href="/">
              {mode.scrollTop >= 100 || mode.dark || mode.transparent ? <>
                <img
                  src="/images/lyncs-logo-light.png"
                  className="h-6 mr-3 xl:h-9"
                  alt="Lyncs Logo"
                />
              </>

                : <>
                  <img
                    src="/images/lyncs-logo-blue.png"
                    className="h-7 mr-3 md:h-9"
                    alt="Lyncs Logo"
                  />
                </>

              }
            </Link>

            <div className="flex md:order-2">
              {
                data.user ?
                  <>
                    <button onClick={() => setProfile(!profile)} type="button"
                      className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                      id="user-menu-button" aria-expanded="false"
                      data-dropdown-toggle="dropdown">
                      <span className="sr-only">Open user menu</span>
                      <img className="w-10 h-10 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${splitName(data.user.registrar)}`} />
                    </button>

                    <div
                      className={`${profile ? 'block' : 'hidden'} fixed top-[3.5rem] right-0 z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow`}
                      id="dropdown">
                      <div className="py-3 px-4">
                        <span
                          className="block text-sm font-semibold text-gray-900">{data?.user?.registrar}</span>
                        <span
                          className="block text-sm font-light text-gray-500 truncate ">{data?.user?.email}</span>
                      </div>
                      <ul className="py-1 font-light text-gray-500" aria-labelledby="dropdown">
                        <Link className="block py-2 px-4 text-sm hover:bg-gray-100"
                          href="/dashboard/overview">
                          Dashboard
                        </Link>
                      </ul>
                      <ul className="py-1 font-light text-gray-500 " aria-labelledby="dropdown">
                        <button onClick={logout}
                          className="block py-2 px-4 text-sm hover:bg-gray-100 w-full text-left">Sign
                          out
                        </button>
                      </ul>
                    </div>
                  </>
                  :
                  <>
                    <Link target="_blank" href="https://lyncs-website.vercel.app">
                      <button
                        type="button"
                        className={`hidden xl:block text-white bg-blue-500 hover:bg-blue-800 md:border ${location === "/login" ? 'bg-blue-500 md:border-none' : 'md:bg-transparent'} ${mode.dark || mode.scrollTop >= 100 ? 'border-white md:text-white' : 'md:border-blue-500 md:text-blue-500'} md:hover:bg-blue-500 md:hover:border-none md:hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[16px] px-8 py-2.5 text-center mr-3 md:mr-0`}
                      >
                        Login
                        <span className="ml-2">
                          <i className="fa-solid fa-right-to-bracket"></i>
                        </span>
                      </button>
                    </Link>
                  </>
              }

              <button
                onClick={open}
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden focus:text-white hover:bg-gray-400 focus:outline-none"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
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
                className={`flex flex-col px-4 py-1 my-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent ${mode.dark || mode.scrollTop >= 100 || mode.transparent ? 'bg-black border-none' : 'bg-black  border-gray-100'}`}>

                <ProductsDropdown mode={mode} />
                <Link
                  target="_blank"
                  className={`block py-4 pl-3 pr-4 text-lg ${location === "/businesses" ? 'text-blue-500 :font-bold' : ''} ${mode.transparent || mode.dark || mode.scrollTop >= 100 ? 'text-white' : 'text-gray-300 md:text-gray-700'} rounded md:border-0 md:hover:text-blue-700`}
                  href="https://lyncs.africa"
                >
                  Use Cases
                </Link>
                <Link
                  target="_blank"
                  className={`block py-4 pl-3 pr-4 text-lg ${location === "/businesses" ? 'text-blue-500 :font-bold' : ''} ${mode.transparent || mode.dark || mode.scrollTop >= 100 ? 'text-white' : 'text-gray-300 md:text-gray-700'} rounded md:border-0 md:hover:text-blue-700`}
                  href="https://lyncs.africa"
                >
                  Businesses
                </Link>
                {/* <Link
                  className={`block py-4 pl-3 pr-4 text-lg ${location === "/developers" ? 'text-blue-500 :font-bold' : ''} ${mode.transparent || mode.dark || mode.scrollTop >= 100 ? 'text-white' : 'text-gray-300 md:text-gray-700'} rounded md:border-0 md:hover:text-blue-700`}
                  href="https://docs.lyncs.africa" target="_blank"
                >
                  Developers
                </Link> */}
                <DevelopersDropdown mode={mode} />

                <Link href="/login">
                  <button
                    type="button"
                    className={`mb-4 md:hidden w-full text-white bg-blue-500 hover:bg-blue-800 md:bg-transparent md:border ${location === "/login" ? 'md:bg-blue-500 md::text-white' : ''} ${mode.dark || mode.scrollTop >= 100 ? 'md:border-white md:text-white' : 'md:border-blue-500 md:text-blue-500'}  md:hover:bg-blue-500 md:hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-3 md:mr-0`}
                  >
                    Login
                    <span className="ml-2">
                      <i className="fa-solid fa-right-to-bracket"></i>
                    </span>
                  </button>
                </Link>
              </ul>
            </div>

          </div>
        </nav>
      </div>
    </>);
}

export default Navbar;
