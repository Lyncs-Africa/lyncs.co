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

const Index = () => {
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
      <Script crossOrigin src="https://lyncs-web-widget.onrender.com/client.js"></Script>
      <Head>
        <title>Lyncs Africa - For Businesses</title>
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

export default Index;
