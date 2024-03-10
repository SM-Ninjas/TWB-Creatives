function AboutUs() {
  return (
    <div data-aos="fade-up">
      <div className="w-full flex justify-center my-[3rem]">
        <div className="flex flex-col items-center mbl:text-center mbl:w-[90%]  tl:w-[70%] tl:gap-6 lp:flex-row lp:w-[90%] lp:gap-8 dp:w-[70%] dp:flex-row dp:gap-[30px] dp:h-[100%] dp:flex">
          <div className=" flex flex-col justify-center w-[40%] mbl:text-center tl:text-center">
            <h3 className="mbl:text-[16px] tl:text-[1.1rem]  text-primary-p10 dp:text-left">
              About us
            </h3>
            <h1 className="text-[2rem] mbl:text-[18px] tl:text-[1.1rem] lp:text-[1.5rem] font-bold">
              Our Approach
            </h1>
          </div>
          <div className="w-full dp:flex dp:text-left dp:w-[50%] lp:w-[70%] flex-col justify-center tl:w-[80%]  mbl:mt-[12px]">
            <p className="text-utils-u1 opacity-[0.7]  mbl:text-[12px] text-[1rem]">
              Our core goals encompass delivering cutting-edge graphic design,
              impactful marketing strategies, and user-centric web development
              solutions. We aim to elevate our clients' brands, ensuring a
              strong digital presence and sustained success in today's dynamic
              business environment.
            </p>
          </div>
          <div className="  tl:w-[80%] dp:w-[60%] lp:w-[70%]  mbl:mt-[12px]">
            <p className="text-utils-u1 opacity-[0.7] text-[1rem] mbl:text-[12px]">
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
