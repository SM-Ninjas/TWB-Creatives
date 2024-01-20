// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo";
import CustomButton from "../Button";
import DropDown from "./dropdown";
import { StyledNavLink } from "./style";
import HamburgerMenu from "./hamMenu";

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  // Add event listener to handle resizing
  React.useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center sticky top-0 z-50 bg-white bg-opacity-[60%] border border-[#fff] border-[1px] backdrop-blur-md p-2">
      <div className="flex w-full justify-around items-center pt-2 tl:justify-between mbl:justify-between">
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>
        {isMobileView ? (
          // Render HamburgerMenu component on mobile view
          <HamburgerMenu />
        ) : (
          // Render full navigation bar on larger screens
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
            {/* Add more navigation links as needed */}
          </ul>
        )}

        {/* Other elements (Drop down, Contact button) */}
        {!isMobileView && (
          <ul className="flex gap-[42px] items-center">
            <DropDown />
            <Link to="/contact" className="hover:text-primary-p25">
              <CustomButton>Contact Us</CustomButton>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
