import { graphicDesigningData } from "./stepsData";

function WebDev() {
  return (
    <div
      className="w-[100%] flex justify-center"
      data-aos="fade-up"
    >
      <div className=" flex justify-center gap-[30px] dp:w-[75%] lp:w-[80%] tl:w-[95%] mbl:w-[98%]  mbl:block ">
        <div className="dp:w-[40%] lp:w-[50%] tl:w-[60%] mbl:w-[100%] mbl:text-center mbl:mb-[2rem] ">
          <h1 className="text-[2rem] font-bold text-utils">Web Development</h1>
          <p className="text-utils opacity-[0.75]">
            In our design process, we meticulously blend creativity with
            strategy. From conceptualization to the final design, we navigate
            with precision, ensuring each element aligns seamlessly with your
            brand identity and objectives.
          </p>
        </div>
        <div className="w-[40%] overflow-y-auto cursor-all-scroll scrollBar max-h-[400px] mbl:flex mbl:w-[100%] mbl:overflow-x-auto mbl:gap-3 ">
          {graphicDesigningData.map((item, index) => (
            <div key={index} className="bg-[#fff] rounded w-[100%] mb-[15px]">
              <h2 className="text-black px-[22px] py-[18px] mbl:w-[200px]">
                {item}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebDev;
