import { headingBlack } from "../../../styling/responsive";
import { StyledBtn } from "../style";
import Branding from "./branding";
import DigitalMarketing from "./digitalMarketing";
import GraphicDesign from "./graphicsDesign";
import Seosem from "./seosem";
import WebDev from "./webDev";

import { useState } from "react";

function OurSteps() {
  const [selectedComponent, setSelectedComponent] = useState<string>("graphic designing");

  function handleSelectComponent(componentName: string) {
    setSelectedComponent(componentName);
  }

  return (
    <div
      className="h-dvh flex flex-col items-center"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="w-[52%] text-center pt-[110px] mb-[60px] mbl:w-[80%] mbl:pt-[50px]">
        <h1 className={`${headingBlack} mbl:text-[18px] mb-2 `}>
          How we plan our steps
        </h1>
        <p className="opacity-[.70] mbl:text-[12px]">
          Explore our meticulous project approach, where we break down each step
          to meet your unique requirements, ensuring the highest quality of work
          tailored to your project's success.
        </p>
      </div>
      <div className="flex  dp:gap-[40px] lp:gap-[45px] tl:gap-[35px] mbl:gap-[5px]">
        <StyledBtn
          onClick={() => handleSelectComponent("digital marketing")}
          active={selectedComponent === "digital marketing"}
        >
          <p className="mbl:text-[12px]">Digital Marketing</p>
        </StyledBtn>
        <StyledBtn
          onClick={() => handleSelectComponent("development")}
          active={selectedComponent === "development"}
        >
          <p className="mbl:text-[12px]">Development</p>
        </StyledBtn>
        <StyledBtn
          onClick={() => handleSelectComponent("graphic designing")}
          active={selectedComponent === "graphic designing"}
        >
          <p className="mbl:text-[12px]">Graphic/Motion Designing</p>
        </StyledBtn>
        <StyledBtn
          onClick={() => handleSelectComponent("SEO/SEM")}
          active={selectedComponent === "SEO/SEM"}
        >
          <p className="mbl:text-[12px]">SEO/SEM</p>
        </StyledBtn>
        <StyledBtn
          onClick={() => handleSelectComponent("branding")}
          active={selectedComponent === "branding"}
        >
          <p className="mbl:text-[12px]">Branding & Positioning</p>
        </StyledBtn>
      </div>
      <hr className="bg-[#111] w-full mt-3 mb-[65px] mbl:mb-[30px]" />

      {/* conditionally render the components*/}
      {selectedComponent === "digital marketing" && <DigitalMarketing />}
      {selectedComponent === "development" && <WebDev />}
      {selectedComponent === "graphic designing" && <GraphicDesign />}
      {selectedComponent === "SEO/SEM" && <Seosem />}
      {selectedComponent === "branding" && <Branding />}
    </div>
  );
}

export default OurSteps;
