import React, { useState, useEffect } from "react";

interface CustomNotificationProps {
  message: string;
  description: string;
}

const CustomNotification: React.FC<CustomNotificationProps> = ({
  message,
  description,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // Check if the notification has been shown
    const notificationShown = sessionStorage.getItem("notificationShown");

    if (!notificationShown) {
      setVisible(true);
      const timer = setTimeout(() => {
        if (isMounted) {
          setVisible(false);
          sessionStorage.setItem("notificationShown", "true");
        }
      }, 6000);

      return () => {
        isMounted = false;
        clearTimeout(timer);
      };
    }
  }, []);

  // Hide the notification after 6 seconds
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("notificationShown", "true");
      }, 6000); 

      return () => clearTimeout(timer); 
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="absolute bottom-0 left-[-2.4rem] text-[#fff] p-4 rounded shadow-md w-64 h-auto bg-[#080]">
      <h4 className="font-bold">{message}</h4>
      <p>{description}</p>
    </div>
  );
};

export default CustomNotification;
