import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar";
import "./index.css";
import Routing from "./routing";

function App() {
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
