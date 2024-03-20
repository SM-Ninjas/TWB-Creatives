function StoryPower() {
  return (
    <div className="w-[100%]">
      <div className="flex justify-center text-center gap-[2rem]"></div>
      <div className="w-full flex flex-col items-center flex-wrap">
        <div className="w-[100%] gap-[50px] p-[8px] grid grid-cols-3 tl:grid-cols-2 mbl:grid-cols-1 mbl:gap-[10px]">
          <div className="text-center flex flex-col  shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              Media relations
            </h1>
            <p className="m-2">
              Cultivate positive relationships with the media, ensuring your
              brand stories reach the right audience.
            </p>
          </div>

          <div className="text-center flex flex-col p-4 shadow-[-4px_-4px_20px_#0000000d]">
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              Influencer Tie-Ups
            </h1>
            <p className="m-2">
              Collaborate with industry influencers to authentically connect
              with your target audience, leveraging their credibility and reach
              to amplify your brand's message and drive engagement.
            </p>
          </div>

          <div className="text-center flex flex-col  shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              Crisis management
            </h1>
            <p className="m-2">
              Navigate challenges seamlessly with effective crisis management
              strategies that safeguard your brand reputation.
            </p>
          </div>

          <div className="text-center flex flex-col  shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              Cold calling
            </h1>
            <p className="m-2">
              Initiate meaningful connections through targeted cold calling,
              generating leads and fostering relationships.
            </p>
          </div>

          <div className="text-center flex flex-col  shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              Lead generation
            </h1>
            <p className="m-2">
              Fuel your sales pipeline with strategic lead generation tactics
              tailored to your target audience.
            </p>
          </div>

          <div className="text-center flex flex-col  shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              {" "}
              Online press releases
            </h1>
            <p className="m-2">
              Amplify your online presence with compelling press releases
              tailored for the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryPower;
