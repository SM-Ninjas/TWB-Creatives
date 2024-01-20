import { StyledInput, StyledTextArea } from "./style";
import CustomButton from "../Button";

import { useState } from "react";
// Interface for the form data
interface FormData {
  fullName: string;
  emailAddress: string;
  contactNumber: string;
  subject: string;
  message: string;
}

function Form() {
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
    alert("Your Form data has been saved!");
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
    <div className="w-full  flex flex-col ">
      <div className="w-[70%] tl:w-[70%] mbl:w-[100%]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row my-[-15px] gap-[15px]">
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
              data-aos="fade-left"
              type="text"
              name="emailAddress"
              placeholder="Email Address"
              required
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>
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
          ></StyledTextArea>
          <CustomButton
            data-aos="fade-up"
            className="border border-black py-[.5rem] px-[2rem] rounded-[4px] my-[24px] "
            type="submit"
          >
            Submit
          </CustomButton>
        </form>
      </div>
    </div>
  );
}

export default Form;
