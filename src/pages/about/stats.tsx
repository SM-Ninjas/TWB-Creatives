import { StyledHeading , StyledParagraph } from "./style";

function Stats() {
  return (
    <>
      <div className="w-[100%] h-[435px] flex flex-col justify-center items-center py-[69px] bg-utils">
        <div className="flex flex-col gap-[3.5rem] w-[75%]">
          <div className="">
            <StyledHeading>Where do we stand?</StyledHeading>
            <StyledParagraph>Check out our stats, and get better idea of our position</StyledParagraph>
          </div>
          <div className="flex justify-center gap-[30px]">
            <div className="p-10 w-1/2  flex flex-col gap-[10px]">
              <StyledHeading>23</StyledHeading>
              <StyledParagraph>Project we have completed in total</StyledParagraph>
            </div>
            <div className="p-10 w-1/2  flex flex-col gap-[10px]">
              <StyledHeading>11</StyledHeading>
              <StyledParagraph>Excellent staffs exceling particular field</StyledParagraph>
            </div>
            <div className="p-10 w-1/2 flex flex-col gap-[10px]">
              <StyledHeading>4</StyledHeading>
              <StyledParagraph>Ongoing projects from brightest clients </StyledParagraph>
            </div>
            <div className="p-10 w-1/2 flex flex-col gap-[10px]" >
              <StyledHeading>2</StyledHeading>
              <StyledParagraph>Years of exposure in the market as team</StyledParagraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
