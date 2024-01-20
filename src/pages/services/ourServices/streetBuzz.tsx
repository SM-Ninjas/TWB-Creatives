function StreetBuzz() {
  return (
    <div className="w-[100%]">
      <div className="flex justify-center text-center gap-[2rem]"></div>
      <div className="w-full flex flex-col items-center flex-wrap">
        <div className="w-[100%] gap-[50px] p-[8px] grid grid-cols-3 tl:grid-cols-2 mbl:grid-cols-1 mbl:gap-[10px]">
          <div className="text-center flex flex-col p-3 shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">Billboards</h1>
            <p className="m-2">
              Command attention with impactful visuals and concise messages on
              larger-than-life billboards.
            </p>
          </div>

          <div className="text-center flex flex-col p-3 shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">Posters</h1>
            <p className="m-2">
              Create instant intrigue with eye-catching posters that convey your
              message at a glance.
            </p>
          </div>

          <div className="text-center flex flex-col p-3 shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              Bus shelter ads
            </h1>
            <p className="m-2">
              Strategically place compelling ads at bus shelters for maximum
              impact in high-traffic areas.
            </p>
          </div>

          <div className="text-center flex flex-col p-3 shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              Event management
            </h1>
            <p className="m-2">
              Craft memorable experiences with expert event planning and
              management for lasting brand impressions.
            </p>
          </div>

          <div className="text-center flex flex-col p-3 shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              Partnership Prospects
            </h1>
            <p className="m-2">
              Forge meaningful connections by leveraging strategic sponsorship
              opportunities tailored to your brand.
            </p>
          </div>

          <div className="text-center flex flex-col p-3 shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              Trade show exhibits
            </h1>
            <p className="m-2">
              Stand out at trade shows with captivating exhibits that showcase
              your brand and engage your audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StreetBuzz;
