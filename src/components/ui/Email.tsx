import { contactsData } from "@/data";
import EmailIcon from "/public/contacts/email.svg";
import clsx from "clsx";
import { EmailProp } from "@/@types";

const Email: React.FC<EmailProp> = ({ iconClassName, mailClassName }) => {
  return (
    <div className="flex items-center gap-4 xl:gap-6">
    <EmailIcon
      className={clsx("h-8 w-8 md:h-70 md:w-70 xl:h-70 xl:w-70", iconClassName)}
      
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
  );
};

export default Email;
