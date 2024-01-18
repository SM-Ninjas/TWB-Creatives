function StreetBuzz() {
  return (
    <div className="w-[100%]">
      <div className="flex justify-center text-center gap-[2rem]">
      </div>
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
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              Magazine Ads
            </h1>
            <p className="m-2">
              Tell your brand story visually with captivating glossy magazine
              ads.
            </p>
          </div>

          <div className="text-center flex flex-col p-3 shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">Brochures</h1>
            <p className="m-2">
              Convey key information hands-on with visually appealing brand
              brochures.
            </p>
          </div>

          <div className="text-center flex flex-col p-3 shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">Flyers</h1>
            <p className="m-2">
              Create instant impact, promoting events or offers with
              attention-grabbing flyers.
            </p>
          </div>

          <div className="text-center flex flex-col p-3 shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">
              TV Commercials
            </h1>
            <p className="m-2">
              Engage a broad audience, tell your brand story dynamically through
              TV commercials.
            </p>
          </div>

          <div className="text-center flex flex-col p-3 shadow-[-4px_-4px_20px_#0000000d] p-4">
            <h1 className="text-utils m-2 font-bold text-[1rem]">Radio Ads</h1>
            <p className="m-2">
              Capture ears effectively, delivering your brand message
              persuasively in radio advertisements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StreetBuzz;
