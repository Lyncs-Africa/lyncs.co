import React, {useEffect, useLayoutEffect, useState} from 'react';
import Navbar from "@/components/global/navbar/Navbar";
import ClientOnly from "@/components/global/ClientOnly";
import Footer from "@/components/global/footer/Footer";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Head from 'next/head';
import Script from 'next/script';
import Hero from "@/components/core/forIndividuals/Hero";
import Services from "@/components/core/forIndividuals/Services";
import FlightBooking from "@/components/core/forIndividuals/FlightBooking";
import Stream from "@/components/core/forIndividuals/Stream";
import Eat from "@/components/core/forIndividuals/Eat";
import Ecommerce from "@/components/core/forIndividuals/Ecommerce";
import {BounceLoader} from "react-spinners";

const Index = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)
  const [isWidgetLoading, setIsWidgetLoading] = useState(false)
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.target.scrollingElement.scrollTop);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.scrollingElement.style.overflowY = "auto"
  }, [])

  useEffect(() => {
    const handleWidgetOpen = () => {
      setIsWidgetOpen(true)
    };
    window.addEventListener('lyncsWidgetOpened', handleWidgetOpen);
    return () => {
      window.removeEventListener('lyncsWidgetOpened', handleWidgetOpen);
    };
  }, []);

  useEffect(() => {
    const handleWidgetClose = () => {
      setIsWidgetOpen(false)
    };
    window.addEventListener('lyncsWidgetClosed', handleWidgetClose);
    return () => {
      window.removeEventListener('lyncsWidgetClosed', handleWidgetClose);
    };
  }, []);

  const handleIsWidgetLoading = (e) => {
    setIsWidgetLoading(e)
  }

  return (
    <div>
      {
        isWidgetLoading && (
          <div className="fixed inset-0 min-h-screen w-full flex justify-center z-50 items-center">
            <div className="inset-0 absolute bg-white"></div>
           <div className="relative"> <BounceLoader color="#2563EB"/></div>
          </div>
        )
      }
      <ClientOnly>
        <Script crossOrigin src="https://lyncs-web-widget.vercel.app/client.js"></Script>
        <Head>
          <title>Lyncs Africa</title>
        </Head>
        <Navbar transparent={!isWidgetOpen} scrollTop={scrollTop}/>
        <Hero isOpen={isWidgetOpen}
              handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
        <FlightBooking handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
        <Ecommerce handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
        <Stream handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
        <Eat handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
        <Services handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
        <Footer/>
        <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop}/>
      </ClientOnly>
    </div>

  );
};

export default Index;
