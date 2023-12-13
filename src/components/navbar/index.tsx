import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo";
// import { Button as AntButton } from "antd";
import CustomButton from "../Button";

function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <div className=" flex w-full justify-evenly items-center pt-2">
        <ul className="flex justify-between gap-[42px]">
          <Link to='/'>
          <li className="hover:text-primary-p25" >Home</li>
          </Link>
          <Link to='/about'>
          <li className="hover:text-primary-p25">About Us</li>
          </Link>
          <Link to="/services">
          <li className="hover:text-primary-p25">Our Services</li>
          </Link>
        </ul>
        <div>
            <Logo/>
        </div>
        <ul className="flex gap-[42px] items-center">
          <Link to="/blogs">
            <li className="hover:text-primary-p25"> Blogs</li>
          </Link>
          <Link to="/contact">
            <CustomButton  type="primary" >Contact Us</CustomButton>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
