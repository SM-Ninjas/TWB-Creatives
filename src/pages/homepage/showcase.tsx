import { VideoCircle } from "iconsax-react";
import CustomButton from "../../components/Button";

function ShowCase() {
  return (
    <div data-aos="fade-up">
      <div className="w-full">
        <div className="w-[100%] flex justify-center">
          <div className="flex flex-col items-center w-[90%] lp:w-[80%] mbl:w-[100%] pt-[60px] relative">
            <div className="w-[40%] dp:w-[50%] lp:w-[64%] tl:w-[75%] mbl:w-[70%] ">
              <h1 className="text-[2rem]  mbl:text-[1.1rem] font-bold text-center">
              {/* "text-[1.9rem] font-bold text-center" */}
                We Deliver Exceptional Graphic Design, Marketing and Web
                Design/Development Services.
              </h1> 
            </div>
            <div className="pt-[1.2rem] pb-[45px]">
              <CustomButton>Call Now</CustomButton>
            </div>
            <div className="w-[80%] h-[380px] bg-black rounded-[10px] relative">
              <img
                src="../../assets/images/Overlay.png"
                alt="my img"
                className="h-full rounded-[10px] object-cover"
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
        <div className="h-[500px] flex justify-center items-center">
          <div className="h-[360px] w-full flex justify-center items-center bg-utils-u2">
            <div className="flex flex-col gap-[10px] w-[40%] mbl:w-[70%]  text-center">
              <h1 className="text-[2rem]  mbl:text-[1.1rem] tl:text-[1.5rem] font-bold text-white  ">
                We are more than just a company
              </h1>
              <p className="text-[16px] mbl:text-[.8rem]  tl:text-[12pxrem] opacity-[0.7] text-gray-g2">
                We are the architects of innovation, crafting a seamless fusion
                of graphic design, marketing prowess, and web development
                expertise. More than just a company, we are your creative
                partners, transforming concepts into captivating visual
                narratives and strategies that resonate with your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
