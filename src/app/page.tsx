"use client"
import { Header } from "./Components/Header";
import { Home } from "./Components/Home/Home";


const App = () => {


  return (
    <div className="w-screen h-auto bg-[#1b1b1b] flex justify-center items-center">
      <Header/>

      { 
        <Home/>
      }
      
    </div> 
  )
}

export default App;