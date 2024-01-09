import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/homepage";
import About from "../pages/about";
import Services from "../pages/services";
import Blogs from "../pages/blogs";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";
import BlogDetails from "../pages/blogs/blogDetails";
import ProjectDetails from "../pages/portfolio/projectDetails";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/portfolio/:id" element={<ProjectDetails/>} />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:id" element={<BlogDetails/>} />
      </Routes>
    </div>
  );
}

export default Routing;
