import { servicesList } from "../../data/servicesList";


export const OurServices = () => {
    return (
            <section className="md:max-w-7xl w-full px-4 pt-10">
                <h1 className="text-white/80 md:text-2xl  text-md mb-10  text-[25px] md:text-start text-center">
                    Our Services
                </h1>

                <ul className="flex flex-wrap items-center justify-center md:justify-between px-2">
                    { servicesList.map((item, index)=>(
                        <li 
                        key={index}
                        className="md:mb-0 mb-10"
                        >
                            <div className="w-[310px] overflow-hidden rounded-md opacity-75 cursor-pointer shadow-xl   hover:shadow-white/10 hover:opacity-100 hover:scale-105 transition-all duration-300">
                                <img className="max-w-2xl h-80 " 
                                    src={item.image} alt={item.title} />
                            </div>
                            <h1 className="w-[310px] mt-3 text-center md:text-start">{item.title}</h1>
                            <p className="w-[310px] text-gray-500 mt-1 text-center md:text-start">{item.description}</p>
                        </li>

                    ))}
                </ul>
            </section>
    )
}