import { TextAlignJustify ,House, Sprout, Camera, Info, Calendar, LogOut} from "lucide-react";
import Link from 'next/link';
import { useState } from "react";

export const Header = () => {

    const [menuMobileOpen, setMenuMobileOpen]=useState<boolean>(false);
  
    const handleClickClose = () => {
        setMenuMobileOpen(false);
    }

    return (
        <section className={`w-full py-3 lg:px-40 md:px-10 px-5 fixed z-50 top-0 bg-black/10 backdrop-blur-md border-b-1 border-amber-300/100 flex items-center justify-between`}>
            <Link href="/" className="text-[18px] md:text-2xl mr-3 cursor-pointer hover:scale-110 transition-all duration-300">
                VisagismWeb
            </Link>
            <nav className="flex lg:gap-6 md:gap-6 gap-2 justify-center items-center text-[17px]">
                <nav className="md:flex gap-6 hidden font-notosans">
                    <Link href="/" className="cursor-pointer transition-all duration-300 hover:scale-110">Home</Link>
                    <Link href="/services" className="cursor-pointer transition-all duration-300 hover:scale-110">Services</Link>
                    <Link href="/gallery" className="cursor-pointer transition-all duration-300 hover:scale-110">Gallery</Link>
                    <Link href="/about" className="cursor-pointer transition-all duration-300 hover:scale-110">About</Link>
                    <Link href="/contact" className="cursor-pointer transition-all duration-300 hover:scale-110">Contact</Link>
                </nav>
                
                <Link href={'/contact'}>
                    <button className="lg:px-4 lg:py-2  md:px-4 md:py-2 md:mr-5  px-1 py-1 mr-5 text-[18px] md:text[18px] cursor-pointer bg-gradient-to-r from-amber-500 to-amber-300 rounded-md text-black font-bold hover:scale-105 transition-all duration-300">
                        Book Now
                    </button>
                </Link>
                
            

                <div onClick={() => setMenuMobileOpen(!menuMobileOpen)} className="cursor-pointer md:hidden">
                    <TextAlignJustify className="text-amber-300 scale-200" />
                </div>
                
               
                 <div onClick={() => setMenuMobileOpen(!menuMobileOpen)} className={`bg-black/30  z-30 ${menuMobileOpen ? 'fixed top-0 left-0 right-0 h-screen' : 'hidden' }`}></div>
                <div className={`bg-black/90 text-2xl font-bold border-l-2 border-amber-300 flex flex-col gap-13 absolute top-0 right-0 h-dvh z-40 transition-normal duration-100 ${menuMobileOpen ? 'w-[320px] p-10' : 'w-0 p-0 opacity-0'}`}>
                    <Link href={'/'} onClick={() => setMenuMobileOpen(!menuMobileOpen)} className="text-3xl text-white font-notosans font-bold cursor-pointer">
                        VisagismWeb
                    </Link>
                    
                    <Link 
                    href="/"
                    onClick={() => handleClickClose()} className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-110">
                        <House className="scale-115" />  
                        
                        Home
                    </Link>

                    <Link 
                    href="/services"
                    onClick={() => handleClickClose()} className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-110">
                        <Sprout className="scale-115" /> 
                        
                        Services
                    </Link>

                    <Link 
                    href="/gallery"
                    onClick={() => handleClickClose()} className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-110">
                        <Camera className="scale-115" /> 
                        
                        Gallery
                    </Link>

                    <Link 
                    href="/about"
                    onClick={() => handleClickClose()} className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-110">
                        <Info className="scale-115" /> 
                        
                        About
                    </Link>

                    <Link 
                    href="/contact"
                    onClick={() => handleClickClose()} className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-110">
                        <Calendar className="scale-115" /> 
                        
                        Contact
                    </Link>

                    <span 
                    onClick={() => setMenuMobileOpen(!menuMobileOpen)}
                    className="bottom-15 absolute flex items-center gap-6">
                        <LogOut className="scale-115" />
                        <p className="font-sans font-medium text-[18px]">Log out</p>
                    </span>
                </div>
                
            </nav>
            
        </section>
    )
}