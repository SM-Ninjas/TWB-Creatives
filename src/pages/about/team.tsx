import { LinkedinOutlined } from "@ant-design/icons";
import { StyledTeam } from "./style";
import Ksitiz from "../../assets/images/kshitiz.png";
import Saroj from "../../assets/images/saroj.png";
import Suyog from "../../assets/images/suyog.png";


function OurTeam() {
  return (
    <>
      <div className="mt-[5.5rem] border border-[#901]">
        <div className="">
          <div className=" bg-utils flex justify-center h-[304px] pt-[103px] ">
            <h1 className="text-[2rem] font-bold text-white">Meet The Team</h1>
          </div>
          <div className="relative bottom-[91px]">
            <div className="flex justify-center gap-[45px]">
            <StyledTeam>
              <img
                src={Ksitiz}
                className="w-[261px] h-[268px] rounded-[8px]"
                alt=""
                />
              <h1 className="text-utils text-[21px] opacity-[0.6]">
                Ksitiz Devkota
              </h1>
              <h1 className="text-utils font-bold text-[2rem]">CEO</h1>

              <LinkedinOutlined size={37} />
            </StyledTeam>
            <StyledTeam>
              <img
                src={Saroj}
                className="w-[261px] h-[268px] rounded-[8px]"
                alt=""
              />
              <h1 className="text-utils text-[21px] opacity-[0.6]">
                Saroj Ghimire
              </h1>
              <h1 className="text-utils font-bold text-[2rem]">CEO</h1>
            </StyledTeam>

            <StyledTeam>
              <img
                src={Suyog}
                className="w-[261px] h-[268px] rounded-[8px]"
                alt=""
                />
              <h1 className="text-utils text-[21px] opacity-[0.6]">
                Suyog Karki{" "}
              </h1>
              <h1 className="text-utils font-bold text-[2rem]">CEO</h1>
            </StyledTeam>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
