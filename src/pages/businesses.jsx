import React, { useEffect, useLayoutEffect, useState } from 'react';
import Navbar from "@/components/global/navbar/Navbar";
import Hero from "@/components/core/forBusiness/Hero";
import ClientOnly from "@/components/global/ClientOnly";
import Access from "@/components/core/forBusiness/Access";
import Services from "@/components/core/forBusiness/Services";
import Ride from "@/components/core/forBusiness/Ride";
import Shop from "@/components/core/forBusiness/Shop";
import Eat from "@/components/core/forBusiness/Eat";
import Footer from "@/components/global/footer/Footer";
import Travel from "@/components/core/forBusiness/Travel";
import Testimonials from "@/components/core/forBusiness/Testimonials";
import Strip from "@/components/core/forBusiness/Strip";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Head from 'next/head';
import Script from 'next/script';
import APICoverage from '@/components/core/forBusiness/APICoverage';
import FeaturesWeb from '@/components/core/forBusiness/FeaturesWeb';
import FeaturesMobile from '@/components/core/forBusiness/FeaturesMobile';
import Stream from "@/components/core/forBusiness/Stream";

const Businesses = () => {
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


  return (
    <ClientOnly>
      <Script crossOrigin src="https://lyncs-web-widget.netlify.app/client.js"></Script>
      <Head>
        <title>Lyncs | For Businesses</title>
        <meta name="description"
              content="Maximize your revenue by integrating our APIs for travel, e-commerce, bus/event tickets, hotels, and subscriptions into your mobile app or website. You provide the customers; we bring the services. Upsell and cross-sell with ease, offering the right service to enhance your customers’ experience."/>

        <meta property="og:title"
              content="Lyncs | Maximize your revenue by integrating our APIs for travel, e-commerce, bus/event tickets, hotels, and subscriptions into your mobile app or website. You provide the customers; we bring the services. Upsell and cross-sell with ease, offering the right service to enhance your customers’ experience."/>
        <meta property="og:description"
              content="Lyncs - Maximize your revenue by integrating our APIs for travel, e-commerce, bus/event tickets, hotels, and subscriptions into your mobile app or website. You provide the customers; we bring the services. Upsell and cross-sell with ease, offering the right service to enhance your customers’ experience."/>
        {/*<meta property="og:image" content="/images/440-socials.png"/>*/}
        <meta property="og:url" content="https://www.lyncs.africa"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title"
              content="Lyncs | Maximize your revenue by integrating our APIs for travel, e-commerce, bus/event tickets, hotels, and subscriptions into your mobile app or website. You provide the customers; we bring the services. Upsell and cross-sell with ease, offering the right service to enhance your customers’ experience."/>
        <meta name="twitter:description"
              content="Lyncs | Maximize your revenue by integrating our APIs for travel, e-commerce, bus/event tickets, hotels, and subscriptions into your mobile app or website. You provide the customers; we bring the services. Upsell and cross-sell with ease, offering the right service to enhance your customers’ experience."/>
        {/*<meta name="twitter:image" content="/images/440-socials.png"/>*/}
        {/*<meta name="twitter:site" content="@440app"/>*/}

        <link rel="canonical" href="https://www.lyncs.africa"/>
        <meta property="insta:account" content="https://www.instagram.com/lyncsafrica/"/>
      </Head>
      <Navbar scrollTop={scrollTop} />
      <Hero />
      <Access />
      <Services />
      <Travel />
      <Ride />
      <FeaturesWeb />
      <FeaturesMobile />
      <APICoverage />
      <Stream/>
      <div className="relative">
        <div className="area z-20">
          <ul className="circles-two">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Eat />
      </div>
      <Strip />
      <Footer dark />
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
    </ClientOnly>
  );
};

export default Businesses;
