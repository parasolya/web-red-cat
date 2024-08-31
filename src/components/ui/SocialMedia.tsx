import { SocialMediaProps } from "@/@types";

import Facebook from "/public/contacts/facebook.svg";
import Instagram from "/contacts/instagram.svg";
import linkedin from "/contacts/linkedin.svg";

const SocialMedia: React.FC<SocialMediaProps> = ({ label, href, icon: Icon}) => {
  return (
    <>
      <a
        className="group flex justify-center items-center bg-white bg-opacity-60 h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12 rounded-full cursor-pointer transition hover:bg-primary focus:bg-primary"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon className="fill-primary group-focus:fill-white group-hover:fill-white" />
      </a>
    </>
  );
};

export default SocialMedia;
