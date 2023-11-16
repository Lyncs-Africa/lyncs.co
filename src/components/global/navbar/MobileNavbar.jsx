import { Modal, Accordion } from '@mantine/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import IntegrationInstructionsTwoToneIcon from '@mui/icons-material/IntegrationInstructionsTwoTone';

import Link from 'next/link';

const MobileNavbar = ({ opened, onClose }) => {
    return (
        <Modal
            centered
            fullScreen
            title={<img src="/images/lyncs-logo-blue.png" className="h-6" alt="Lyncs Logo" />}
            opened={opened}
            onClose={onClose}
        >

            <Accordion variant='filled' className='my-4 bg-white h-full'>

                <Accordion.Item className='my-7' value='Products'>
                    <Accordion.Control>
                        <p className=' text-xl text-[#54667f]'>Products</p>
                    </Accordion.Control>
                    <Accordion.Panel className='overflow-y-auto'>
                        <div className='py-4 space-y-10 text-[#54667f] overflow-y-scroll h-full font-dmSans pl-2'>
                            <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                <div className="p-1 rounded-full bg-blue-400">
                                    <StorefrontTwoToneIcon className="text-white" />
                                </div>
                                <div className='space-y-2'>
                                    <Link
                                        className='text-[#54667f] text-lg font-medium'
                                        href="/shop"
                                        role="menuitem"
                                    >
                                        Shop
                                    </Link>
                                    <p className="font-light">Build a full online store with no backend or database</p>
                                </div>

                            </div>

                            <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit">
                                <div className="p-1 rounded-full bg-green-500">
                                    <HealthAndSafetyTwoToneIcon className="text-white" />
                                </div>
                                <div className='space-y-2'>
                                    <Link
                                        className='text-[#54667f] text-lg font-medium'
                                        href="/health"
                                        role="menuitem"
                                    >
                                        Health
                                    </Link>
                                    <p className="font-light">register for health plans, consult medical professionals, or buy drugs</p>
                                </div>

                            </div>

                            <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                <div className="p-1 rounded-full bg-red-500">
                                    <AccountBalanceWalletTwoToneIcon className="text-white" />
                                </div>
                                <div className='space-y-2'>
                                    <Link
                                        className='text-[#54667f] text-lg font-medium'
                                        href="/health"
                                        role="menuitem"
                                    >
                                        Airtime & Bill Payment
                                    </Link>
                                    <p className="font-light">Buy airtime, data, cable tv, electricity and more</p>
                                </div>

                            </div>

                            <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                <div className="p-1 rounded-full bg-orange-500">
                                    <LocalTaxiTwoToneIcon className="text-white" />
                                </div>
                                <div className='space-y-2'>
                                    <Link
                                        className='text-[#54667f] text-lg font-medium'
                                        href="/health"
                                        role="menuitem"
                                    >
                                        Ride
                                    </Link>
                                    <p className="font-light">Build an e-hailing service for your customers</p>
                                </div>

                            </div>

                            <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                <div className="p-1 rounded-full bg-yellow-500">
                                    <LocalTaxiTwoToneIcon className="text-white" />
                                </div>
                                <div className='space-y-2'>
                                    <Link
                                        className='text-[#54667f] text-lg font-medium'
                                        href="/health"
                                        role="menuitem"
                                    >
                                        Eat
                                    </Link>
                                    <p className="font-light">Order food or groceries and get them delivered within minutes</p>
                                </div>

                            </div>

                            <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                <div className="p-1 rounded-full bg-purple-500">
                                    <ModeOfTravelTwoToneIcon className="text-white" />
                                </div>
                                <div className='space-y-2'>
                                    <Link
                                        className='text-[#54667f] text-lg font-medium'
                                        href="/health"
                                        role="menuitem"
                                    >
                                        Travel
                                    </Link>
                                    <p className="font-light">Build a flight booking and ticket-issuing service</p>
                                </div>

                            </div>

                            <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                <div className="p-1 rounded-full bg-orange-800">
                                    <LocalShippingTwoToneIcon className="text-white" />
                                </div>
                                <div className='space-y-2'>
                                    <Link
                                        className='text-[#54667f] text-lg font-medium'
                                        href="/health"
                                        role="menuitem"
                                    >
                                        Delivery
                                    </Link>
                                    <p className="font-light">Build a full logistics platform end-to-end in minutes</p>
                                </div>

                            </div>

                            <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                <div className="p-1 rounded-full bg-cyan-500">
                                    <OtherHousesTwoToneIcon className="text-white" />
                                </div>
                                <div className='space-y-2'>
                                    <Link
                                        className='text-[#54667f] text-lg font-medium'
                                        href="/health"
                                        role="menuitem"
                                    >
                                        Bus
                                    </Link>
                                    <p className="font-light">Build an Inter-state transport service in your app</p>
                                </div>

                            </div>

                        </div>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value='businesses'>
                    <Accordion.Control chevron={false}>
                        <Link className='text-xl text-[#54667f]' href="https://lyncs.africa">Businesses</Link>
                    </Accordion.Control>
                </Accordion.Item>

                <Accordion.Item value='Developers' className='my-7'>
                    <Accordion.Control>
                        <p className='text-xl text-[#54667f]'>Developers</p>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className='py-4 space-y-6 text-[#54667f]'>
                            <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                <FindInPageTwoToneIcon className="text-blue-500" />
                                <Link
                                    className='text-[#54667f]'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Overview
                                </Link>
                            </div>

                            <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                <IntegrationInstructionsTwoToneIcon className="text-blue-500" />
                                <div>
                                    <Link
                                        className=''
                                        href="/shop"
                                        role="menuitem"
                                    >
                                        Documentation
                                    </Link>
                                    <p className="font-light">Build a full online store with no backend or database</p>
                                </div>

                            </div>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>

            </Accordion>


            <div className='px-4 flex flex-col justify-start items-start border-t pt-7 gap-1 text-[#222c3b] text-lg sticky bottom-0 left-0 right-0 bg-white'>
                <button className='w-full py-3 rounded-md bg-blue-600 text-white shadow-md'>
                    Sign up
                </button>

                <button className='w-full py-3 rounded-md bg-white'>
                    Login
                </button>
            </div>

        </Modal>
    )
}

export default MobileNavbar;