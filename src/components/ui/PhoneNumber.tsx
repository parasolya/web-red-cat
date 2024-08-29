import { PhoneProp } from "@/@types";
import { contactsData } from "@/data";
import PhoneIcon from "/public/contacts/phone.svg";
import clsx from "clsx";

const Phone: React.FC<PhoneProp> = ( { iconClassName, phoneClassName }) => {
  return (
    <div className="flex items-center gap-4 xl:gap-6">
    <PhoneIcon
      className={iconClassName}
      width={32}
      height={32}
    />

    <div className={clsx("cursor-pointer text-[16px] leading-[1.30]",
    
          phoneClassName
        )}>
      <a
        href={`tel:${contactsData.phone}`}
        className=
          "transition hover:text-primary focus:text-primary"
      >
        {contactsData.phone}
      </a>
    </div>
  </div>
  );
};

export default Phone;
