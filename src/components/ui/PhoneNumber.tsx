import { PhoneProp } from "@/@types";
import { contactsData } from "@/data";
import PhoneIcon from "/public/contacts/phone.svg";
import clsx from "clsx";

const Phone: React.FC<PhoneProp> = ( { phoneClassName }) => {
  return (
    <div className="flex items-center gap-4 xl:gap-6">
    <PhoneIcon
      className="h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12"
      width={32}
      height={32}
    />

    <div className="cursor-pointer font-inter text-[16px] leading-[1.30] md:text-xl  md:font-medium xl:text-3xl">
      <a
        href={`tel:${contactsData.phone}`}
        className={clsx(
          "transition hover:text-primary focus:text-primary",
          phoneClassName
        )}
      >
        {contactsData.phone}
      </a>
    </div>
  </div>
  );
};

export default Phone;
