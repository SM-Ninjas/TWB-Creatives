import Logo from "../../assets/icons/logo";
// import { Button as AntButton } from "antd";
import CustomButton from "../Button";

function Navbar() {
  return (
    <div className="flex justify-center items-center pt-2">
      <div className=" flex w-full justify-evenly items-center">
        <ul className="flex justify-between gap-[42px]">
          <li className="hover:text-primary-p25" >Home</li>
          <li className="hover:text-primary-p25" >About Us</li>
          <li className="hover:text-primary-p25">Our Services</li>
        </ul>
        <div>
            <Logo/>
        </div>
        <ul className="flex gap-[42px] items-center">
            <li className="hover:text-primary-p25"> Blogs</li>
            <CustomButton  color="g1" type="primary" >Contact Us</CustomButton>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
