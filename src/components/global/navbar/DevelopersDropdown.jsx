import {useRef, useState} from "react";
import Link from "next/link";
import PeopleIcon from '@mui/icons-material/People';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

import {usePathname} from "next/navigation";
import {BsLuggage} from "react-icons/bs";

export const DevelopersDropdown = ({mode}) => {
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

  const locationText = {
    '/affilates': 'For Affiliates',
    '/individuals': 'For Individuals',
    '/businesses': 'For Businesses'
  };
  return (
    <div ref={dropdownRef} className="group relative">

      <div
        className={`${mode.transparent || mode.dark || mode.scrollTop >= 100 ? 'text-white' : 'text-gray-300 md:text-gray-700'} ${mode.transparent ? 'md:hover:text-blue-300' : 'md:hover:text-blue-700'} flex flex-row justify-start items-center cursor-pointer ease transition-all`}
        onMouseEnter={handleOpenDropdown} onMouseLeave={handleCloseDropdown}>
        <p className={`block py-7 px-4 text-lg rounded md:border-0 `}>
          {locationText[location] || 'Use Cases'}
        </p>

        <div className={`${isDropdownOpen && "rotate-180"} ease transition-all`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" onClick={handleOpenDropdown}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>

      <div
        className='opacity-0 translate-y-10 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 transition-display transition-all duration-300 origin-to-right absolute z-50 top-20 w-[250px] rounded-xl bg-[#ffffff]  ease-in-out px-7 py-5 modal-card'
      >
        <div
          className="space-y-8 w-full"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu-button"
          onMouseEnter={handleOpenDropdown}
          onMouseLeave={handleCloseDropdown}
        >
          <Link href="/individuals" role="menuitem"
                className="flex-auto flex flex-row items-center justify-start gap-4 w-full cursor-pointer h-fit">
            <BsLuggage size="20" className="text-blue-500"/>
            <p className='text-[14px] text-black'>For Individuals</p>
          </Link>
          <Link href="/affilates" role="menuitem"
                className="flex-auto flex flex-row items-center justify-start gap-4 w-full cursor-pointer h-fit">
            <PeopleIcon className="text-purple-500"/>
            <p className='text-[14px] text-black'>For Affiliates</p>
          </Link>

        </div>
      </div>
    </div>
  );
};
