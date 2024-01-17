import { Divider } from "antd";
import Form from "../../components/form";
import { Location ,Call, Sms} from "iconsax-react";

function ContactMain() {
  return (
    <div className="flex flex-col items-center gap-[4rem] pt-[60px]">
      <div className="w-[40%]  dp:w-[50%] lp:w-[64%] tl:w-[75%] mbl:w-[70%] ">
        <h1 className="text-[2rem] tl:text-[1.3rem]  mbl:text-[1.1rem] font-bold text-center">
          Contact us now for effective marketing solutions that make your brand
          stand out.
        </h1>
      </div>
      <div className="w-[75%] flex gap-[2rem]  tl:w-[95%]  mbl:flex-col mbl:items-center mbl:w-[100%] ">
        <div className="w-[66%]">
          <Form />
        </div>
        <div className="w-1/2 flex flex-col items-center flex-wrap">
          <div className="w-[75%]">
            <div className="flex gap-2 my-3">
            <Location size="32" color="#FF8A65" variant="Bulk"/>
              <h1 className="text-[1.4rem] font-semibold">Address</h1>
            </div>
            <div>
              <p>
                77408 Satterfield Motorway Suite 469 New Antonetta, BC K3L6P6
              </p>
            </div>
          </div>
          <Divider />
          <div className="w-[75%]">
            <div className="flex gap-2 my-3">
            <Sms size="32" color="#FF8A65" variant="Bulk"/>
              <h1 className="text-[1.4rem] font-semibold">Email</h1>
            </div>
            <div>
              <p>
                info@twbcreates.com  
              </p>
            </div>
          </div>
          <Divider />
          <div className="w-[75%]">
            <div className="flex gap-2 my-3">
            <Call size="32" color="#FF8A65" variant="Bulk"/>
              <h1 className="text-[1.4rem] font-semibold">Toll Free Number</h1>
            </div>
            <div>
              <p>
              +1800 200 14523
              </p>
            </div>
          </div>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default ContactMain;
