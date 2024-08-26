import { contactsData } from "@/data";
import Phone from "/public/contacts/phone.svg";
import Email from "/public/contacts/email.svg";
import { ContactsProps } from "@/@types";
import clsx from "clsx";

const Contacts: React.FC<ContactsProps> = ({
  mailClassName,
  phoneClassName,
}) => {
  return (
    <div className={`flex flex-col gap-4 md:gap-8 xl:gap-10`}>
      <div className="xl:[--x-hidden:-80px]">
        <div className="flex items-center gap-4 xl:gap-6">
          <Email
            className="h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12"
            width={32}
            height={32}
          />

          <div className="cursor-pointer text-[16px] leading-[1.30] md:text-lightLarge md:font-medium xl:text-extraLarge">
            <a
              href={`mailto:${contactsData.email}`}
              className={clsx(
                "transition hover:text-primary focus:text-primary",
                mailClassName
              )}
            >
              {contactsData.email}
            </a>
          </div>
        </div>
      </div>
      <div className="xl:[--x-hidden:-80px]">
        <div className="flex items-center gap-4 xl:gap-6">
          <Phone
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
      </div>
    </div>
  );
};

export default Contacts;
