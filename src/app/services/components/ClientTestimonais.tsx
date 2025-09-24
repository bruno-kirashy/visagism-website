import { clientTestimonais } from "../../data/clientTestimonais";
import {ThumbsUp, ThumbsDown, Star} from "lucide-react";

export const ClientTestimonais = () => {
    return (
        <section className="md:max-w-7xl w-full px-4 pt-10">
            <h1 className="md:text-2xl  text-[25px] md:text-start text-center">
                Client Testimonais
            </h1>
            
            { clientTestimonais.map((item, index) => (
                
                <div
                key={index}
                    >
                    <div className="flex items-center my-5">
                        <img
                        className="w-10 h-10 rounded-4xl cursor-pointer mr-4"
                        src={item.img} alt={item.name} />
                        
                        <div>
                            <h5 className="cursor-pointer">
                                {item.name}
                            </h5>
                            <span className="text-[12px] text-gray-600 ">
                                {item.date}  
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                        <div className="flex gap-2">
                        {Array(item.stars).fill(null).map((_:any,index:number) => (
                            <span key={index}>
                                <Star className="w-4 h-4 md:w-6 md:h-6 text-white bg-white bg-clip-text cursor-pointer" />
                            </span>
                        ))}
                        </div>
                        <p className="text-gray-300 max-w-7xl md:text-[16px] text-[13px]">
                            {item.text}
                        </p>
                    </div>
                    <div className="flex gap-5 mb-10">
                        <ThumbsUp className="cursor-pointer" />  <ThumbsDown className="cursor-pointer"/>
                    </div>
                </div>
            ))}
        </section>
    )
}