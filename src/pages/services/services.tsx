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
      className="h-dvh flex flex-col items-center"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="w-[55%] text-center mt-[4rem] mb-[30px]">
        <h1 className="text-[2rem] text-utils font-bold">
          Elevate Your Brand: Explore impactful print, broadcast, and digital
          marketing services for unparalleled success in capturing and engaging
          your audience.
        </h1>
      </div>
      <div className="flex gap-[1rem]">
        <StyledBtn
          onClick={() => handleSelectComponent("DigitalImpact")}
          active={selectedComponent === "DigitalImpact"}
        >
          Digital Impact
        </StyledBtn>
        <StyledBtn
          onClick={() => handleSelectComponent("StoryPower")}
          active={selectedComponent === "StoryPower"}
        >
          Story Power
        </StyledBtn>
        <StyledBtn
          onClick={() => handleSelectComponent("StreetBuzz")}
          active={selectedComponent === "StreetBuzz"}
        >
          Street Buzz
        </StyledBtn>
        <StyledBtn
          onClick={() => handleSelectComponent("MediaBoost")}
          active={selectedComponent === "MediaBoost"}
        >
          Media Boost
        </StyledBtn>
      </div>
      <hr className="bg-[#111] w-full mt-3 mb-[60px]" />

      {/* conditionally render the components*/}
      {selectedComponent === "DigitalImpact" && <DigitalImpact />}
      {selectedComponent === "StoryPower" && <StoryPower />}
      {selectedComponent === "StreetBuzz" && <StreetBuzz />}
      {selectedComponent === "MediaBoost" && <MediaBoost />}
    </div>
  );
}

export default OurServices;
