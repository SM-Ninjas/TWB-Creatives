function AboutUs() {
  return (
    <div data-aos="fade-up">
      <div className="w-full flex justify-center mb-[3rem]">
        <div className="flex flex-col items-center mbl:w-[100%]  mbl:text-center mbl:w-[90%]  tl:w-[70%]   lp:w-[60%] lp:flex-row w-[90%] dp:w-[70%] dp:flex-row dp:gap-[30px]  dp:h-[100%] dp:flex  ">
          <div className=" flex flex-col justify-center w-[35%] mbl:text-center tl:text-center ">
            <h3 className="mbl:text-[1.1rem] tl:text-[1.1rem]  text-primary-p10 dp:text-left">
              About us
            </h3>
            <h1 className="text-[2rem] mbl:text-[1.1rem] tl:text-[1.1rem] lp:text-[1.5rem] font-bold">
              Our Approach
            </h1>
          </div>
          <div className="w-full dp:flex dp:text-left dp:w-[72%] flex-col justify-center tl:w-[80%]  mbl:mt-[12px]">
            <p className="text-utils-u1 opacity-[0.7]  text-[1rem]">
              Our core goals encompass delivering cutting-edge graphic design,
              impactful marketing strategies, and user-centric web development
              solutions. We aim to elevate our clients' brands, ensuring a
              strong digital presence and sustained success in today's dynamic
              business environment.
            </p>
          </div>
          <div className="w-full  tl:w-[80%] dp:w-[75%]  mbl:mt-[12px]">
            <p className="text-utils-u1 opacity-[0.7] text-[1rem]">
              Our vision is to be a trailblazer in the intersection of
              creativity and technology, setting new standards in graphic
              design, marketing, and web development. We aspire to be the go-to
              partner for businesses seeking innovative solutions, driving their
              growth, and leaving a lasting impact in the digital realm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
