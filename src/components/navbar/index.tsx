import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo";
import CustomButton from "../Button";
import DropDown from "./dropdown";
import { StyledNavLink } from "./style";

function Navbar() {
  return (
    <div className="flex justify-center items-center sticky top-0 z-50 bg-white bg-opacity-[60%] border border-[#fff] border-[1px] backdrop-blur-md  p-2">
      <div className="flex w-full justify-evenly items-center pt-2">
        <ul className="flex justify-between gap-[42px]">
          <StyledNavLink to="/" className="hover:text-primary-p25 transition">
            <li className="text-[1.05rem]">Home</li>
          </StyledNavLink>
          <StyledNavLink
            to="/about"
            className="hover:text-primary-p25 transition"
          >
            <li className="text-[1.05rem]">About Us</li>
          </StyledNavLink>
          <StyledNavLink
            to="/blogs"
            className="hover:text-primary-p25 transition"
          >
            <li className="text-[1.05rem]">Blogs</li>
          </StyledNavLink>
        </ul>
        <div>
          <Logo />
        </div>
        <ul className="flex gap-[42px] items-center">
          <DropDown />
          <Link to="/contact" className="hover:text-primary-p25">
            <CustomButton>
              Contact Us
            </CustomButton>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
