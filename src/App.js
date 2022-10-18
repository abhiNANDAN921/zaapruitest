import React from 'react';
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Productoverviews from "./Productoverviews";
import Productlists from "./Productlists";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App  () {
    return(
        <>
       <Navbar/>
    <Router>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Productoverviews" element={<Productoverviews/>}/>
            <Route path="/Productlists" element={<Productlists/>}/>
            
         
        </Routes>
        </Router>
       
       
            <Footer/>
        </>
    );
}
export default App;