import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Routes>
       <Route element={<Layout />}>
       <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects/>} />
       
       </Route>
      
    </Routes>
  );
};

export default App;
