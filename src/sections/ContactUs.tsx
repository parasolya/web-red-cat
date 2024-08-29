import Title from "@/components/ui/Title";
import { contactsData } from "@/data";
import ContactsForm from "@/components/common/ContactsForm";
import Phone from "@/components/ui/PhoneNumber";
import Email from "@/components/ui/Email";

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
            <Email
              mailClassName="fext-white font-extralight"
              iconClassName="h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12"
            />

            <Phone
              phoneClassName="fext-white font-thin text-[16px] leading-[1.30] md:text-xl xl:text-3xl"
              iconClassName="h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12"
            />
          </div>

          <ContactsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
