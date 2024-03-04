import { VideoCircle } from "iconsax-react";
import CustomButton from "../../components/Button";
import { headingBlack } from "../../styling/responsive";

function ShowCase() {
  return (
    <div data-aos="fade-up" className="w-full my-[1.5rem] mbl:my-[20px]">
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-[90%] lp:w-[80%] mbl:w-[100%] mbl:pt-[10px] relative">
          <div className="w-[40%] dp:w-[50%] lp:w-[64%] tl:w-[75%] mbl:w-[80%] ">
            <h1 className={`${headingBlack} mbl:text-[18px] `}>
              {/* "text-[1.9rem] font-bold text-center" */}
              We Deliver Exceptional Graphic Design, Marketing and Web
              Design/Development Services.
            </h1>
          </div>
          <div className="pt-[.8rem] pb-[45px]">
            <CustomButton>Call Now</CustomButton>
          </div>
          <div className="w-[80%] h-[380px] rounded-[10px] relative">
            <img
              src=''
              alt="my img"
              className="bg-black h-full w-full rounded-[10px] object-cover"
            />
            {/* VideoCircle is now absolutely positioned on top of the image */}
            <VideoCircle
              size="32"
              color="#FF8A65"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>

      <div className="mt-[5rem] flex justify-center items-center">
        <div className="py-[8rem] flex justify-center items-center bg-utils-u2">
          <div className="flex flex-col gap-[10px] dp:w-[50%] mbl:w-[85%] tl:w-[75%] lp:w-[60%]  text-center">
            <h1 className="text-[2rem]  mbl:text-[16px] tl:text-[1.5rem] font-bold text-white  ">
              We are more than just a company
            </h1>
            <p className="dp:text-[16px] lp:text-[14px] mbl:text-[12px]  tl:text-[14px] opacity-[0.7] text-white">
              We are the architects of innovation, crafting a seamless fusion of
              graphic design, marketing prowess, and web development expertise.
              More than just a company, we are your creative partners,
              transforming concepts into captivating visual narratives and
              strategies that resonate with your audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
