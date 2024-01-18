import { StyledCard } from "../style";

function StoryPower() {
  return (
    <div className="w-full">
      <div className="flex justify-center text-center gap-[1rem]">
        <p className="w-[50%] text-[20px] font-medium opacity-[0.80] mb-[2rem]">
          A craft compelling narratives through press releases, effective media
          relations, and crisis management strategies. Drive leads with powerful
          storytelling via cold calling, lead generation, and impactful online
          press releases.
        </p>
      </div>
      <div className="w-full border flex flex-col items-center wrap">
        <div className="w-[65%] p-[8px] grid grid-cols-3 gap-[50px]">
          <StyledCard>
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              Newspaper ads
            </h1>
            <p className="m-2">
              Grab attention with impactful visuals and concise copy in print
              advertisements.
            </p>
          </StyledCard>

          <StyledCard>
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              Magazine ads
            </h1>
            <p className="m-2">
              Grab attention with impactful visuals and concise copy in print
              advertisements.
            </p>
          </StyledCard>

          <StyledCard>
            <h1 className="text-utils m-2 font-bold text-[1rem]">Brochures</h1>
            <p className="m-2">
              Grab attention with impactful visuals and concise copy in print
              advertisements.
            </p>
          </StyledCard>

          <StyledCard>
            <h1 className="text-utils m-2 font-bold text-[1rem]">Flyers</h1>
            <p className="m-2">
              Grab attention with impactful visuals and concise copy in print
              advertisements.
            </p>
          </StyledCard>

          <StyledCard>
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              T.V commercials
            </h1>
            <p className="m-2">
              Grab attention with impactful visuals and concise copy in print
              advertisements.
            </p>
          </StyledCard>

          <StyledCard>
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

export default StoryPower;
