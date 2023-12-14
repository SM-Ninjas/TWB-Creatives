import { Designtools, PresentionChart } from "iconsax-react";
import { StyledCard } from "./style";

function ChooseUs() {
  return (
    <>
      <div className="w-full h-[568px] flex flex-col gap-[153px]">
        <div className="flex justify-center">
          <div className="w-[874px] flex flex-col gap-[21px] text-center ">
            <h1 className="text-[2rem] text-utils font-bold">Why Choose Us?</h1>
            <p className="text-utils opacity-[0.7]">
              Choose us for a seamless blend of creative ingenuity and
              technological expertise, ensuring your brand stands out with
              innovative graphic design, impactful marketing, and cutting-edge
              web development.
            </p>
          </div>
        </div>
        <div className=" flex justify-center  w-full bg-utils relative h-[302px]">
          <div className="flex justify-between gap-[48px] absolute  bottom-[30%]">
            <StyledCard className="">
              <div className="bg-primary-p10 w-[58px] h-[58px] rounded-[50%] p-[13px] ">
                <Designtools size="32" color="#fff" variant="Bulk" />
              </div>
              <div className="text-center flex flex-col gap-[10px] border ">
                <h2 className="font-bold">Graphic Designing</h2>
                <p className="text-utils-u1 opacity-[0.7]">
                  Transform your brand with our creative graphic design
                  solutions.
                </p>
              </div>
            </StyledCard>
            <StyledCard className="">
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
            <StyledCard className="">
              <div className=" felx justify-center bg-primary-p10 w-[58px] h-[58px] items-center  rounded-[50%] p-[13px]">
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
