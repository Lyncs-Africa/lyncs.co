import {useRef, useState} from "react";
import Link from "next/link";
//Dropdow Icons
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import {usePathname} from "next/navigation";
import {LocalOffer} from "@mui/icons-material";

export const WhyUsDropdown = ({mode}) => {
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

      <div
        className={`${mode.transparent || mode.dark || mode.scrollTop >= 100 ? 'text-white' : 'text-gray-300 md:text-gray-700'} ${mode.transparent ? 'md:hover:text-blue-300' : 'md:hover:text-blue-700'} flex flex-row justify-start items-center cursor-pointer ease transition-all`}
        onMouseEnter={handleOpenDropdown} onMouseLeave={handleCloseDropdown}>
        <p className={`block py-7 px-4 text-lg rounded md:border-0 `}>
          Why Lyncs
        </p>

        <div className={`${isDropdownOpen && "rotate-180"} ease transition-all`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" onClick={handleOpenDropdown}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>


      <div
        className='opacity-0 translate-y-10 modal-card pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 transition-display transition-all duration-300 origin-to-right absolute z-50 top-20 -left-40 w-[480px] rounded-xl bg-[#ffffff] border ease-in-out p-10'
      >
        <div
          className="space-y-10 w-full"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu-button"
          onMouseEnter={handleOpenDropdown}
          onMouseLeave={handleCloseDropdown}
        >
          <Link href="/whyus" role="menuitem"
                className="flex-auto flex flex-row items-center justify-start gap-7 w-full cursor-pointer h-fit">
            <div className="bg-blue-400 p-2 rounded-full">
              <FavoriteOutlinedIcon className="text-white"/>
            </div>

            <div className="space-y-2">
              <p className='text-black text-[14px]'>
                Why choose Lyncs
              </p>

              <p className="text-gray-500 font-light text-[13px]">Here's why 250+ Businesses use Lyncs in their app</p>

            </div>
          </Link>

          <Link href="/pricing"
                className="flex-auto flex flex-row items-center justify-start gap-7 w-full cursor-pointer h-fit">
            <div className="bg-blue-400 p-2 rounded-full">
              <LocalOffer className="text-white"/>
            </div>

            <div className="space-y-1">
              <p
                className='text-black text-[14px]'
                role="menuitem"
              >
                Pricing
              </p>

              <p className="text-gray-500 font-light text-[13px]">Affordable pricing for developers, SMEs and enterprises</p>

            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};
