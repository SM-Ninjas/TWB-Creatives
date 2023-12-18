import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/homepage";
import About from "../pages/about";
import Services from "../pages/services";
import Blogs from "../pages/blogs";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Routing;
