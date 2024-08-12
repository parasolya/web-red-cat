import Title from "@/components/ui/Title";
import { contactsData } from "@/data";
import Phone from "/public/contacts/phone.svg";
import Email from "/public/contacts/email.svg";
import ContactsForm from "@/components/common/ContactsForm";

const ContactUs: React.FC = () => {
  return (
    <section
      id={contactsData.id}
      className="section text-white bg-about bg-brown"
    >
      <div className="container">
      <div className="mb-4 md:mb-16">
          <Title
            firstWords="Contact"
            secondWords="us"
            firstWordsClassName="text-white"
            secondWordsClassName="text-white"
          />
        </div>
        <div className="flex justify-between">
        <div className={`flex flex-col gap-4 md:gap-8 xl:gap-10`}>
          <div className="xl:[--x-hidden:-80px]">
            <div className="flex items-center gap-4 xl:gap-6">
              <Email
                className="h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12"
                width={32}
                height={32}
              />

              <div className="cursor-pointer text-[16px] leading-[1.30] text-white md:text-lightLarge md:font-medium xl:text-extraLarge">
                <a
                  href={`mailto:${contactsData.email}`}
                  className="transition hover:text-primary focus:text-primary"
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

              <div className="cursor-pointer font-inter text-[16px] leading-[1.30] text-white md:text-xl  md:font-medium xl:text-3xl">
                <a
                  href={`tel:${contactsData.phone}`}
                  className="transition hover:text-primary focus:text-primary"
                >
                  {contactsData.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
       <ContactsForm />
      </div>
      </div>
    </section>
  );
};

export default ContactUs;
