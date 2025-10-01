'use client'
import { Header } from "@/app/Components/Header";
import { Footer } from "../Components/Footer";
import { galleryData } from "../data/gallery";

const Gallery = () => {
    





    return (
        <section className="w-full h-full pt-[69.5px] bg-black font-google-sans-code font-light flex  flex-col">
            <Header />
            <div className="md:max-w-7xl m-auto w-full px-2 md:pt-10 pt-3">
                <h1 className="md:text-2xl  text-[40px] md:text-start text-center md:mb-10 mb-3">Gallery</h1>
                <div className="flex flex-wrap md:gap-10 gap-4 items-center justify-center mb-10">
                {galleryData.map((item, index)=>(
                    <ul key={index}>
                        <li>
                        <img 
                        className="md:w-70 w-[100%]  cursor-pointer rounded-2xl transition-all duration-300 hover:opacity-85 hover:scale-105"
                        src={item.url} alt="" />
                        </li>
                    </ul>
                ))}
                </div>

                <div>
                    
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Gallery;
