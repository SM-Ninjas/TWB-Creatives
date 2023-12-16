import Form from "../../components/form";

function ContactUs() {
  return (
    <div>
      <div className="w-full h-[880px] border border-black items-center flex justify-center">
        <div className="w-[713px] h-[621px] flex flex-col gap-[49px]">
          <div className="text-center">
            <h1 className="text-[2rem] text-utils">Contact Us </h1>
            <p className="text-utils opacity-[0.75]">
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
// width: 713px;
// height: 621px;
