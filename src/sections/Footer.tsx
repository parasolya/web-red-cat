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
    <footer className="py-8 bg-brown bg-opacity-20">
      <div className="container flex justify-between border-b-2 border-primary">
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
      <div>
        <LinkButton href={Pages.POLICY}>{footerData.policy}</LinkButton>
      </div>
    </footer>
  );
};

export default Footer;
