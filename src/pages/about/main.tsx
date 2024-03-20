import { headingBlack } from "../../styling/responsive";
import aboutimg  from "../../assets/images/aboutimg.jpg";

function AboutMain() {
  return (
    <div className="w-full flex justify-center ">
      <div className="pt-[60px] dp:w-[90%]  flex flex-col items-center tl:w-[90%] mbl:w-[100%]  lp:w-[80%]">
        <div className=" text-center dp:w-[57%] lp:w-[64%] tl:w-[72%]  mbl:w-[85%] mb-[3.5rem]">
          <h2 className={`${headingBlack} mbl:text-[18px]`}>
            Who We Are: Crafting Digital Excellence in Design, Marketing, and
            Web Development.
          </h2>
        </div>

        <div className="dp:w-[85%] lp:w-[90%] tl:w-[70%] mbl:w-[85%] flex justify-center tl:block gap-[33px] mb-12 items-center tl:gap-0 mbl:gap-0">
          <div className="text-left tl:hidden mbl:hidden w-[35%]">
            <p className="text-[16px] mbl:text-[12px]">
              {" "}
              Welcome to TWB Creatives, where creativity converges with
              technology to redefine the digital landscape. As industry leaders
              in graphic design, marketing, and web development, we embark on a
              mission to transform ideas into impactful digital experiences. Our
              journey is marked by a passion for innovation, collaborative
              spirit, and unwavering commitment to excellence.
            </p>
          </div>
          <div className="w-[40%] tl:w-[100%] mbl:w-[100%]">
            <img
              src={aboutimg}
              className="w-[100%] h-[256px] bg-gray rounded-[8px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMain;
