import DigitalImpact from "./ourServices/digitalImpact";
import StoryPower from "./ourServices/storyPower";
import MediaBoost from "./ourServices/mediaBoost";
import StreetBuzz from "./ourServices/streetBuzz";
import { StyledBtn } from "./style";

import { useState } from "react";

function OurServices() {
  const [selectedComponent, setSelectedComponent] =
    useState<string>("DigitalImpact");

  function handleSelectComponent(componentName: string) {
    setSelectedComponent(componentName);
  }

  return (
    <div
      className="w-full h-dvh flex flex-col items-center"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="w-[55%] text-center mt-[4rem] mb-[30px] mbl:w-[80%]">
        <h1 className="text-[2rem]  tl:text-[1.1rem] lp:text-[1.3rem]  mbl:text-[1.1rem]  font-bold ">
          Elevate Your Brand: Explore impactful print, broadcast, and digital
          marketing services for unparalleled success in capturing and engaging
          your audience.
        </h1>
      </div>

      <div className="flex flex-col gap-8 dp:flex-row dp:w-[75%] dp:items-center lp:w-[80%] tl:w-[90%] mbl:w-[95%]">
        <div className="flex justify-center gap-[.6rem] dp:flex-col dp:w-[30%] dp:gap-[1rem] mbl:w-[100%]">
          <StyledBtn
            onClick={() => handleSelectComponent("DigitalImpact")}
            active={selectedComponent === "DigitalImpact"}
            className="mbl:text-[12px] py-4 px-8 mbl:py-2 mbl:px-4"
          >
            Digital Impact
          </StyledBtn>
          <StyledBtn
            onClick={() => handleSelectComponent("StoryPower")}
            active={selectedComponent === "StoryPower"}
            className="mbl:text-[12px] py-4 px-8 mbl:py-2 mbl:px-4"
          >
            Story Power
          </StyledBtn>
          <StyledBtn
            onClick={() => handleSelectComponent("StreetBuzz")}
            active={selectedComponent === "StreetBuzz"}
            className="mbl:text-[12px] py-4 px-8 mbl:py-2 mbl:px-4"
          >
            Street Buzz
          </StyledBtn>
          <StyledBtn
            onClick={() => handleSelectComponent("MediaBoost")}
            active={selectedComponent === "MediaBoost"}
            className="mbl:text-[12px] py-4 px-8 mbl:py-2 mbl:px-4"
          >
            Media Boost
          </StyledBtn>
        </div>
        {/* <hr className="bg-[#111] w-full mt-3 mb-[60px]" /> */}
        <div className=" w-[100%]">
          {/* conditionally render the components*/}
          {selectedComponent === "DigitalImpact" && <DigitalImpact />}
          {selectedComponent === "StoryPower" && <StoryPower />}
          {selectedComponent === "StreetBuzz" && <StreetBuzz />}
          {selectedComponent === "MediaBoost" && <MediaBoost />}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
