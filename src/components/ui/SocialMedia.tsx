import { SocialMediaProps } from "@/@types";

import Facebook from "/public/contacts/facebook.svg";
import Instagram from "/contacts/instagram.svg";
import linkedin from "/contacts/linkedin.svg";

const SocialMedia: React.FC<SocialMediaProps> = ({ label, href, icon: Icon}) => {
  return (
    <>
      <a
        className=""
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon />
      </a>
    </>
  );
};

export default SocialMedia;
