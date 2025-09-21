"use client"
import { useState } from "react";
import { Header } from "./Components/Home/Header";
import { Home } from "./Components/Home/Home";
import { Services } from "./Components/Services/Services";

const App = () => {

  const [navSelect, setNavSelect]=useState<string>('home');
  
  const navSpanSelect = (navSpan:string) => {
    setNavSelect(navSpan);
  }

  return (
    <div className="w-screen h-auto bg-[#1b1b1b] flex justify-center items-center">
      <Header navSpanSelect={navSpanSelect}/>

      { navSelect === 'home' &&
        <Home/>
      }
      { navSelect === 'services' &&
        <Services/>
      }
      
    </div> 
  )
}

export default App;