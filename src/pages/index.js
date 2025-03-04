import React, {useEffect, useLayoutEffect, useState} from 'react';
import Navbar from "@/components/global/navbar/Navbar";
import ClientOnly from "@/components/global/ClientOnly";
import Footer from "@/components/global/footer/Footer";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Head from 'next/head';
import Script from 'next/script';
import FlightBooking from "@/components/core/home/FlightBooking";
import WhyDoYou from "@/components/core/home/WhyDoYou";
import Revolutionizing from "@/components/core/home/Revolutionizing";
import Hero from "@/components/core/home/Hero";
import RideSharing from "@/components/core/home/RideSharing";
import SeeWhy from "@/components/core/home/SeeWhy";
import Strip from "@/components/core/home/Strip";
import Pss from "@/components/core/home/Pss";
import Loader from "@/components/core/shared/Loader";
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
    <>
      <Head>
        <title>Lyncs | Lyncs Africa | Simplifying Travel & Mobility Solutions</title>
        <meta name="description"
              content="Lyncs | Lyncs Africa - simplifies mobility with top travel deals, flexible bookings, tours, and easy payment plans for trips, bus tickets, and delivery vehicle purchases. Your one-stop travel and transport solution."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta name="keywords"
              content="travel, tours, flexible bookings, mobility solutions, bus tickets, delivery bikes, payment plans, Lyncs, Lyncs Africa"/>
        <meta property="og:title"
              content="Lyncs | Lyncs Africa | Simplifying mobility with top travel deals, flexible bookings, tours, and easy payment plans for trips, bus tickets, and delivery vehicle purchases. Your one-stop travel and transport solution."/>
        <meta property="og:description"
              content="Lyncs | Lyncs Africa - simplifies mobility with top travel deals, flexible bookings, tours, and easy payment plans for trips, bus tickets, and delivery vehicle purchases. Your one-stop travel and transport solution."/>
        <meta property="og:url" content="https://www.lyncs.africa"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title"
              content="Lyncs | Lyncs Africa | Simplifying mobility with top travel deals, flexible bookings, tours, and easy payment plans for trips, bus tickets, and delivery vehicle purchases. Your one-stop travel and transport solution."/>
        <meta name="twitter:description"
              content="Lyncs | Lyncs Africa - simplifies mobility with top travel deals, flexible bookings, tours, and easy payment plans for trips, bus tickets, and delivery vehicle purchases. Your one-stop travel and transport solution."/>
        <link rel="canonical" href="https://www.lyncs.africa"/>
        <meta property="insta:account" content="https://www.instagram.com/lyncsafrica/"/>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lyncs | Lyncs Africa",
              "url": "https://www.lyncs.africa",
              "logo": "https://www.lyncs.africa/images/logo.svg",
              "description": "Lyncs | Lyncs Africa - simplifies mobility with top travel deals, flexible bookings, tours, and easy payment plans for trips, bus tickets, and delivery vehicle purchases. Your one-stop travel and transport solution.",
              "sameAs": [
                "https://www.instagram.com/lyncsafrica/"
              ]
            }),
          }}
        />


      </Head>
      <div>
        {
          isWidgetLoading && (
            <Loader/>
          )
        }
        <ClientOnly>
          <Script src="/js/client.js" strategy="beforeInteractive" />
          {/*<Script crossOrigin src="http://localhost:5174/client.js"></Script>*/}
          <Navbar scrollTop={scrollTop} isOpen={isWidgetOpen}
                  handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <Hero isOpen={isWidgetOpen}
                handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <Revolutionizing isOpen={isWidgetOpen}
                           handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <FlightBooking handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <RideSharing isOpen={isWidgetOpen}
                       handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <WhyDoYou handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <Pss handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <SeeWhy/>
          <Strip isOpen={isWidgetOpen}
                 handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <Footer dark/>
          <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop}/>
        </ClientOnly>
      </div>
    </>

  );
};

export default Index;
