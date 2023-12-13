import CustomButton from "../../components/Button";

function ShowCase() {
  return (
    <div>
      <div className="w-full">
        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center w-[878px] h-[663px] pt-[60px]">
            <div className="w-[600px]">
              <h1 className="text-[2rem] text-center ">
                We Deliver Exceptional Graphic Design, Marketing and Web
                Design/Development Services.
              </h1>
            </div>
            <div className="pt-[1.2rem] pb-[45px]">
            <CustomButton type="primary">Call Now</CustomButton>
            </div>
            <div className="w-[878px] h-[375px] border">
              <img src="../../assets/images/Overlay.png" alt="my img" className=" h-full bg-[#111]"/>
            </div>
          </div>
        </div>
        <div className=" h-[500px] border m-2 flex justify-center">
          <div className="h-[360px] border border-[#900]">
            <div>
            We are more than just a company
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
