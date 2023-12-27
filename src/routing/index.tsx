import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/homepage";
import About from "../pages/about";
import Services from "../pages/services";
import Blogs from "../pages/blogs";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";
import BlogDetails from "../pages/blogs/blogDetails";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:id" element={<BlogDetails/>} />
      </Routes>
    </div>
  );
}

export default Routing;
