import { useState, useRef } from "react";
import Link from "next/link";
//Dropdow Icons
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import IntegrationInstructionsTwoToneIcon from '@mui/icons-material/IntegrationInstructionsTwoTone';

import { usePathname } from "next/navigation";

export const DevelopersDropdown = ({ mode }) => {
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
                    Developers
                </p>

                <div className={`${isDropdownOpen && "rotate-180"} ease transition-all`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleOpenDropdown}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Dropdown content */}

            <div
                className='opacity-0 translate-y-10 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 transition-display transition-all duration-300 origin-to-right absolute z-50 top-14 w-[200px] rounded-xl shadow-sm bg-[#ffffff] border ease-in-out px-7 py-5'
            >
                <div
                    className="space-y-7 w-full"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="dropdown-menu-button"
                    onMouseEnter={handleOpenDropdown}
                    onMouseLeave={handleCloseDropdown}
                >
                    <div className="flex-auto flex flex-row items-center justify-start gap-2 w-full cursor-pointer h-fit">
                        <FindInPageTwoToneIcon fontSize="large" className="text-blue-500" />
                        <Link
                            className='text-lg text-black font-medium'
                            href="/shop"
                            role="menuitem"
                        >
                            Overview
                        </Link>
                    </div>

                    <div className="flex-auto flex flex-row items-center justify-start gap-2 w-full cursor-pointer  h-fit">
                        <IntegrationInstructionsTwoToneIcon fontSize="large" className="text-blue-500" />
                        <Link
                            className='text-lg text-black font-medium'
                            href="/shop"
                            role="menuitem"
                        >
                            Documenation
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};
