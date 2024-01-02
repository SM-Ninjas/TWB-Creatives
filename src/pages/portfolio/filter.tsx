// Filter.js
import { FilterSquare } from "iconsax-react";
import { useState } from "react";

interface FilterProps {
  onFilterChange: (category: string | null) => void;
}

function Filter({ onFilterChange }: FilterProps) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleOpen = () => {
    setDropdownVisible(true);
  };

  const handleClose = () => {
    setDropdownVisible(false);
  };

  const handleFilterChange = (category: string | null) => {
    onFilterChange(category);
    setDropdownVisible(false); // Close the dropdown after selecting a filter
  };

  return (
    <div onMouseLeave={handleClose} className="">
      <FilterSquare
        size="32"
        color="#22092C"
        onClick={handleOpen}
        variant="Bulk"
      ></FilterSquare>
      {isDropdownVisible && (
        <div className="absolute bg-white divide-y pointer divide-white  rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer">
            <li
              onClick={() => handleFilterChange(null)}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              All
            </li>
            <li
              onClick={() => handleFilterChange("Branding")}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              Branding
            </li>
            <li
              onClick={() => handleFilterChange("Social Marketing")}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              Social Marketing
            </li>
            <li
              onClick={() => handleFilterChange("Web Development")}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              Web Development
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Filter;


