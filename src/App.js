import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar></Navbar>     
      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
        <Route path="/contact" element={<Contact></Contact>}>
        {/* <Route path="/about" element={<About></About>}></Route> */}
        </Route>
      </Routes>
      <Footer/>
    
      
      
      </BrowserRouter>
      </div>
  );
}

export default App;
