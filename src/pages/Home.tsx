import { FeaturedProjects } from "../components/FeaturedProjects";
import { LetsConnect } from "../components/LetsConnect";
import ToughInfrastructureSection from "../components/ToughInfrastructureSection";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
     <Hero/>

      <section id="aboutus">
        <ToughInfrastructureSection />
      </section>

      <section id="featured">
        <FeaturedProjects />
      </section>

      <section id="contact">
        <LetsConnect />
      </section>

   
    </>
  );
};

export default Home;
