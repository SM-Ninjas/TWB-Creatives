import { VideoCircle } from "iconsax-react";
import CustomButton from "../../components/Button";

function ShowCase() {
  return (
    <div>
      <div className="w-full">
        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center w-[878px] h-[663px] pt-[60px] relative">
            <div className="w-[600px]">
              <h1 className="text-[2rem] text-center">
                We Deliver Exceptional Graphic Design, Marketing and Web
                Design/Development Services.
              </h1>
            </div>
            <div className="pt-[1.2rem] pb-[45px]">
              <CustomButton type="primary">Call Now</CustomButton>
            </div>
            <div className="w-[878px] h-[375px] border relative">
              <img
                src="../../assets/images/Overlay.png"
                alt="my img"
                className="h-full bg-black object-cover"
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
        <div className="h-[500px] m-2 flex justify-center items-center">
          <div className="h-[360px] w-full flex justify-center items-center bg-utils-u2">
            <div className=" flex flex-col gap-[30px] h-[157px] w-1/2 text-center ">
              <h1 className="font-bold text-white text-[2rem]">We are more than just a company</h1>
              <p className="text-[16px] opacity-[0.7] text-gray-g2">We are the architects of innovation, crafting a seamless fusion of graphic design, marketing prowess, and web development expertise. More than just a company, we are your creative partners, transforming concepts into captivating visual narratives and strategies that resonate with your audience. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
