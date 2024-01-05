import { Designtools, PresentionChart } from "iconsax-react";
import { StyledCard } from "./style";

function ChooseUs() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center mb-[120px] sm:mb-16 md:mb-20">
          <div className="w-[70%] flex flex-col gap-5 text-center">
            <h1 className="text-[2rem] sm:text-3xl font-bold">Why Choose Us?</h1>
            <p className="opacity-70">
              Choose us for a seamless blend of creative ingenuity and
              technological expertise, ensuring your brand stands out with
              innovative graphic design, impactful marketing, and cutting-edge
              web development.
            </p>
          </div>
        </div>
        <div className="w-[100%] flex justify-center bg-utils relative">
          <div className="w-[60%] flex justify-center flex-wrap gap-5 sm:gap-8 md:gap-12 mbl:justify-start relative bottom-[60px] ">
            <StyledCard
              // data-aos="fade-up"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 min-w-[220px]"
            >
              <div className="bg-primary-p10 w-[58px] h-[58px] rounded-[50%] p-[13px] ">
                <Designtools size="32" color="#fff" variant="Bulk" />
              </div>
              <div className="text-center flex flex-col gap-[10px] ">
                <h2 className="font-bold">Graphic Designing</h2>
                <p className="text-utils-u1 opacity-[0.7] p-[3.5px]">
                  Transform your brand with our creative graphic design
                  solutions.
                </p>
              </div>
            </StyledCard>
            <StyledCard
              // data-aos="fade-up"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 min-w-[220px]"
            >
              <div className=" felx justify-center bg-primary-p10 w-[58px] h-[58px] items-center rounded-[50%] p-[13px]">
                <PresentionChart size="32" color="#fff" variant="Bulk" />
              </div>
              <div className="text-center flex flex-col gap-[10px]">
                <h2 className="font-bold">Digital Marketing</h2>
                <p className="text-utils-u1 opacity-[0.7]">
                  Boost your online impact with our targeted digital marketing
                  expertise.
                </p>
              </div>
            </StyledCard>
            <StyledCard
              // data-aos="fade-up"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 min-w-[220px]"
            >
              <div className=" felx justify-center bg-primary-p10 w-[58px] h-[58px] items-center rounded-[50%] p-[13px]">
                <Designtools size="32" color="#fff" variant="Bulk" />
              </div>
              <div className="text-center flex flex-col gap-[10px]">
                <h2 className="font-bold">Web Development</h2>
                <p className="text-utils-u1 opacity-[0.7]">
                  Empower your online presence through our expert web
                  development.
                </p>
              </div>
            </StyledCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
