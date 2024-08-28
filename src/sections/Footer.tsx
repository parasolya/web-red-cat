import Logo from "@/components/ui/Logo";
import React from "react";
import Email from "@/components/ui/Email";
import Phone from "@/components/ui/PhoneNumber";

const Footer = () => {
  return (
    <footer className="section pb-8">
      <div className="container flex justify-between">
       
        <Logo />
        <div className={`flex flex-col gap-4 md:gap-8 xl:gap-10`}>
            <Email mailClassName="fext-white font-extralight " iconClassName="h-40 w-40" />

            <Phone phoneClassName="font-light" />
          </div>
      </div>
    </footer>
  );
};

export default Footer;
