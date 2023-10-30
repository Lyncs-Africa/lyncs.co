import React, { useEffect, useLayoutEffect, useState } from 'react';
import Navbar from "@/components/global/navbar/Navbar";
import Hero from "@/components/core/home/Hero";
import ClientOnly from "@/components/global/ClientOnly";
import Access from "@/components/core/home/Access";
import Services from "@/components/core/home/Services";
import BillsPayment from "@/components/core/home/BillsPayment";
import Shop from "@/components/core/home/Shop";
import Eat from "@/components/core/home/Eat";
import Footer from "@/components/global/footer/Footer";
import Travel from "@/components/core/home/Travel";
import Testimonials from "@/components/core/home/Testimonials";
import Strip from "@/components/core/home/Strip";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Head from 'next/head';

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
      <Head>
        <title>Lyncs Web</title>

      </Head>
      <Navbar scrollTop={scrollTop} />
      <Hero />
      <Access />
      <Services />
      <Shop />
      <BillsPayment />
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
        <Travel />
        <Eat />
      </div>
      <Testimonials />
      <Strip />
      <Footer dark />
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
    </ClientOnly>
  );
};

export default Index;