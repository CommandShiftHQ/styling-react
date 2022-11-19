import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div>
      <h1>Styling React</h1>
      <Router>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
