import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/homepage";
import About from "../pages/about";
import Services from "../pages/services";
import Blogs from "../pages/blogs";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";
import BlogDetails from "../pages/blogs/blogDetails";
import ProjectDetails from "../pages/portfolio/projectDetails";
import TeamDetails from "../pages/about/teamDetails";
import ClientDetails from "../pages/homepage/clientDetails";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/team/:id" element={<TeamDetails />} />
        <Route path="/client/:id" element={<ClientDetails />} />
      </Routes>
    </div>
  );
}

export default Routing;
