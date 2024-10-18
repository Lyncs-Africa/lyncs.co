import React, {useEffect, useLayoutEffect, useState} from 'react';
import Navbar from "@/components/global/navbar/Navbar";
import ClientOnly from "@/components/global/ClientOnly";
import Head from 'next/head';
import Script from 'next/script';
import Hero from "@/components/core/forAffilates/Hero";
import SectionTwo from "@/components/core/forAffilates/SectionTwo";
import Steps from "@/components/core/forAffilates/Steps";
import Strip from "@/components/core/forAffilates/Strip";
import Footer from "@/components/global/footer/Footer";

const Affilates = () => {
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
      <Script crossOrigin src="https://lyncs-web-widget.vercel.app/client.js"></Script>
      <Head>
        <title>Lyncs Africa</title>
      </Head>
      <Navbar transparent scrollTop={scrollTop}/>
      <Hero/>
      <Steps/>
      <SectionTwo/>
      <Strip/>
      <Footer/>
    </ClientOnly>
  );
};

export default Affilates;
