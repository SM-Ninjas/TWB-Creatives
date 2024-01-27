import { headingWhite } from "../../styling/responsive";
import { StyledParagraph } from "./style";

function Stats() {
  return (
    <div className="w-[100%]  flex flex-col justify-center items-center py-[69px]  bg-utils">
      <div className="">
        <h1 className={`${headingWhite} `}>Where do we stand?</h1>
        <StyledParagraph className="mbl:text-[12px] mb-8">
          Check out our stats, and get a better idea of our position
        </StyledParagraph>
      </div>

      <div className="pb-[4rem] dp:w-[70%] lp:w-[80%] tl:w-[90%] mbl:w-[100%] flex justify-center gap-[2.5rem] tl:flex-wrap lp:flex-wrap mbl:flex-wrap ">
        <div className="w-[160px] flex flex-col gap-[10px]">
          <h1 className={`${headingWhite}`}>23</h1>
          <StyledParagraph className=" mbl:text-[12px]">
            Projects we have completed in total
          </StyledParagraph>
        </div>
        <div className="w-[160px] flex flex-col gap-[10px]">
          <h1 className={`${headingWhite}`}>11</h1>
          <StyledParagraph className=" mbl:text-[12px]">
            Excellent staff excelling in a particular field
          </StyledParagraph>
        </div>
        <div className="w-[160px] flex flex-col gap-[10px]">
          <h1 className={`${headingWhite}`}>4</h1>
          <StyledParagraph className=" mbl:text-[12px]">
            Ongoing projects from our brightest clients
          </StyledParagraph>
        </div>
        <div className="w-[160px] flex flex-col gap-[10px]">
          <h1 className={`${headingWhite}`}>1</h1>
          <StyledParagraph className=" mbl:text-[12px]">
            Years of exposure in the market as a team
          </StyledParagraph>
        </div>
      </div>
    </div>
  );
}

export default Stats;
