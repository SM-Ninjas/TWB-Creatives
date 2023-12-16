import clientImage1 from "../../assets/images/client-1.webp";
import clientImage2 from "../../assets/images/client-2.webp";
import clientImage3 from "../../assets/images/client-3.webp";

function OurClients() {
  return (
    <>
      <div className="w-full h-[377px] flex justify-center items-center">
        <div className="w-[471px] h-[195px] flex flex-col gap-[30px]">
        <div>
          <h1 className="text-center text-utils font-bold text-[2rem]">Our Brilliant Clients</h1>
        </div>
        <div className="flex justify-between  ">
          <img className="w-[119px] h-[119px]" src={clientImage1} alt="client-1" />
          <img className="w-[126px] h-[89px]" src={clientImage2} alt="client-2" />
          <img className="w-[100px] h-[100px]" src={clientImage3} alt="client-3" />
        </div>
      </div>
        </div>
    </>
  );
}

export default OurClients;
