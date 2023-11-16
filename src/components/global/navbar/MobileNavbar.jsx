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
            title={<img src="/images/lyncs-logo-blue.png" className="h-4" alt="Lyncs Logo" />}
            opened={opened}
            onClose={onClose}
        >

            <Accordion chevron={<KeyboardArrowDownIcon />} variant='filled' className='my-4 bg-white h-full'>

                <Accordion.Item value='Products'>
                    <Accordion.Control>
                        <p className=' text-lg text-[#54667f]'>Products</p>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className='py-4 space-y-6 text-[#54667f]'>
                            <div className="flex-auto flex flex-row items-start justify-start gap-3 w-full cursor-pointer h-fit ">
                                <StorefrontTwoToneIcon className="text-blue-500" />
                                <div>
                                    <Link
                                        className='text-[#54667f]'
                                        href="/shop"
                                        role="menuitem"
                                    >
                                        Shop
                                    </Link>
                                    <p className="font-light">Build a full online store with no backend or database</p>
                                </div>

                            </div>

                            <div className="flex-auto flex flex-row items-start justify-start gap-3 w-full cursor-pointer h-fit ">
                                <StorefrontTwoToneIcon className="text-blue-500" />
                                <div>
                                    <Link
                                        className=''
                                        href="/shop"
                                        role="menuitem"
                                    >
                                        Shop
                                    </Link>
                                    <p className="font-light">Build a full online store with no backend or database</p>
                                </div>

                            </div>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>

                {/* <Accordion.Item value='Products'>
                    <Accordion.Control>
                        <p className=' text-lg'>Use cases</p>
                    </Accordion.Control>
                    <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item> */}
                <Accordion.Item value='businesses'>
                    <Accordion.Control chevron={false}>
                        <Link className='text-lg text-[#54667f]' href="https://lyncs.africa">Businesses</Link>
                    </Accordion.Control>
                </Accordion.Item>

                <Accordion.Item value='Developers'>
                    <Accordion.Control>
                        <p className=' text-lg text-[#54667f]'>Developers</p>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className='py-4 space-y-6 text-[#54667f]'>
                            <div className="flex-auto flex flex-row items-start justify-start gap-3 w-full cursor-pointer h-fit ">
                                <FindInPageTwoToneIcon className="text-blue-500" />
                                <Link
                                    className='text-[#54667f]'
                                    href="/shop"
                                    role="menuitem"
                                >
                                    Overview
                                </Link>
                            </div>

                            <div className="flex-auto flex flex-row items-start justify-start gap-3 w-full cursor-pointer h-fit ">
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


            <div className='px-10 flex flex-col justify-start items-start border-t pt-7 gap-2 text-[#222c3b] text-lg absolute bottom-0 left-0 right-0'>
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