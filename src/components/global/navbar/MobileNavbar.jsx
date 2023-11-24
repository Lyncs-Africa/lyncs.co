import { Modal, Accordion, CloseIcon } from '@mantine/core';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
//Dropdow Icons
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import ModeOfTravelTwoToneIcon from '@mui/icons-material/ModeOfTravelTwoTone';
import LocalDiningTwoToneIcon from '@mui/icons-material/LocalDiningTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OtherHousesTwoToneIcon from '@mui/icons-material/OtherHousesTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import LocalTaxiTwoToneIcon from '@mui/icons-material/LocalTaxiTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import TheatersTwoToneIcon from '@mui/icons-material/TheatersTwoTone';

import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import IntegrationInstructionsTwoToneIcon from '@mui/icons-material/IntegrationInstructionsTwoTone';

import Link from 'next/link';
import { LocalOffer, Theaters } from '@mui/icons-material';

const MobileNavbar = ({ opened, onClose }) => {
    return (
        <Modal
            centered
            fullScreen
            title={<img src="/images/lyncs-logo-blue.png" className="h-6 w-32" alt="Lyncs Logo" />}
            opened={opened}
            onClose={onClose}
            closeOnEscape
        >
            <div className='relative font-satoshiMedium'>
                <Accordion variant='filled' className='my-4 bg-white h-full' chevron={<ExpandMoreIcon />}>

                    <Accordion.Item className='my-7' value='Products'>
                        <Accordion.Control >
                            <p className=' text-xl text-gray-600'>Products</p>
                        </Accordion.Control>
                        <Accordion.Panel className='overflow-y-auto'>
                            <div className='py-5 space-y-10 overflow-y-scroll h-full pl-2 font-satoshiMedium'>
                                <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                    <div className="p-1 rounded-full bg-blue-400">
                                        <StorefrontTwoToneIcon className="text-white" />
                                    </div>
                                    <div className='space-y-2'>
                                        <Link
                                            className=' text-lg font-medium'
                                            href="/shop"
                                            role="menuitem"
                                        >
                                            Online Shopping
                                        </Link>
                                        <p className="font-light text-gray-600">
                                            Build a full online store with no backend or database in seconds.
                                        </p>
                                    </div>

                                </div>

                                <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                    <div className="p-1 rounded-full bg-orange-500">
                                        <LocalTaxiTwoToneIcon className="text-white" />
                                    </div>
                                    <div className='space-y-2'>
                                        <Link
                                            className=' text-lg font-medium'
                                            href="/health"
                                            role="menuitem"
                                        >
                                            Cab Hailing
                                        </Link>
                                        <p className="font-light text-gray-600">Build an e-hailing service for your customers</p>
                                    </div>

                                </div>

                                <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                    <div className="p-1 rounded-full bg-yellow-500">
                                        <LocalTaxiTwoToneIcon className="text-white" />
                                    </div>
                                    <div className='space-y-2'>
                                        <Link
                                            className=' text-lg font-medium'
                                            href="/health"
                                            role="menuitem"
                                        >
                                            Food Ordering
                                        </Link>
                                        <p className="font-light text-gray-600">
                                            Create a sweet and swift online food ordering platform for your customers in a matter of seconds
                                        </p>
                                    </div>

                                </div>

                                <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                    <div className="p-1 rounded-full bg-purple-500">
                                        <ModeOfTravelTwoToneIcon className="text-white" />
                                    </div>
                                    <div className='space-y-2'>
                                        <Link
                                            className=' text-lg font-medium'
                                            href="/health"
                                            role="menuitem"
                                        >
                                            Travel
                                        </Link>
                                        <p className="font-light text-gray-600">Build a flight booking and ticket-issuing service</p>
                                    </div>

                                </div>

                                <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                    <div className="p-1 rounded-full bg-orange-800">
                                        <LocalShippingTwoToneIcon className="text-white" />
                                    </div>
                                    <div className='space-y-2'>
                                        <Link
                                            className=' text-lg font-medium'
                                            href="/health"
                                            role="menuitem"
                                        >
                                            Delivery
                                        </Link>
                                        <p className="font-light text-gray-600">Build a full logistics platform end-to-end in minutes</p>
                                    </div>

                                </div>

                                <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                    <div className="p-1 rounded-full bg-cyan-500">
                                        <OtherHousesTwoToneIcon className="text-white" />
                                    </div>
                                    <div className='space-y-2'>
                                        <Link
                                            className=' text-lg font-medium'
                                            href="/health"
                                            role="menuitem"
                                        >
                                            Bus
                                        </Link>
                                        <p className="font-light text-gray-600">Build an Inter-state transport service in your app</p>
                                    </div>

                                </div>

                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value='businesses'>
                        <Accordion.Control chevron={false}>
                            <Link className='text-xl text-gray-600' href="https://lyncs.africa">Why Lyncs</Link>
                        </Accordion.Control>
                        <Accordion.Panel>
                            <div className='py-5 space-y-8'>

                                <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                    <div className="bg-blue-400 p-1 rounded-full">
                                        <FavoriteOutlinedIcon className="text-white" />
                                    </div>

                                    <div className='space-y-2'>
                                        <Link
                                            className='text-lg font-medium'
                                            href="/health"
                                            role="menuitem"
                                        >
                                            Why choose us
                                        </Link>
                                        <p className="font-light text-gray-500">
                                            Experience Lyncs APIs in action
                                        </p>
                                    </div>

                                </div>

                                <Link href="/pricing" className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                    <div className="bg-blue-400 p-1 rounded-full">
                                        <LocalOffer className="text-white" />
                                    </div>

                                    <div className="space-y-1">
                                        <p className='text-black text-lg font-medium'>
                                            Pricing
                                        </p>

                                        <p className="text-gray-500 font-light">Affordable pricing for developers, SMEs and enterprises</p>

                                    </div>
                                </Link>

                                <Link href="/demo" role="menuitem" className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit ">
                                    <div className="bg-blue-400 p-1 rounded-full">
                                        <Theaters className="text-white" />
                                    </div>

                                    <div className="space-y-1">
                                        <p className='font-medium text-lg'>
                                            See a Demo
                                        </p>

                                        <p className="text-gray-500 font-light">Experience Lyncs APIs in action</p>

                                    </div>
                                </Link>

                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>


                    <Accordion.Item value='Developers' className='my-7'>
                        <Accordion.Control>
                            <p className='text-xl text-gray-600'>Developers</p>
                        </Accordion.Control>
                        <Accordion.Panel>
                            <div className='p-4 space-y-6 text-gray-600'>

                                <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit">
                                    <IntegrationInstructionsTwoToneIcon className="text-blue-500" />
                                    <div>
                                        <p className='text-lg font-medium'>
                                            API Reference
                                        </p>
                                    </div>

                                </div>
                                <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit">
                                    <MenuBookTwoToneIcon className="text-blue-500" />
                                    <div>
                                        <p className='text-lg font-medium'>
                                            Documentation
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>

                </Accordion>

            </div>

            <div className='px-4 flex flex-col justify-start items-start border-t pt-7 gap-1 text-[#222c3b] text-lg bottom-0 left-0 right-0 bg-white sticky'>
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