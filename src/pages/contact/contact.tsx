import { Divider } from "antd";
import Form from "../../components/form";
import { Location, Call, Sms } from "iconsax-react";

function ContactMain() {
  return (
    <div className="w-full flex flex-col items-center gap-[4rem] pt-[60px]">
      <div className="w-[40%]  dp:w-[50%] lp:w-[64%] tl:w-[75%] mbl:w-[70%] ">
        <h1 className="text-[2rem] tl:text-[1.3rem]  mbl:text-[1.1rem] font-bold text-center">
          Contact us now for effective marketing solutions that make your brand
          stand out.
        </h1>
      </div>

      <div className="w-[80%] flex gap-[1rem]  tl:w-[95%]  mbl:flex-col mbl:items-center mbl:w-[100%]  ">
        <div className="w-[95%]  mbl:w-[80%]">
          <Form />
        </div>

        <div className="w-[60%] flex flex-col items-center flex-wrap">
          <div className="w-[75%] mbl:w-[86%]">
            <div className="flex items-center gap-2 my-3">
              <Location size="32" color="#FF8A65" variant="Bulk" />
              <h1 className="text-[1.4rem] font-semibold mbl:text-[16px]">
                Address
              </h1>
            </div>
            <div>
              <p className="mbl:text-[12px]">
                Suncity Marg. Kathmandu, bag 44600, NP
              </p>
            </div>
          </div>
          <Divider />
          <div className="w-[75%]">
            <div className="flex items-center gap-2 my-3">
              <Sms size="32" color="#FF8A65" variant="Bulk" />
              <h1 className="text-[1.4rem] font-semibold mbl:text-[16px]">
                Email
              </h1>
            </div>
            <div>
              <p className="mbl:text-[12px]">info@twbcreates.com</p>
            </div>
          </div>
          <Divider />
          <div className="w-[75%]">
            <div className="flex items-center gap-2 my-3">
              <Call size="32" color="#FF8A65" variant="Bulk" />
              <h1 className="text-[1.4rem] font-semibold mbl:text-[16px]">
                Toll Free Number
              </h1>
            </div>
            <div>
              <p className="mbl:text-[12px]">+1800 200 14523</p>
            </div>
          </div>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default ContactMain;
