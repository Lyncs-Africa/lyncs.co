import React from 'react';
import FooterWeb from "@/components/global/footer/FooterWeb";
import FooterMobile from "@/components/global/footer/FooterMobile";

const Footer = (mode) => {
  return (
    <>
      <FooterWeb mode={mode}/>
      <FooterMobile/>
    </>
  );
};

export default Footer;