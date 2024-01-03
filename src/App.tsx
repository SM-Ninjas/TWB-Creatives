import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar";
import "./index.css";
import Routing from "./routing";

function App() {
  useEffect(() => {
    AOS.init({
      // Your AOS config and  styling goes here 
      offset: 0, 
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <div className="">
        <Navbar />
        <Routing />
      </div>
    </Router>
  );
}

export default App;
