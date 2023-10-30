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
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';

export const ProductsDropdown = ({ mode }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const closeTimeoutRef = useRef(null);

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
        <div
            className="relative inline-block text-left py-4"

            ref={dropdownRef}
        >

            <div className="pl-3 flex flex-row items-center gap-3 cursor-pointer" onMouseEnter={handleOpenDropdown} onMouseLeave={handleCloseDropdown}>
                <p className={`${mode.transparent || mode.dark || mode.scrollTop >= 100 ? 'text-white' : 'text-gray-300 md:text-gray-700'} text-lg`}>Products</p>
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200 md:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleOpenDropdown}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Dropdown content */}
            {isDropdownOpen && (
                <div
                    className="origin-to-right fixed z-50 top-32 xl:top-20 xl:left-80 w-[200px] md:w-[800px] rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5"
                >
                    <div
                        className="py-1 dropdown-content w-full flex flex-col xl:grid xl:grid-cols-2"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdown-menu-button"
                        onMouseEnter={handleOpenDropdown}
                        onMouseLeave={handleCloseDropdown}
                    >
                        <div className="flex-auto flex flex-row items-center justify-center gap-7 w-full p-4 cursor-pointer">
                            <StorefrontTwoToneIcon fontSize="large" className="text-blue-500" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Shop
                                </Link>
                                <p className="text-sm text-gray-500">buy products at the best rates in the market</p>
                            </div>

                        </div>
                        <div className="flex-auto flex flex-row items-center justify-start gap-7 w-full p-4 cursor-pointer">
                            <HealthAndSafetyTwoToneIcon fontSize="large" className="text-green-500" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Health
                                </Link>
                                <p className="text-sm text-gray-500">register for health plans, consult medical professionals, or buy drugs</p>
                            </div>

                        </div>
                        <div className="flex-auto flex flex-row items-center justify-start gap-7 p-4 cursor-pointer">
                            <AccountBalanceWalletTwoToneIcon fontSize="large" className="text-orange-500 w-full" />
                            <div>
                                <Link
                                    className='text-md font-bold w-full'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Airtime & Bill Payment
                                </Link>
                                <p className="text-sm text-gray-500">Buy airtime, data, cable tv, electricity and more</p>
                            </div>

                        </div>
                        <div className="flex-auto flex flex-row items-center justify-center gap-7 w-full p-4 cursor-pointer">
                            <LocalTaxiTwoToneIcon fontSize="large" className="text-yellow-500" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Ride
                                </Link>
                                <p className="text-sm text-gray-500">Ride alone or with friends and split the bill</p>
                            </div>

                        </div>
                        <div className="flex-auto flex flex-row items-center justify-center gap-7 w-full p-4 cursor-pointer">
                            <LocalDiningTwoToneIcon fontSize="large" className="text-purple-500" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Eat
                                </Link>
                                <p className="text-sm text-gray-500">order food or groceries and get them delivered within minutes</p>
                            </div>
                        </div>
                        <div className="flex-auto flex flex-row items-center justify-center gap-7 w-full p-4 cursor-pointer">
                            <ModeOfTravelTwoToneIcon fontSize="large" className="text-cyan-500" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Travel
                                </Link>
                                <p className="text-sm text-gray-500">Book flights or process VISAS and passports in days and not months</p>
                            </div>
                        </div>
                        <div className="flex-auto flex flex-row items-center justify-center gap-7 w-full p-4 cursor-pointer">
                            <SchoolTwoToneIcon fontSize="large" className="text-green-800" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    School
                                </Link>
                                <p className="text-sm text-gray-500">Pay school fees, buy books, and other school items</p>
                            </div>
                        </div>
                        <div className="flex-auto flex flex-row items-center justify-center gap-7 w-full p-4 cursor-pointer">
                            <OtherHousesTwoToneIcon fontSize="large" className="text-red-500" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    House
                                </Link>
                                <p className="text-sm text-gray-500">register for health plans, consult medical professionals, or buy drugs</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
