import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Page Components
import HomePage from "./Pages/HomePage";
import About from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Careers from "./Pages/Careers";
import OurWork from "./Pages/OurWork";
import Services from "./Pages/Services";
import WhatsAppButton from "./Components/Whatsapp";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CallButton from "./Components/CallButton";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/career" element={<Careers />} /> */}
        {/* <Route path="/OurWork" element={<OurWork />} /> */}
        {/* <Route path="/Services" element={<Services />} /> */}
      </Routes>
      <Footer />
      <CallButton />
      <WhatsAppButton />
    </Router>
  );
};

export default App;
