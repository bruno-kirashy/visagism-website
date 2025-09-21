"use client"
import { Header } from "./Components/Header";
import { Home } from "./Components/Home/Home";
import { Services } from "./Components/Services/Services";
import { Gallery } from "./Components/Gallery/Gallery";
import { Contact } from "./Components/Contact/Contact";
import { About } from "./Components/About/About";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {

  const [menuMobileOpen, setMenuMobileOpen]=useState<boolean>(false);
  
  const handleClickClose = () => {
    setMenuMobileOpen(false);
  }

  return (
    <Router>
      <div className="w-screen h-auto bg-[#1b1b1b] flex justify-center items-center font-google-sans-code font-light">
        <Header 
        handleClickClose={handleClickClose}
        menuMobileOpen={menuMobileOpen}
        setMenuMobileOpen={setMenuMobileOpen}
        />

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/about" element={<Contact/>}></Route>
          <Route path="/contact" element={<About/>}></Route>
        </Routes>
        
      </div>
    </Router>
  )
}

export default App;