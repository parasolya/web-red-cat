import Logo from "@/components/ui/Logo";
import React from "react";
import Email from "@/components/ui/Email";
import Phone from "@/components/ui/PhoneNumber";

const Footer = () => {
  return (
    <footer className="section pb-8">
      <div className="container flex justify-between border-b-2 border-primary">
       
        <Logo />
        <div className="flex flex-col gap-4 mb-8">
            <Email mailClassName="font-light" iconClassName="h-8 w-8" />

            <Phone phoneClassName="font-light xl:text-l" iconClassName="h-8 w-8" />
          </div>
      </div>
    </footer>
  );
};

export default Footer;
