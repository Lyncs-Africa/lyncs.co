import React, {useEffect, useLayoutEffect, useState} from 'react';
import Hero from "@/components/core/home/Hero";
import ClientOnly from "@/components/global/ClientOnly";
import Head from 'next/head';
import Script from 'next/script';
import Link from "next/link";

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
      <div className="absolute top-4 left-4 z-50">
        <Link className="flex items-center" href="/">
          <img
            src="/images/logo-light.svg"
            className="h-12 xl:h-16 mr-3"
            alt="Lyncs Logo"
          />
        </Link>
      </div>
      <Hero/>
    </ClientOnly>
  );
};

export default Index;
