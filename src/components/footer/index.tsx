import { Call, Sms } from "iconsax-react";
import { Logo } from "../../assets/icons";

function Footer() {
  return (
    <>
      <div className="bg-utils w-full h-[565px] py-[5rem] flex justify-center items-center ">
        <div className="w-[60%] mbl:w-[90%] flex flex-col gap-[2rem]">
          <div className="flex flex-col items-center gap-[30px]">
            <Logo />
            <hr className="bg-[#fff] w-[259px]" />
          </div>
          <p className="font-medium text-center text-gray-g2 mbl:text-[12px] ">
            In a world driven by pixels and possibilities, we transcend the
            ordinary. We are more than just a company – we are your strategic
            ally, your creative powerhouse, and your technological innovator.
            Specializing in graphic design, marketing, and web development, we
            bring a unique blend of artistry and expertise to every project.
          </p>
          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[9px] justify-center text-gray-g2">
              <Sms variant="Bulk" />
              <p className="font-medium mbl:text-[12px]">info@twbcreates.com</p>
            </div>
            <div className="flex gap-[9px] justify-center text-gray-g2">
              <Call size="32" className="text-gray-g2" variant="Bulk" />
              <p className="font-medium mbl:text-[12px]">985 1163192</p>
            </div>
          </div>
          <div className="flex justify-center text-gray-g2 gap-[12px] cursor-pointer " > 
            <u className="mbl:text-[12px]">Privacy Policy</u>
            |
            <u className="mbl:text-[12px]">Terms & Conditions</u>
          </div>
          <div className="flex justify-center">
          <hr className="bg-[#fff] w-[259px]"/>
          </div>
          <div className="flex justify-center">
          <p className="text-gray-g2 font-medium mbl:text-[12px]">© Copyright 2023 TWB Creates</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
