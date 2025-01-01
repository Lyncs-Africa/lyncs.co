import {Modal} from '@mantine/core';
import Link from 'next/link';
import {useEffect, useState} from "react";

const MobileNavbar = ({opened, onClose}) => {
  const [isChristmasSeason, setIsChristmasSeason] = useState(false)

  function isGetChristmasSeason() {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();

    if (month === 11) {
      return true;
    }

    if (month === 11 && day >= 1 && day <= 31) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    if (isGetChristmasSeason()) {
      setIsChristmasSeason(true)
    } else {
      setIsChristmasSeason(false)
    }
  }, [])
  return (
    <Modal
      className="bg-black"
      centered
      fullScreen
      title={isChristmasSeason ?
        <img src="/images/christmas-logo-light.png" className="h-12 xl:h-16 mr-3" alt="Lyncs Logo"/> :
        <img src="/images/logo.svg" className="h-12 xl:h-16 mr-3" alt="Lyncs Logo"/>}
      opened={opened}
      onClose={onClose}
      closeOnEscape
    >
      <div className='relative font-satoshiMedium'>
        <div className='my-4 bg-white h-full px-3 space-y-6'>
          <div className='text-xl text-gray-600'>
            <Link href="/" role="menuitem">For Individuals</Link>
          </div>
          <div className='text-xl text-gray-600'>
            <Link href="/affilates" role="menuitem">For Affiliates </Link>
          </div>
        </div>


        {/*<Accordion variant='filled' className='my-4 bg-white h-full' chevron={<ExpandMoreIcon/>}>*/}

        {/*  <Accordion.Item value='Developers' className='my-7'>*/}
        {/*    <Accordion.Control>*/}
        {/*      <p className='text-xl text-gray-600'>Developers</p>*/}
        {/*    </Accordion.Control>*/}
        {/*    <Accordion.Panel>*/}
        {/*      <div className='p-4 space-y-6 text-gray-600'>*/}

        {/*        <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit">*/}
        {/*          <IntegrationInstructionsTwoToneIcon className="text-blue-500"/>*/}
        {/*          <div>*/}
        {/*            <p className='text-lg font-medium'>*/}
        {/*              API Reference*/}
        {/*            </p>*/}
        {/*          </div>*/}

        {/*        </div>*/}
        {/*        <div className="flex-auto flex flex-row items-start justify-start gap-4 w-full cursor-pointer h-fit">*/}
        {/*          <MenuBookTwoToneIcon className="text-blue-500"/>*/}
        {/*          <div>*/}
        {/*            <p className='text-lg font-medium'>*/}
        {/*              Documentation*/}
        {/*            </p>*/}
        {/*          </div>*/}

        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </Accordion.Panel>*/}
        {/*  </Accordion.Item>*/}

        {/*</Accordion>*/}

      </div>

      <div
        className='px-4 flex flex-col justify-start items-start border-t pt-7 gap-1 text-[#222c3b] text-lg bottom-0 left-0 right-0 bg-white sticky'>
        <button className='w-full py-3 rounded-md bg-blue-600 text-white shadow-md'>
          <Link target="_blank" href="http://app.lyncs.africa/register">
            Get started
          </Link>
        </button>
      </div>
    </Modal>
  )
}

export default MobileNavbar;
