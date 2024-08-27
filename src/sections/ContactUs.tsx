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
            <Email mailClassName="fext-white font-extralight " />

            <Phone phoneClassName="fext-white font-extralight" />
          </div>

          <ContactsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
