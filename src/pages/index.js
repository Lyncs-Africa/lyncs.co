import React, {useEffect, useLayoutEffect, useState} from 'react';
import Navbar from "@/components/global/navbar/Navbar";
import ClientOnly from "@/components/global/ClientOnly";
import Footer from "@/components/global/footer/Footer";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Head from 'next/head';
import Script from 'next/script';
import Services from "@/components/core/forIndividuals/Services";
import FlightBooking from "@/components/core/forIndividuals/FlightBooking";
import Stream from "@/components/core/forIndividuals/Stream";
import {BounceLoader} from "react-spinners";
import Hero from "@/components/core/home/Hero";
import SectionTwo from "@/components/core/home/SectionTwo";
import Ride from "@/components/core/forBusiness/Ride";
import Access from "@/components/core/forBusiness/Access";
import Testimonials from "@/components/core/home/Testimonials";
import Strip from "@/components/core/forBusiness/Strip";

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

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lyncs Africa",
              "url": "https://www.lyncs.africa",
              "logo": "https://www.lyncs.africa/path/to/logo.jpg",
              "description": "Lyncs | Lyncs Africa - simplifies mobility with top travel deals, flexible bookings, tours, and easy payment plans for trips, bus tickets, and delivery vehicle purchases. Your one-stop travel and transport solution.",
              "sameAs": [
                "https://www.instagram.com/lyncsafrica/",
                "https://www.twitter.com/lyncsafrica/"
              ]
            }
          `}
        </script>

      </Head>
      <div>
        {
          isWidgetLoading && (
            <div className="fixed inset-0 min-h-screen w-full flex justify-center z-50 items-center">
              <div className="inset-0 absolute bg-white"></div>
              <div className="relative"><BounceLoader color="#2563EB"/></div>
            </div>
          )
        }
        <ClientOnly>
          <Script crossOrigin src="https://lyncs-web-widget.netlify.app/client.js"></Script>
          <Navbar transparent={!isWidgetOpen} scrollTop={scrollTop} isOpen={isWidgetOpen}
                  handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <Hero isOpen={isWidgetOpen}
                handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <FlightBooking handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <Ride isOpen={isWidgetOpen}
                handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <SectionTwo isOpen={isWidgetOpen}
                      handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <Access isOpen={isWidgetOpen}
                  handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <Services isOpen={isWidgetOpen}
                    handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <Stream handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
          <Testimonials/>
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
