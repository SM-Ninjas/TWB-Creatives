import { graphicDesigningData } from "./stepsData";

function WebDev() {
  return (
    <div
      className="w-[100%] flex justify-center"
      data-aos="fade-up"
    >
      <div className=" flex justify-center gap-[70px] w-[70%]">
        <div className="w-[30%]">
          <h1 className="text-[2rem] font-bold text-utils">Web Development</h1>
          <p className="text-utils opacity-[0.75]">
            In our design process, we meticulously blend creativity with
            strategy. From conceptualization to the final design, we navigate
            with precision, ensuring each element aligns seamlessly with your
            brand identity and objectives.
          </p>
        </div>
        <div className="w-[38%] scrollBar cursor-all-scroll overflow-y-auto max-h-[400px]">
          {graphicDesigningData.map((item, index) => (
            <div key={index} className="bg-[#fff] rounded w-[100%] mb-[15px]">
              <h2 className="text-black px-[22px] py-[18px]">{item}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebDev;
