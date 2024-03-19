import React, { useState, useEffect } from 'react';

interface CustomNotificationProps {
  message: string;
  description: string;
}

const CustomNotification: React.FC<CustomNotificationProps> = ({ message, description }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if the notification has been shown
    const notificationShown = sessionStorage.getItem('notificationShown');

    if (!notificationShown) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 8000); // Hide after 8 seconds
      // Set the flag in sessionStorage
      sessionStorage.setItem('notificationShown', 'true');

      return () => clearTimeout(timer); // Clean up on unmount
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute bottom-0 left-[-2.4rem] text-[#fff] p-4 rounded shadow-md w-64 h-auto bg-[#080]">
      <h4 className="font-bold">{message}</h4>
      <p>{description}</p>
    </div>
  );
};

export default CustomNotification;
