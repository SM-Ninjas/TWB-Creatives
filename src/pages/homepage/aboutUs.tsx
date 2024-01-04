function AboutUs() {
  return (
    <div data-aos="fade-up">
      <div className="w-full flex justify-center   mb-[3rem]">
        <div className=" mbl:w-[100%] tl:w-[70%] lp:w-[60%] dp:w-[60%] gap-[12px] dp:flex-row   h-[100%] flex flex-col  tl:items-center text-center  lp:flex-row w-[90%] mbl:w-[90%] mbl:block">
          <div className="flex flex-col justify-center w-1/2 tl:items-center ">
            <h3 className="mbl:text-[1.1rem] tl:text-center text-primary-p10 dp:text-left ml-4 ">
              About us
            </h3>
            <h1 className="text-[2rem] mbl:text-[1.1rem] font-bold">
              Our Approach
            </h1>
          </div>
          <div className="w-full dp:flex dp:text-left flex-col justify-center tl:w-[80%] dp:w-[72%] mbl:mt-[12px]">
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
