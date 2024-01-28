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
      <OurProjects />
      <ContactUs />  
    </div>
  );
}

export default HomePage;
