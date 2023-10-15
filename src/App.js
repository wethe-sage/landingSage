import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import Hero from "./Components/Hero";
import About from "./Pages/About";
import ReactGA from "react-ga4";
import React from "react";

ReactGA.initialize("G-ZVHJ6FCKMX");

ReactGA.send({ hitType: "pageview", page: window.location.pathname });

function App() {
  return (
    <div className="app ">
      
      <BrowserRouter>
      <Navbar></Navbar>     
      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer/>
    
      
      
      </BrowserRouter>
      </div>
  );
}

export default App;
