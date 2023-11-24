import { useState, useRef } from "react";
import Link from "next/link";
//Dropdow Icons
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import ModeOfTravelTwoToneIcon from '@mui/icons-material/ModeOfTravelTwoTone';
import LocalDiningTwoToneIcon from '@mui/icons-material/LocalDiningTwoTone';
import OtherHousesTwoToneIcon from '@mui/icons-material/OtherHousesTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import LocalTaxiTwoToneIcon from '@mui/icons-material/LocalTaxiTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';
import GarageTwoToneIcon from '@mui/icons-material/GarageTwoTone';
import HotelTwoToneIcon from '@mui/icons-material/HotelTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';

import { usePathname } from "next/navigation";

export const ProductsDropdown = ({ mode }) => {
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

            <div className={`${mode.transparent || mode.dark || mode.scrollTop >= 100 ? 'text-white' : 'text-gray-300 md:text-gray-700'} flex flex-row justify-start items-center cursor-pointer md:hover:text-blue-700 ease transition-all`} onMouseEnter={handleOpenDropdown} onMouseLeave={handleCloseDropdown}>
                <p className='block py-7 px-4 text-lg rounded md:border-0'>
                    Products
                </p>

                <div className={`${isDropdownOpen && "rotate-180"} ease transition-all`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleOpenDropdown}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Dropdown content */}

            <div
                className='opacity-0 translate-y-10 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 transition-display transition-all duration-300 origin-to-right absolute z-50 top-20 -left-72 w-[200px] md:w-[750px] rounded-xl modal-card bg-[#ffffff]  ease-in-out px-7 py-5'
            >

                <div
                    className="py-1 dropdown-content w-full grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-2"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="dropdown-menu-button"
                    onMouseEnter={handleOpenDropdown}
                    onMouseLeave={handleCloseDropdown}
                >
                    <div className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-full bg-blue-400">
                            <StorefrontTwoToneIcon className="text-white" />
                        </div>
                        <div className="space-y-2">
                            <Link
                                className='text-[15px] text-black font-medium'
                                href="/shop"
                                role="menuitem"
                            >
                                Online shopping
                            </Link>
                            <p className="text-gray-500 font-light">Build a full online store with no backend or database</p>
                        </div>

                    </div>

                    <div className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-full bg-red-500">
                            <HotelTwoToneIcon className="text-white" />
                        </div>
                        <div className="space-y-2">
                            <Link
                                className='text-[15px] text-black font-medium'
                                href="/shop"
                                role="menuitem"
                            >
                                Hotel booking
                            </Link>
                            <p className="text-gray-500 font-light">Build a hotel booking for your customers</p>
                        </div>

                    </div>

                    <div className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-full bg-orange-400">
                            <LocalTaxiTwoToneIcon className="text-white" />
                        </div>
                        <div className="space-y-2">
                            <Link
                                className='text-[15px] text-black font-medium'
                                href="/shop"
                                role="menuitem"
                            >
                                Cab hailing
                            </Link>
                            <p className="text-gray-500 font-light">Build an e-hailing service for your customers</p>
                        </div>

                    </div>

                    <div className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-full bg-yellow-500">
                            <LocalDiningTwoToneIcon className="text-white" />
                        </div>
                        <div className="space-y-2">
                            <Link
                                className='text-[15px] text-black font-medium'
                                href="/shop"
                                role="menuitem"
                            >
                                Food ordering
                            </Link>
                            <p className="text-gray-500 font-light">order food or groceries and get them delivered within minutes</p>
                        </div>
                    </div>

                    <div className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-full bg-purple-500">
                            <ModeOfTravelTwoToneIcon className="text-white" />
                        </div>
                        <div className="space-y-2">
                            <Link
                                className='text-[15px] text-black font-medium'
                                href="/shop"
                                role="menuitem"
                            >
                                Flight booking
                            </Link>
                            <p className="text-gray-500 font-light">Build a flight booking and ticket-issuing service </p>
                        </div>
                    </div>

                    <div className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-full bg-orange-800">
                            <LocalShippingTwoToneIcon className="text-white" />
                        </div>
                        <div className="space-y-2">
                            <Link
                                className='text-[15px] text-black font-medium'
                                href="/shop"
                                role="menuitem"
                            >
                                Package delivery
                            </Link>
                            <p className="text-gray-500 font-light">Build a full logistics platform end-to-end in minutes</p>
                        </div>
                    </div>

                    <div className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-full bg-cyan-500">
                            <GarageTwoToneIcon className="text-white" />
                        </div>
                        <div className="space-y-2">
                            <Link
                                className='text-[15px] text-black font-medium'
                                href="/shop"
                                role="menuitem"
                            >
                                Interstate transportation
                            </Link>
                            <p className="text-gray-500 font-light">Build an Inter-state transport service in your app</p>
                        </div>
                    </div>

                    <div className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-full bg-green-500">
                            <HealthAndSafetyTwoToneIcon className="text-white" />
                        </div>
                        <div className="space-y-2">
                            <Link
                                className='text-[15px] text-black font-medium'
                                href="/shop"
                                role="menuitem"
                            >
                                Health
                            </Link>
                            <p className="text-gray-500 font-light">register for health plans, consult medical professionals, or buy drugs</p>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 w-full col-span-2 mt-4 border-t pt-4">
                        <div className="flex-auto flex flex-row items-center justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                            <div className="p-3 rounded-full bg-black">
                                <DashboardTwoToneIcon className="text-white" />
                            </div>
                            <div className="space-y-2">
                                <Link
                                    className='text-[15px] text-black font-medium'
                                    href="/demo"
                                    role="menuitem"
                                >
                                    Explore all services
                                </Link>
                                <p className="text-gray-500 font-light">Explore all available services lyncs provide</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center gap-5 w-full items-center">
                            <Link href="https://app.lyncs.africa/register"
                                className=" text-[16px] font-medium px-8 py-3 ease transition-all rounded-md font-satoshiMedium  hover:text-blue-500">
                                Login
                            </Link>

                            <Link href="https://app.lyncs.africa/register"
                                className="bg-blue-500 hover:opacity-75 ease transition-all text-[16px] font-medium text-white px-8 py-3 rounded-md font-dmSans shadow-md">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
