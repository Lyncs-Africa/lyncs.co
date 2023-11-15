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
        <div ref={dropdownRef} className="group relative">

            <div className={`${mode.transparent || mode.dark || mode.scrollTop >= 100 ? 'text-white' : 'text-gray-300 md:text-gray-700'} flex flex-row justify-start items-center cursor-pointer md:hover:text-blue-700 ease transition-all`} onMouseEnter={handleOpenDropdown} onMouseLeave={handleCloseDropdown}>
                <p className={`block py-4 pl-3 pr-4 text-lg rounded md:border-0 `}>
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
                className='opacity-0 translate-y-10 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 transition-display transition-all duration-300 origin-to-right absolute z-50 top-20 -left-80 w-[200px]  md:w-[900px] rounded-xl shadow-sm bg-[#ffffff] border ease-in-out px-7 py-5'
            >

                <div
                    className="py-1 dropdown-content w-full grid grid-cols-1 md:grid-cols-2 gap-x-10"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="dropdown-menu-button"
                    onMouseEnter={handleOpenDropdown}
                    onMouseLeave={handleCloseDropdown}
                >
                    <div className="flex-auto flex flex-row items-start justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-md bg-blue-100">
                            <StorefrontTwoToneIcon fontSize="large" className="text-blue-500" />
                        </div>
                        <div>
                            <Link
                                className='text-lg text-black font-semibold'
                                href="/shop"
                                role="menuitem"
                            >
                                Shop
                            </Link>
                            <p className="text-lg text-gray-500 font-light">Build a full online store with no backend or database</p>
                        </div>

                    </div>

                    <div className="flex-auto flex flex-row items-start justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-md bg-blue-100">
                            <HealthAndSafetyTwoToneIcon fontSize="large" className="text-blue-500" />
                        </div>
                        <div>
                            <Link
                                className='text-lg text-black font-semibold'
                                href="/shop"
                                role="menuitem"
                            >
                                Health
                            </Link>
                            <p className="text-lg text-gray-500 font-light">register for health plans, consult medical professionals, or buy drugs</p>
                        </div>

                    </div>

                    <div className="flex-auto flex flex-row items-start justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-md bg-blue-100">
                            <AccountBalanceWalletTwoToneIcon fontSize="large" className="text-blue-500" />
                        </div>
                        <div>
                            <Link
                                className='text-lg text-black font-semibold'
                                href="/shop"
                                role="menuitem"
                            >
                                Airtime & Bill Payment
                            </Link>
                            <p className="text-lg text-gray-500 font-light">Buy airtime, data, cable tv, electricity and more</p>
                        </div>

                    </div>

                    <div className="flex-auto flex flex-row items-start justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-md bg-blue-100">
                            <LocalTaxiTwoToneIcon fontSize="large" className="text-blue-500" />
                        </div>
                        <div>
                            <Link
                                className='text-lg text-black font-semibold'
                                href="/shop"
                                role="menuitem"
                            >
                                Ride
                            </Link>
                            <p className="text-lg text-gray-500 font-light">Build an e-hailing service for your customers</p>
                        </div>

                    </div>

                    <div className="flex-auto flex flex-row items-start justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-md bg-blue-100">
                            <LocalDiningTwoToneIcon fontSize="large" className="text-blue-500" />
                        </div>
                        <div>
                            <Link
                                className='text-lg text-black font-semibold'
                                href="/shop"
                                role="menuitem"
                            >
                                Eat
                            </Link>
                            <p className="text-lg text-gray-500 font-light">order food or groceries and get them delivered within minutes</p>
                        </div>
                    </div>

                    <div className="flex-auto flex flex-row items-start justify-start gap-5 w-full p-4 cursor-pointer hover:bg-gray-50 transition-all ease-in-out rounded-md h-fit">
                        <div className="p-3 rounded-md bg-blue-100">
                            <ModeOfTravelTwoToneIcon fontSize="large" className="text-blue-500" />
                        </div>
                        <div>
                            <Link
                                className='text-lg text-black font-semibold'
                                href="/shop"
                                role="menuitem"
                            >
                                Travel
                            </Link>
                            <p className="text-lg text-gray-500 font-light">Build a flight booking and ticket-issuing service </p>
                        </div>
                    </div>

                    <div className="flex-auto flex flex-row items-center justify-center gap-7 w-full p-4 cursor-pointer">
                        <div className="p-3 rounded-md bg-blue-100">
                            <LocalShippingTwoToneIcon fontSize="large" className="text-blue-500" />
                        </div>
                        <div>
                            <Link
                                className='text-lg text-black font-semibold'
                                href="/shop"
                                role="menuitem"
                            >
                                Delivery
                            </Link>
                            <p className="text-lg text-gray-500 font-light">Deliver anything anywhere within your app | Build a full logistics platform end-to-end in minutes</p>
                        </div>
                    </div>

                    <div className="flex-auto flex flex-row items-center justify-center gap-7 w-full p-4 cursor-pointer">
                        <div className="p-3 rounded-md bg-blue-100">
                            <OtherHousesTwoToneIcon fontSize="large" className="text-blue-500" />
                        </div>
                        <div>
                            <Link
                                className='text-lg text-black font-semibold'
                                href="/shop"
                                role="menuitem"
                            >
                                Bus
                            </Link>
                            <p className="text-lg text-gray-500 font-light">register for health plans, consult medical professionals, or buy drugs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
