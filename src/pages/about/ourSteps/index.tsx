import { useState } from "react";
import DigitalMarketing from "./digitalMarketing";
import GraphicDesign from "./graphicsDesign";
import WebDev from "./webDev";

// type ComponentName =
//   | "digital marketing"
//   | "graphic designing"
//   | "web development";

function OurSteps() {
  const [selectedComponent, setSelectedComponent] =
    useState<string>('graphic designing');

  function handleSelectComponent(componentName: string) {
    setSelectedComponent(componentName);
  }

  return (
    <div className="h-dvh flex flex-col items-center">
      <div className="w-[48%] text-center pt-[129px] mb-[60px]">
        <h1 className="text-[2rem] text-utils">How we plan our steps</h1>
        <p className="opacity-[.70]">
          Explore our meticulous project approach, where we break down each step
          to meet your unique requirements, ensuring the highest quality of work
          tailored to your project's success.
        </p>
      </div>
      <div className="flex  gap-[60px]">
        <button onClick={() => handleSelectComponent("digital marketing")}>
          Digital Marketing
        </button>
        <button onClick={() => handleSelectComponent("graphic designing")}>
          Graphic Designing
        </button>
        <button onClick={() => handleSelectComponent("web development")}>
          Web Development
        </button>
      </div>
      <hr className="bg-[#111] w-full m-3" />

      {/* conditionally render the components*/}
      {selectedComponent === "digital marketing" && <DigitalMarketing />}
      {selectedComponent === "graphic designing" && <GraphicDesign />}
      {selectedComponent === "web development" && <WebDev />}
    </div>
  );
}

export default OurSteps;
