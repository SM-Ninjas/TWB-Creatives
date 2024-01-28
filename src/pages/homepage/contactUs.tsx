import Form from "../../components/form";

function ContactUs() {
  return (
    <div data-aos="fade-up" className="w-full flex justify-center items-center">
      <div className="w-[80%] flex flex-col items-center">
        <div className=" flex flex-col items-center my-[2rem] text-center">
          <h1 className="text-[2rem] font-semibold text-utils mbl:text-[15px]">Contact Us</h1>
          <p className="text-utils opacity-[0.75] mbl:text-[12px]">
            Feel free to reach out to us with any questions or concerns you may
            have. We are here to help!
          </p>
        </div>
        <div className="w-[100%]">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
