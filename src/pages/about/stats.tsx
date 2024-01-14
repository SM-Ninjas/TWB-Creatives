import { StyledHeading, StyledParagraph } from "./style";
import CountUp from "react-countup";

function Stats() {
  function AnimatedCounter({ end, delay }: { end: number; delay: number }) {
    return (
      <CountUp end={end} delay={delay} duration={2}>
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
    );
  }
  return (
    <>
      <div className="w-[100%] h-[435px] flex flex-col justify-center items-center py-[69px] bg-utils">
        <div className="flex flex-col gap-[3.5rem] w-[75%]">
          <div className="">
            <StyledHeading>Where do we stand?</StyledHeading>
            <StyledParagraph>
              Check out our stats, and get better idea of our position
            </StyledParagraph>
          </div>
          <div className="flex justify-center gap-[30px]">
            <div className="p-10 w-1/2  flex flex-col gap-[10px]">
              <StyledHeading>
                <AnimatedCounter delay={1} end={23} />
              </StyledHeading>
              <StyledParagraph>
                Project we have completed in total
              </StyledParagraph>
            </div>
            <div className="p-10 w-1/2  flex flex-col gap-[10px]">
              <StyledHeading>
                <AnimatedCounter delay={1} end={11} />
              </StyledHeading>
              <StyledParagraph>
                Excellent staffs exceling particular field
              </StyledParagraph>
            </div>
            <div className="p-10 w-1/2 flex flex-col gap-[10px]">
              <StyledHeading>
                <AnimatedCounter delay={1} end={4} />
              </StyledHeading>
              <StyledParagraph>
                Ongoing projects from brightest clients{" "}
              </StyledParagraph>
            </div>
            <div className="p-10 w-1/2 flex flex-col gap-[10px]">
              <StyledHeading>
                <AnimatedCounter delay={1} end={1} />
              </StyledHeading>
              <StyledParagraph>
                Years of exposure in the market as team
              </StyledParagraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
