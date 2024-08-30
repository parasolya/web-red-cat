import Logo from "@/components/ui/Logo";
import React from "react";
import Email from "@/components/ui/Email";
import Phone from "@/components/ui/PhoneNumber";
import SocialMedia from "@/components/ui/SocialMedia";
import Facebook from "/public/contacts/facebook.svg";
import Instagram from "/public/contacts/instagram.svg";
import LinkedIn from "/public/contacts/linkedin.svg";
import { socialMediaData } from "@/data";
import { IconMap } from "@/@types";



const iconMap = {
  Facebook,
  Instagram,
  LinkedIn
};

const Footer = () => {
  return (
    <footer className="py-8 bg-brown bg-opacity-20">
      <div className="container flex justify-between border-b-2 border-primary">
       
        <Logo />
        <ul>
          {socialMediaData.map(({ id, label, href }) => {
            const IconComponent = iconMap[label as keyof IconMap]
            return (
              <li key={id} className="bg-white bg-opacity-5">
                <SocialMedia label={label} href={href} icon={IconComponent} />
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col gap-4 mb-8">
            <Email mailClassName="font-light" iconClassName="h-8 w-8" />

            <Phone phoneClassName="font-light xl:text-l" iconClassName="h-8 w-8" />
          </div>
      </div>
    </footer>
  );
};

export default Footer;
