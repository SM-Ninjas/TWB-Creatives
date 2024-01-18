import { useState } from "react";
import DigitalMarketing from "./digitalMarketing";
import GraphicDesign from "./graphicsDesign";
import WebDev from "./webDev";
import { StyledBtn } from "../style";

function OurSteps() {
  const [selectedComponent, setSelectedComponent] =
    useState<string>("graphic designing");

  function handleSelectComponent(componentName: string) {
    setSelectedComponent(componentName);
  }

  return (
    <div
      className="h-dvh flex flex-col items-center"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="w-[48%] text-center pt-[129px] mb-[60px]">
        <h1 className="text-[2rem] text-utils">How we plan our steps</h1>
        <p className="opacity-[.70]">
          Explore our meticulous project approach, where we break down each step
          to meet your unique requirements, ensuring the highest quality of work
          tailored to your project's success.
        </p>
      </div>
      <div className="flex  gap-[60px]">
        <StyledBtn onClick={() => handleSelectComponent("digital marketing")}
           active={selectedComponent === "digital marketing"}
        >
          Digital Marketing
        </StyledBtn>
        <StyledBtn onClick={() => handleSelectComponent("graphic designing")}
           active={selectedComponent === "graphic designing"}>
          Graphic Designing
        </StyledBtn>
        <StyledBtn onClick={() => handleSelectComponent("web development")}
           active={selectedComponent === "web development"} >
          Web Development
        </StyledBtn>
      </div>
      <hr className="bg-[#111] w-full mt-3 mb-[72px]" />

      {/* conditionally render the components*/}
      {selectedComponent === "digital marketing" && <DigitalMarketing />}
      {selectedComponent === "graphic designing" && <GraphicDesign />}
      {selectedComponent === "web development" && <WebDev />}
    </div>
  );
}

export default OurSteps;
