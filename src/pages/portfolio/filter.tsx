import React, { useState } from "react";
import { FilterSquare } from "iconsax-react";
import CustomNotification from "../../components/notifkcation";

interface FilterProps {
  onFilterChange: (category: string | null) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // useEffect(() => {
  //   // Check if the notification has been shown
  //   const notificationShown = sessionStorage.getItem("notificationShown");

  //   if (!notificationShown) {
  //     const api = notification.open({
  //       message: "Filter Button",
  //       description: "Click the filter button to filter the items.",
  //       duration: 8, // Duration in seconds
  //       placement: "bottomRight", // Change this to suit your layout
  //     });

  //     // Close the notification after 8 seconds
  //     setTimeout(() => {
  //       if (api) {
  //         api.close();
  //       }
  //     }, 8000);

  //     // Set the flag in sessionStorage
  //     sessionStorage.setItem("notificationShown", "true");
  //   }
  // }, []);

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
      <div className="relative">
        <CustomNotification
          message="Filter Button"
          description="Click to Filter the portfolios."
        />
        <div className="absolute top-0 right-0 m-2">
          <FilterSquare
            size="32"
            color="#22092C"
            onClick={handleOpen}
            variant="Bulk"
          />
        </div>
      </div>
      {isDropdownVisible && (
        <div className="absolute top-full right-0 bg-white divide-y pointer divide-white rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer">
            <li
              onClick={() => handleFilterChange(null)}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              All
            </li>
            <li
              onClick={() => handleFilterChange("branding")}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              Branding
            </li>
            <li
              onClick={() => handleFilterChange("socialmarketing")}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              Social Marketing
            </li>
            <li
              onClick={() => handleFilterChange("Webdevelopment")}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              Web Development
            </li>
            <li
              onClick={() => handleFilterChange("eventhandlling")}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
              Event Handlling
            </li>
            <li
              onClick={() => handleFilterChange("seosem")}
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 hover:bg-primary-p50"
            >
           SEO & SEM
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
