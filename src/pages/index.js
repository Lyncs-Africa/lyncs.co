import React, {useEffect, useLayoutEffect, useState} from 'react';
import MultiSecton from "@/components/core/home/MultiSecton";
import ClientOnly from "@/components/global/ClientOnly";
import Head from 'next/head';
import Script from 'next/script';
import Navbar from "@/components/global/navbar/Navbar";
import Hero from "@/components/core/home/Hero";
import Footer from "@/components/global/footer/Footer";

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
        <title>Lyncs</title>
        <meta name="description"
              content="Make smarter choices when it comes to travel, shopping, entertainment, and lodging. We offer affordable luxury travel, top-quality discounted products, budget-friendly bus tickets, premium hotels, streaming subscriptions, and much more—all in one place."/>

        <meta property="og:title"
              content="Lyncs | Make smarter choices when it comes to travel, shopping, entertainment, and lodging. We offer affordable luxury travel, top-quality discounted products, budget-friendly bus tickets, premium hotels, streaming subscriptions, and much more—all in one place."/>
        <meta property="og:description"
              content="Lyncs - Make smarter choices when it comes to travel, shopping, entertainment, and lodging. We offer affordable luxury travel, top-quality discounted products, budget-friendly bus tickets, premium hotels, streaming subscriptions, and much more—all in one place."/>
        {/*<meta property="og:image" content="/images/440-socials.png"/>*/}
        <meta property="og:url" content="https://www.lyncs.africa"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title"
              content="Lyncs | Make smarter choices when it comes to travel, shopping, entertainment, and lodging. We offer affordable luxury travel, top-quality discounted products, budget-friendly bus tickets, premium hotels, streaming subscriptions, and much more—all in one place."/>
        <meta name="twitter:description"
              content="Lyncs | Make smarter choices when it comes to travel, shopping, entertainment, and lodging. We offer affordable luxury travel, top-quality discounted products, budget-friendly bus tickets, premium hotels, streaming subscriptions, and much more—all in one place."/>
        {/*<meta name="twitter:image" content="/images/440-socials.png"/>*/}
        {/*<meta name="twitter:site" content="@440app"/>*/}

        <link rel="canonical" href="https://www.lyncs.africa"/>
        <meta property="insta:account" content="https://www.instagram.com/lyncsafrica/"/>
      </Head>
      <Navbar logo dark scrollTop={scrollTop}/>
      <Hero/>
      <MultiSecton/>
      <Footer dark/>
    </ClientOnly>
  );
};

export default Index;
