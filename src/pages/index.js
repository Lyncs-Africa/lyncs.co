import React, {useEffect, useLayoutEffect, useState} from 'react';
import MultiSecton from "@/components/core/home/MultiSecton";
import ClientOnly from "@/components/global/ClientOnly";
import Head from 'next/head';
import Script from 'next/script';
import Navbar from "@/components/global/navbar/Navbar";
import Hero from "@/components/core/home/Hero";

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
      <Script crossOrigin src="https://lyncs-web-widget.vercel.app/client.js"></Script>
      <Head>
        <title>Lyncs Africa</title>
      </Head>
      <Navbar dark scrollTop={scrollTop}/>
      <Hero/>
      <MultiSecton/>
    </ClientOnly>
  );
};

export default Index;
