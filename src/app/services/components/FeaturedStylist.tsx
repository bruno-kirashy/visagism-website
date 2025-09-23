import { featuredStylistData } from "@/app/data/featuredStylist";
import Link from "next/link";

export const FeaturedStylist = () => {
    return (
        <section className="md:max-w-7xl w-full px-2 pt-10 flex flex-col">
            <h1 className="md:text-2xl  text-[25px] md:text-start text-center">Featured Stylist</h1>
                { featuredStylistData.map((item, index)=>(
                    <div 
                    key={index}
                    className="flex items-center mt-10 mb-10 md:flex-row flex-col px-2">
                        <div className="flex md:items-start items-center flex-col gap-4" >
                            <span className="text-gray-600 md:text-start text-start cursor-pointer">
                                {item.position}
                            </span>
                            <h2 className="md:text-start text-center">
                                {item.name}
                            </h2>
                            <p className="text-gray-300 pr-5 md:text-start text-center"> 
                                {item.description}
                            </p>
                            <Link 
                            href={"/gallery"}
                            className="w-fit  md:m-0 m-8 md:p-2 p-5 md:text-[15px] text-[18px] bg-gray-500/30 rounded-md cursor-pointer transition-all duration-500 hover:scale-105">
                                View Portfolio
                            </Link >
                        </div>
                        <div className="max-w-96 aspect-video rounded-md border border-amber-300/50 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105">
                            <img
                            className="opacity-90 hover:opacity-100"
                            src={item.img} 
                            alt={item.name} />
                        </div>
                    </div>   
                ))
                }
        </section>
    )
}