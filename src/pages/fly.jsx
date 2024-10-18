import React, {useState} from 'react';
import Script from "next/script";
import {BounceLoader} from "react-spinners";
import ClientOnly from "@/components/global/ClientOnly";
import Footer from "@/components/global/footer/Footer";
import Hero from "@/components/core/fly/Hero";
import FlightBooking from "@/components/core/forIndividuals/FlightBooking";

const Fly = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)
  const [isWidgetLoading, setIsWidgetLoading] = useState(false)

  const handleIsWidgetLoading = (e) => {
    setIsWidgetLoading(e)
  }

  return (
    <div>
      {
        isWidgetLoading && (
          <div className="fixed inset-0 min-h-screen w-full flex justify-center z-50 items-center">
            <div className="inset-0 absolute bg-white"></div>
            <div className="relative"><BounceLoader color="#2563EB"/></div>
          </div>
        )
      }
      <Script crossOrigin src="https://lyncs-web-widget.netlify.app/client.js"></Script>
      <ClientOnly>
        <Hero isOpen={isWidgetOpen}
              handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
        <div className="py-[70px] md:pt-[160px]">
          <FlightBooking handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
        </div>
        <Footer dark/>
      </ClientOnly>
    </div>
  );
};

export default Fly;
