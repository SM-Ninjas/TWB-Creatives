import { NavLink} from "react-router-dom";
import Logo from "../../assets/icons/logo";
import CustomButton from "../Button";



function Navbar() {
  return (
    <div className="flex justify-center items-center">
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
            to="/services"
            className="hover:text-primary-p25 transition"
          >
            <li>Our Services</li>
          </NavLink>
        </ul>
        <div>
          <Logo />
        </div>
        <ul className="flex gap-[42px] items-center">
          <NavLink
            to="/blogs"
            className="hover:text-primary-p25 transition"
          >
            <li>Blogs</li>
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-primary-p25"
          >
            <CustomButton type="primary" className="">Contact Us</CustomButton>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
