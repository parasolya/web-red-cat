import Title from "@/components/ui/Title";
import { contactsData } from "@/data";
import Phone from "/public/contacts/phone.svg";
import Email from "/public/contacts/email.svg";
import ContactsForm from "@/components/common/ContactsForm";
import Contacts from "@/components/common/Contacts";

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
          <Contacts mailClassName="fext-white font-extralight " phoneClassName="fext-white font-extralight" />
          <ContactsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
