import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Layout from "./layout/Layout";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./ScrollToTop";
import ServiceDetails from "./pages/ServiceDetails";
import Career from "./pages/Career";
import SafetyPage from "./pages/Safety";

const App = () => {
  return (
    <>
    
    <ScrollToTop/>
    <Routes>
       <Route element={<Layout />}>
       <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/career" element={<Career />} />
      <Route path="/safety" element={<SafetyPage/>} />

       
       </Route>
      
    </Routes>
    </>
    
  );
};

export default App;
