import { StyledDiv } from "./style";
import insight from "../../assets/images/insight.png";
import bhakundoo from "../../assets/images/bhakundoo.png";
import rojgari from "../../assets/images/rojgari.png";

function OurProjects() {
  return (
    <div className="w-full">
      <div
        className="flex justify-center mb-[120px] sm:mb-16"
        data-aos="fade-up"
      >
        <div className="w-[60%] flex flex-col gap-5 text-center mbl:w-[85%]">
          <h1 className="text-[2rem] mbl:text-[18px] font-bold">
            Explore Our Projects
          </h1>
          <p className="text-utils opacity-[.70] mbl:text-[11px]">
            Dive into our portfolio and explore a showcase of innovative
            projects, each a testament to our commitment to excellence in
            graphic design, digital marketing, and web development.
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-utils relative">
        <div
          className="mbl:w-[80%] tl:w-[75%] lp:w-[70%] dp:w-[70%] flex justify-center flex-wrap gap-5 mbl:justify-center relative bottom-[60px]"
          data-aos="fade-up"
        >
          <StyledDiv
            data-aos="fade-up"
            className="mbl:w-[85%] tl:w-[45%] lp:w-[35%] dp:w-[25%] gap-[0px]"
          >
            <div className="">
              <img src={insight} alt="" className="rounded-[10px]" />
            </div>
            <div className="text-center  flex flex-col gap-[10px] mb-1">
              <h2 className="font-bold">Insight A Podcast</h2>
              <p className="text-utils-u1 opacity-[0.7]">
                Gallery of podcasts where different topics are explored.
              </p>
            </div>
          </StyledDiv>
          <StyledDiv
            data-aos="fade-up"
            className="mbl:w-[85%] tl:w-[45%] lp:w-[35%] dp:w-[25%]  gap-[0px]"
          >
            <div className="">
              <img src={bhakundoo} alt="" className="rounded-[10px]" />
            </div>
            <div className="text-center  flex flex-col gap-[10px] mb-1">
              <h2 className="font-bold">Bhakundoo</h2>
              <p className="text-utils-u1 opacity-[0.7]">
                Gallery of podcasts where different topics are explored.
              </p>
            </div>
          </StyledDiv>
          <StyledDiv
            data-aos="fade-up"
            className="w-full mbl:w-[85%] tl:w-[45%] lp:w-[35%] dp:w-[25%]  gap-[0px]"
          >
            <div className="">
              <img src={rojgari} alt="" className="rounded-[10px]" />
            </div>
            <div className="text-center  flex flex-col gap-[10px] mb-1">
              <h2 className="font-bold">Rojgari</h2>
              <p className="text-utils-u1 opacity-[0.7]">
                Gallery of podcasts where different topics are explored.
              </p>
            </div>
          </StyledDiv>
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
