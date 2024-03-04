// import React from "react";
import { Whatsapp } from "iconsax-react";
import Instagram from "../../assets/icons/Instagram";

function ContactLinks() {
  const whatsappPhoneNumber = '9851163192';  // Replace with your WhatsApp phone number

  const whatsappLink = `https://wa.me/${whatsappPhoneNumber}`;
  return (
    <div className="fixed bottom-[5rem] right-5 flex flex-col items-end gap-4 z-50 bg-white p-4 rounded-md shadow-md mbl:p-2">
    <div className="mb-2">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Whatsapp size="54" className="54px" color="#25d366" variant="Bold" />
      </a>
    </div>
    <div className="mb-2">
      <div>
      <a href="https://www.instagram.com/twb_creates/">
            <Instagram />
          </a>
      </div>
    </div>
  </div>
  );
}

export default ContactLinks;
         