import { StyledInput, StyledTextArea } from "./style";
import CustomButton from "../../components/Button";

import { useState } from "react";
// Interface for the form data
interface FormData {
  fullName: string;
  emailAddress: string;
  contactNumber: string;
  subject: string;
  message: string;
}

function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    // types of all the input we need
    fullName: "",
    emailAddress: "",
    contactNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission with formData
    alert("Our team has got you quote!!");
    setFormData({
      fullName: "",
      emailAddress: "",
      contactNumber: "",
      subject: "",
      message: "",
    });
    console.log(formData);
  };

  return (
    <div className="w-full my-[4rem] flex flex-col items-center">
      <div className="w-[50%] tl:w-[70%] mbl:w-[80%]">
        <h1 className="text-[1.5rem] text-utils font-semibold">Request a Quote </h1>
        <form onSubmit={handleSubmit}>
            <StyledInput
              data-aos="fade-right"
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          <StyledInput
            type="number"
            data-aos="fade-up"
            name="contactNumber"
            placeholder="Contact Number"
            required
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <StyledInput
            data-aos="fade-up"
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
          <StyledTextArea
            data-aos="fade-up"
            name="message"
            placeholder="Message"
            required
            className="w-full text-[#111]"
            rows={8}
            value={formData.message}
            onChange={handleChange}
          />
          <CustomButton
            data-aos="fade-up"
            className="border border-black py-[.5rem] px-[2rem] rounded-[4px] my-[24px]"
            type="submit"
          >Request a Quote
          </CustomButton>
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;
