"use client"

import { Header } from "@/app/Components/Header";
import Link from "next/link";

const App = () => {
  return (
      <div className="w-screen h-auto bg-[#1b1b1b] flex justify-center items-center font-google-sans-code font-light overflow-y-hidden">
        <Header />
        <section className="w-full h-screen flex flex-col items-center justify-center overflow-x-auto">
            <div className="w-full h-full flex justify-center items-center flex-col relative overflow-x-hidden">
                <div className="bg-black/40 bg-gradient-to-t from-black/85 to-transparent w-full h-full absolute z-10"></div>
                <img
                className="w-full h-full absolute z-0 object-cover object-top"
                src="/Images/Home.jpg" alt="" 
                />
                
                <h1 className="md:text-8xl text-4xl font-google-sans-code  text-center md:m-10 m-5 mx-2 z-20 cursor-pointer">
                    Experience Timeless Beauty
                </h1>
                <p className="lg:w-5xl md:w-3xl md:text-2xl w-auto mx-2 text-center  z-20 cursor-pointer">
                    Discover a sanctuary where artistry meets rejuvenation. We craft bespoke experiences designed to enhance your natural radiance and leave you feeling uniquely you.
                </p>
                <div className="flex md:flex-row flex-col gap-6 m-15 z-20">
                    <Link href={'/services'} className="md:text-[19px] text-center font-extrabold px-5 py-4 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-300 rounded-md text-black  hover:scale-105 transition-all duration-500">
                        Explore Services
                    </Link>
                    <Link href={'/contact'} className="md:text-[19px] text-center border-2 border-white rounded-md font-extrabold px-5 py-4 cursor-pointer text-white  hover:scale-105 transition-all duration-500">
                        Book a Consultation
                    </Link>
                </div>
            </div>
        </section>
      </div>
  )
}

export default App;