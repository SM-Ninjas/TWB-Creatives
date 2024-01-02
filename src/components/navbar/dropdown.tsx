import { useState } from "react";
import { Link } from "react-router-dom";

function DropDown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div onMouseLeave={handleMouseLeave} className="relative ">
      <button
        onMouseEnter={handleMouseEnter}
        className=" text-utils hover:text-utils opacity-[0.6] font-medium rounded-lg text-[1.05rem] px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        Our Works
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isDropdownVisible && (
        <div className="absolute z-1 rounded-lg bg-white shadow w-44">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <Link
              to="/services"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              <li className="">Service We Provide</li>
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
