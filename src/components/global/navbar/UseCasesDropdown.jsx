import { useState, useRef } from "react";
import {usePathname} from 'next/navigation';
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


export const UseCasesDropdown = ({ mode }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = usePathname()
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
            onMouseEnter={handleOpenDropdown}
            onMouseLeave={handleCloseDropdown}
            ref={dropdownRef}
        >

            <div className="flex flex-row items-center gap-3 pl-3">
                <p className={`cursor-pointer ${mode.transparent || mode.dark || mode.scrollTop >= 100 ? 'text-white' : 'text-gray-300 md:text-gray-700'} text-lg`}>Use Cases</p>
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200 md:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleOpenDropdown}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Dropdown content */}
            {isDropdownOpen && (
                <div
                    className="origin-to-right absolute mt-5 top-10 -left-96 w-[800px] rounded-md shadow-lg bg-white  ring-1 ring-black ring-opacity-5"
                >
                    <div
                        className="py-1 dropdown-content flex flex-row flex-wrap items-center justify-between"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdown-menu-button"
                        onMouseEnter={handleOpenDropdown}
                        onMouseLeave={handleCloseDropdown}
                    >
                        <div className="flex-2 w-[50%] flex flex-row items-center justify-center gap-7 p-4 cursor-pointer">
                            <StorefrontTwoToneIcon fontSize="large" className="text-blue-500" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Shop with ease
                                </Link>
                                <p className="text-sm text-gray-500">Allow your customers to shop within your app</p>
                            </div>

                        </div>
                        <div className="flex-2 w-[50%] flex flex-row items-center justify-center gap-7 p-4 cursor-pointer">
                            <LocalDiningTwoToneIcon fontSize="large" className="text-green-500" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Eat on Time
                                </Link>
                                <p className="text-sm text-gray-500">buy groceries or eat from restaurants at light's speed</p>
                            </div>

                        </div>
                        <div className="flex-2 w-[50%] flex flex-row items-center justify-self-center gap-7 p-4 cursor-pointer">
                            <LocalDiningTwoToneIcon fontSize="large" className="text-orange-500 w-full" />
                            <div>
                                <Link
                                    className='text-md font-bold w-full'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Ride Alone or Share Ride
                                </Link>
                                <p className="text-sm text-gray-500">Lorem ipsum dolor </p>
                            </div>

                        </div>
                        <div className="flex-2 w-[50%] flex flex-row items-center justify-center gap-7 p-4 cursor-pointer">
                            <SchoolTwoToneIcon fontSize="large" className="text-yellow-500" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    School
                                </Link>
                                <p className="text-sm text-gray-500">Pay School fees, buy school books and other school accessories</p>
                            </div>

                        </div>
                        <div className="flex-2 w-[50%] flex flex-row items-center justify-center gap-7 p-4 cursor-pointer">
                            <HealthAndSafetyTwoToneIcon fontSize="large" className="text-purple-500" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Stay Healthy
                                </Link>
                                <p className="text-sm text-gray-500">Buy Drugs, Register for HMO & Gym Memberships</p>
                            </div>
                        </div>
                        <div className="flex-2 w-[50%] flex flex-row items-center justify-start gap-7 p-4 cursor-pointer">
                            <OtherHousesTwoToneIcon fontSize="large" className="text-cyan-500" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Live Happily
                                </Link>
                                <p className="text-sm text-gray-500">Find a House or Pay Rent upfront or monthly</p>
                            </div>
                        </div>
                        <div className="flex-2 w-[50%] flex flex-row items-center justify-center gap-7 p-4 cursor-pointer">
                            <AccountBalanceWalletTwoToneIcon fontSize="large" className="text-green-800" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Airtime & Bill Payment
                                </Link>
                                <p className="text-sm text-gray-500">Buy airtime,data and pay for electricity bills, cable tv,etc</p>
                            </div>
                        </div>
                        <div className="flex-2 w-[50%] flex flex-row items-center justify-center gap-7  p-4 cursor-pointer">
                            <ModeOfTravelTwoToneIcon fontSize="large" className="text-red-500" />
                            <div>
                                <Link
                                    className='text-md font-bold'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Travel
                                </Link>
                                <p className="text-sm text-gray-500">Book flights, process passport and VISA applications, and more</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
