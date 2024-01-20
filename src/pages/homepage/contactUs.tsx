import Form from "../../components/form";

function ContactUs() {
  return (
    <div data-aos="fade-up" className="flex justify-center items-center h-full">
      <div className="w-[75%] mbl:w-[80%] p-[2rem]">
        <div className="my-[2rem] text-center">
          <h1 className="text-[2rem] font-semibold text-utils mbl:text-[15px]">Contact Us</h1>
          <p className="text-utils opacity-[0.75] mbl:text-[12px]">
            Feel free to reach out to us with any questions or concerns you may
            have. We are here to help!
          </p>
        </div>
        <div className="">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
