import Form from "../../components/form";

function ContactUs() {
  return (
    <div data-aos="fade-up">
      <div className="w-full flex justify-center items-center ">
        <div className="w-[75%]  flex flex-col mbl:w-[70%]">
          <div className="text-center mt-[3rem]">
            <h1 className="text-[2rem] text-utils mbl:text-[15px]">Contact Us </h1>
            <p className="text-utils opacity-[0.75] mbl:text-[12px]">
              Feel free to reach out to us with any questions or concerns you
              may have. We are here to help!
            </p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;