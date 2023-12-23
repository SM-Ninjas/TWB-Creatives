import Footer from "../../components/footer"
import AboutMain from "./main"
import OurSteps from "./ourSteps"
import Stats from "./stats"
import OurTeam from "./team"

function About() {
  return (
    <div className="">
        <AboutMain/>     
        <Stats/>
        <OurSteps/>
        <OurTeam/> 
        <Footer/>
    </div>
  )
}

export default About
