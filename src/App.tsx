import { FeaturedProjects } from "./components/FeaturedProjects"
import Footer from "./components/Footer"
import HeroHeader from "./components/HeroHeader"
import { LetsConnect } from "./components/LetsConnect"
import ToughInfrastructureSection from "./components/ToughInfrastructureSection"

const App = () => {
  return (
    <>
    
    <HeroHeader/>

 
    <section id="aboutus">
    <ToughInfrastructureSection/>

    </section>
    <section id="featured">
    <FeaturedProjects />

    </section>
    <section id="contact">
    <LetsConnect/>

    </section>
    <section>
    <Footer/>

    </section>
    </>
  )
}

export default App