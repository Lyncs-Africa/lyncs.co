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
import Pss from "@/components/core/home/Pss";
import SeeWhy from "@/components/core/home/SeeWhy";
import Testimonials from "@/components/core/forAffilates/Testimonials";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Loader from "@/components/core/shared/Loader";

const Affilates = () => {
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
    <div>
      {
        isWidgetLoading && (
          <Loader/>
        )
      }
    <ClientOnly>
      <Script crossOrigin src="https://lyncs-web-widget.netlify.app/client.js"></Script>
      {/*<Script crossOrigin src="http://localhost:5174/client.js"></Script>*/}
      <Head>
        <title>Lyncs Africa | For Affiliates</title>
      </Head>
      <Navbar light scrollTop={scrollTop} isOpen={isWidgetOpen} handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
      <Hero handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
      <div className="md:hidden block">
        <SectionTwo/>
      </div>
      <Steps handleIsWidgetLoading={(e) => handleIsWidgetLoading(e)}/>
      <div className="hidden md:block">
      <SectionTwo/>
      </div>
      <Testimonials/>
      <Strip/>
      <Footer dark/>
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop}/>
    </ClientOnly>
    </div>
  );
};

export default Affilates;
