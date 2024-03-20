import { graphicDesigningData } from "./stepsData";

function GraphicDesign() {
  return (
    <div className="w-[100%] flex justify-center" data-aos="fade-up">
      <div className=" flex justify-center gap-[25px] dp:w-[75%] lp:w-[80%] tl:w-[86%] mbl:w-[90%]   mbl:flex-col mbl:items-center ">
        <div className="dp:w-[40%] lp:w-[50%] tl:w-[70%]  mbl:w-[90%] mbl:text-center mbl:mb-[1.2rem] ">
          <h1 className="text-[2rem] font-bold text-utils mbl:text-[16px] mb-2">
            Graphics/Motion Designing
          </h1>
          <p className="text-utils opacity-[0.75] mbl:text-[12px]">
            Illuminate your brand with captivating visual narratives. Our
            creative process combines innovation and expertise to craft designs
            that resonate with your audience. From initial sketches to polished
            graphics, we infuse life into your brand through dynamic motion
            graphics and stunning visuals. Partner with us to elevate your brand
            identity and leave a lasting impression.
          </p>
        </div>
        <div className="w-[40%] overflow-y-auto cursor-all-scroll scrollBar mbl:flex mbl:w-[90%] max-h-[400px] mbl:overflow-x-auto mbl:gap-2 ">
          {graphicDesigningData.map((item, index) => (
            <div key={index} className="bg-[#fff] rounded mb-[15px]">
              <h2 className="text-black px-[18px] py-[10px] mbl:w-[200px] mbl:text-[12px]">
                {item}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GraphicDesign;
