import { StyledCard } from "../style";
function StreetBuzz() {
  return (
    <div className="w-full">
      <div className="flex justify-center text-center gap-[1rem]">
        <p className="w-[50%] text-[20px] font-medium opacity-[0.80] mb-[2rem]">
          Captivate audiences with impactful billboards, captivating posters,
          and strategically placed bus shelter ads. Enhance brand visibility at
          events, sponsorships, and trade shows, leaving a lasting and
          influential impression on the street level.
        </p>
      </div>
      <div className="w-full border flex flex-col items-center wrap">
        <div className="w-[65%] p-[8px] grid grid-cols-3 gap-[50px]">
          <StyledCard className="">
            <h1 className="text-utils m-2 font-bold text-[1rem]">Billboards</h1>
            <p className="m-2">
              Command attention with impactful visuals and concise messages on
              larger-than-life billboards.
            </p>
          </StyledCard>

          <StyledCard className="">
            <h1 className="text-utils m-2 font-bold text-[1rem]">Posters</h1>
            <p className="m-2">
              Grab attention with impactful visuals and concise copy in print
              advertisements.
            </p>
          </StyledCard>

          <StyledCard className="">
            <h1 className="text-utils m-2 font-bold text-[1rem]">Brochures</h1>
            <p className="m-2">
              Grab attention with impactful visuals and concise copy in print
              advertisements.
            </p>
          </StyledCard>

          <StyledCard className="">
            <h1 className="text-utils m-2 font-bold text-[1rem]">Flyers</h1>
            <p className="m-2">
              Grab attention with impactful visuals and concise copy in print
              advertisements.
            </p>
          </StyledCard>

          <StyledCard className="">
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              T.V commercials
            </h1>
            <p className="m-2">
              Grab attention with impactful visuals and concise copy in print
              advertisements.
            </p>
          </StyledCard>

          <StyledCard className="">
            <h1 className="text-utils m-2 font-bold text-[1rem]">Radio ads</h1>
            <p className="m-2">
              Grab attention with impactful visuals and concise copy in print
              advertisements.
            </p>
          </StyledCard>
        </div>
      </div>
    </div>
  );
}

export default StreetBuzz;
