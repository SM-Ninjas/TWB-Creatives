import { developmentData } from "./stepsData";

function WebDev() {
  return (
    <div className="w-[100%] flex justify-center" data-aos="fade-up">
      <div className=" flex justify-center gap-[25px] dp:w-[75%] lp:w-[80%] tl:w-[86%] mbl:w-[90%]   mbl:flex-col mbl:items-center ">
        <div className="dp:w-[40%] lp:w-[50%] tl:w-[70%]  mbl:w-[90%] mbl:text-center mbl:mb-[1.2rem] ">
          <h1 className="text-[2rem] font-bold text-utils mbl:text-[16px] mb-2">
            Web Development
          </h1>
          <p className="text-utils opacity-[0.75] mbl:text-[12px]">
            Empower your ideas with cutting-edge development solutions. Our
            expert team transforms concepts into robust, user-friendly
            applications, ensuring seamless functionality across devices. From
            wireframes to deployment, we prioritize scalability, security, and
            performance. Partner with us to bring your vision to life and stay
            ahead in the competitive digital landscape.
          </p>
        </div>
        <div className="w-[40%] overflow-y-auto cursor-all-scroll scrollBar mbl:flex mbl:w-[90%] max-h-[400px] mbl:overflow-x-auto mbl:gap-2 ">
          {developmentData.map((item, index) => (
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

export default WebDev;
