import Logo from "@/components/ui/Logo";
import React from "react";
import Contacts from "@/components/common/Contacts";

const Footer = () => {
  return (
    <footer className="section">
      <div className="container flex justify-between">
       
        <Logo />
        <Contacts phoneClassName="font-light"/>
      </div>
    </footer>
  );
};

export default Footer;
