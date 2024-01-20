// HamburgerMenu.js
import { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./dropdown";

const HamburgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <button
        className="text-utils hover:text-utils opacity-[0.6] font-medium rounded-lg text-[1.05rem] px-5 py-2.5 text-center inline-flex items-center relative"
        type="button"
        onClick={handleMenuToggle}
      >
        Menu
        <svg
          className={`w-4 h-4 ms-3 transform ${isMenuOpen ? "rotate-90" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-14 right-0 z-1 rounded-lg bg-white shadow w-44">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <Link
              to="/"
              onClick={closeMenu}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              <li className="">Home</li>
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              <li>About Us</li>
            </Link>
            <Link
              to="/blogs"
              onClick={closeMenu}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              <li>Blogs</li>
            </Link>
            {/* Add more menu items as needed */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              <li>Contact Us</li>
            </Link>
            <div onClick={closeMenu}>
              <DropDown />
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
