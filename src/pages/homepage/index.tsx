import Footer from "../../components/footer";
import AboutUs from "./aboutUs";
import ChooseUs from "./chooseUs";
import ContactUs from "./contactUs";
import OurClients from "./ourClients";
import OurProjects from "./ourProjects";
import ShowCase from "./showcase";

function HomePage() {
  return (
    <div>
      <ShowCase />
      <AboutUs />
      <ChooseUs />
      <OurClients />
      <OurProjects/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default HomePage;
