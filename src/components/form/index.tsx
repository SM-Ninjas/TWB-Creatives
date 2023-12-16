import { StyledInput } from "./style";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
// Interface for the form data
interface FormData {
  fullName: string;
  emailAddress: string;
  contactNumber: string;
  subject: string;
  message: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({ // types of all the input we need
    fullName: "",
    emailAddress: "",
    contactNumber: '',
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission with formData
    alert('Your Form data has been saved!')
    setFormData({
        fullName: "",
        emailAddress: "",
        contactNumber: '',
        subject: "",
        message: "",
      })
    console.log(formData);

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row my-[-15px] gap-[15px]">
          <StyledInput
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <StyledInput
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
          name="contactNumber"
          placeholder="Contact Number"
          required
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <StyledInput
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="Message"
          required
          className="w-full"
          rows={8}
          value={formData.message}
          onChange={handleChange}
        ></TextArea>
        <button className="border border-black py-[.5rem] px-[2rem] rounded-[4px] my-[24px] " type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
