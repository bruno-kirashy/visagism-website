'use client'
import { Header } from "@/app/Components/Header";
import { servicesList } from "../data/servicesList";




const Services = () => {
    return (
        
        <section className="w-full overflow-y-hidden pt-[69.5px] bg-black font-google-sans-code font-light flex flex-col items-center justify-center">
            <Header />
            
            <section className="md:max-w-7xl md:mx-4 mx-2 mt-5">
                <div className="w-full md:h-[500px] h-auto rounded-md overflow-hidden mb-10 relative cursor-pointer">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pointer-events-none z-40"></div>
                    <img className="w-full h-full object-cover hover:scale-115 z-30 transition-all duration-1000"
                    src="/Images/ServicesBG.png" 
                    alt=""
                    />
                </div>

                <p className="w-full text-center px-2 text-md md:text-2xl text-white/80">
                    At Studio Visage, we believe your hair is an extension of your personality.
                     Our expert designers combine art with solutions to create looks that are uniquely yours.
                      Experience the difference of personalized visagism and exceptional hair care.
                </p>
            </section>

            <section className="md:max-w-7xl w-full px-4 pt-10">
                <h1 className="text-white/80 md:text-2xl  text-md mb-10">
                    Our Services
                </h1>

                <ul className="flex flex-wrap items-center justify-center md:justify-between px-2">
                    { servicesList.map((item, index)=>(
                        <li key={index}>
                            <div className="w-[310px] overflow-hidden rounded-md opacity-75 cursor-pointer hover:opacity-100 hover:scale-105 transition-all duration-300">
                                <img className="max-w-2xl h-80 " 
                                    src={item.image} alt={item.title} />
                            </div>
                            <h1 className="w-[310px] mt-3 text-center md:text-start">{item.title}</h1>
                            <p className="w-[310px] text-gray-500 mt-1 text-center md:text-start">{item.description}</p>
                        </li>

                    ))}
                </ul>
            </section>

            <section className="md:max-w-7xl w-full px-2 pt-10">
                <h1 className="md:text-2xl  text-md">Featured Stylist</h1>

                
            </section>
            
        </section>
    )
}

export default Services;