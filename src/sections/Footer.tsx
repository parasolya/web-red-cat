import Logo from "@/components/ui/Logo";
import React from "react";
import Email from "@/components/ui/Email";
import Phone from "@/components/ui/PhoneNumber";
import SocialMedia from "@/components/ui/SocialMedia";
import Facebook from "/public/contacts/facebook.svg";
import Instagram from "/public/contacts/instagram.svg";
import LinkedIn from "/public/contacts/linkedin.svg";
import { footerData, socialMediaData } from "@/data";
import { IconMap, Pages } from "@/@types";
import LinkButton from "@/components/ui/LinkButton";

const iconMap = {
  Facebook,
  Instagram,
  LinkedIn,
};

const Footer = () => {
  return (
    <footer className="pt-8 pb-4 bg-brown bg-opacity-20">
      <div className="container">
      <div className="flex justify-between border-b-2 border-primary mb-4">
        <Logo />
        <ul className="flex w-1/6 justify-between pt-4">
          {socialMediaData.map(({ id, label, href }) => {
            const IconComponent = iconMap[label as keyof IconMap];
            return (
              <li key={id} className="">
                <SocialMedia label={label} href={href} icon={IconComponent} />
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col gap-4 mb-8">
          <Email mailClassName="font-light" iconClassName="h-8 w-8" />

          <Phone
            phoneClassName="font-light xl:text-l"
            iconClassName="h-8 w-8"
          />
        </div>
      </div>
      <div className="flex justify-around text-titleBrown">
        <LinkButton href={Pages.POLICY}>{footerData.policy}</LinkButton>
        <p className="text-xs">{footerData.rights}</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
