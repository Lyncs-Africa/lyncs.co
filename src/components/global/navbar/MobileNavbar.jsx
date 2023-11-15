import { Modal, Accordion, rem } from '@mantine/core';
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

import Link from 'next/link';

const MobileNavbar = ({ opened, onClose }) => {
    return (
        <Modal
            centered
            title={<img
                src="/images/lyncs-logo-blues.png"
                className="h-4"
                alt="Lyncs Logo"
            />} opened={opened} onClose={onClose} >
            <Accordion chevron={<KeyboardArrowDownIcon />} variant='filled' className='my-4 bg-white' >

                <Accordion.Item value='Products'>
                    <Accordion.Control>
                        <p className='font-medium text-lg'>Products</p>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className='bg-white p-4 space-y-6'>
                            <div className="flex-auto flex flex-row items-start justify-start gap-3 w-full cursor-pointer h-fit font-medium">
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

                            <div className="flex-auto flex flex-row items-start justify-start gap-3 w-full cursor-pointer h-fit font-medium">
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

                <Accordion.Item value='Products'>
                    <Accordion.Control>
                        <p className='font-medium text-lg'>Use cases</p>
                    </Accordion.Control>
                    <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>

            </Accordion>

            <div className='flex flex-col justify-start items-start gap-7 pl-4 pb-7 text-lg font-medium text-[#222c3b]'>
                <Link className='' href="https://lyncs.africa">Businesses</Link>
                <Link className='' href="https://docs.lyncs.africa/">Developers</Link>
            </div>

            <div className='font-medium w-full flex flex-col justify-start items-start border-t pt-7 gap-2 text-[#222c3b] text-lg'>
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