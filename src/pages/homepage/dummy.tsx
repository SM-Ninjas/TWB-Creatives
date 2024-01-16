import { StyledDiv } from "./style";
import insight from "../../assets/images/insight.webp";

function OurProjects() {
  return (
    <div data-aos="fade-up opacity-hidden">
      <div className="w-full h-[568px] flex flex-col gap-[153px]">
        <div className="flex justify-center">
          <div className="w-[874px] flex flex-col gap-[21px] text-center ">
            <h1 className="text-[2rem] text-utils font-bold"></h1>
            <p className="text-utils opacity-[0.7]">
              Dive into our portfolio and explore a showcase of innovative
              projects, each a testament to our commitment to excellence in
              graphic design, digital marketing, and web development.
            </p>
          </div>
        </div>

        <div className="flex justify-center w-full bg-utils relative h-[302px]">
          <div className="flex justify-center flex-wrap gap-5 sm:gap-8 md:gap-12 mbl:justify-start relative bottom-[30%]">
            <StyledDiv
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 min-w-[220px] gap-[0px]"
            >
              <div className="">
                <img
                  src={insight}
                  alt=""
                  className="rounded-[10px] w-full h-auto"
                />
              </div>
              <div className="text-center flex flex-col gap-[10px]">
                <h2 className="font-bold">Insight A Podcast</h2>
                <p className="text-utils-u1 opacity-[0.7]">
                  Gallery of podcasts where different topics are explored.
                </p>
              </div>
            </StyledDiv>

            <StyledDiv data-aos="fade-up" className="gap-[0px]">
              <div className="">
                <img src={insight} className="rounded-[10px]" alt="" />
              </div>
              <div className="text-center flex flex-col gap-[10px]">
                <h2 className="font-bold">Web Development</h2>
                <p className="text-utils-u1 opacity-[0.7]">
                  Empower your online presence through our expert web
                  development.
                </p>
              </div>
            </StyledDiv>
            <StyledDiv
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              className="gap-[0px]"
            >
              <div className="">
                <img src={insight} className="rounded-[10px]" alt="" />
              </div>
              <div className="text-center flex flex-col gap-[10px]">
                <h2 className="font-bold">Web Development</h2>
                <p className="text-utils-u1 opacity-[0.7]">
                  Empower your online presence through our expert web
                  development.
                </p>
              </div>
            </StyledDiv>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
