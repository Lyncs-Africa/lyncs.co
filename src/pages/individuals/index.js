import React, {useEffect, useLayoutEffect, useState} from 'react';
import Navbar from "@/components/global/navbar/Navbar";
import ClientOnly from "@/components/global/ClientOnly";
import Footer from "@/components/global/footer/Footer";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Head from 'next/head';
import Script from 'next/script';
import Hero from "@/components/core/forIndividuals/Hero";

const Index = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)
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


  return (
    <ClientOnly>
      <Script crossOrigin src="https://lyncs-web-widget.vercel.app/client.js"></Script>
      <Head>
        <title>Lyncs Africa</title>
      </Head>
      <Navbar transparent={!isWidgetOpen} scrollTop={scrollTop}/>
      <Hero isOpen={isWidgetOpen}/>
    </ClientOnly>
  );
};

export default Index;
