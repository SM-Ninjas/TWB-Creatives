import { NavLink , Link} from "react-router-dom";
import Logo from "../../assets/icons/logo";
import CustomButton from "../Button";
import DropDown from "./dropdown";



function Navbar() {
  return (
    <div className="flex justify-center items-center sticky top-0 bg-gray-g2 z-50">
      <div className="flex w-full justify-evenly items-center pt-2">
        <ul className="flex justify-between gap-[42px]">
          <NavLink
            to="/"
            className="hover:text-primary-p25 transition"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-primary-p25 transition"
          >
            <li>About Us</li>
          </NavLink>
          <NavLink
            to="/blogs"
            className="hover:text-primary-p25 transition"
          >
            <li>Blogs</li>
          </NavLink>
        </ul>
        <div>
          <Logo />
        </div>
        <ul className="flex gap-[42px] items-center">
            <DropDown/>
          <Link
            to="/contact"
            className="hover:text-primary-p25"
          >
            <CustomButton type="primary" className="">Contact Us</CustomButton>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
