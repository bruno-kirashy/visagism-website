const about = [
    {name: 'Eduard Carter', description: 'Lead Visagist & Stylist', imgId:1},
    {name: 'Ethan Bennett', description: 'Senior Stylist', imgId:2},
    {name: 'Olivia Hayes', description: 'Color Specialist', imgId:3}
]

type aboutType = {
    name:string,
    description:string
};

export const OurTeam = () => {
    return (
        <div className="w-full h-full mt-10">
                    <h1 
                    className="text-white md:text-2xl  text-md mb-10  text-[25px] md:text-start text-center">
                        Our Team
                    </h1>

                    <div className="w-full md:flex gap-6 grid-cols-1 mb-10">
                        
                        {about.map((item,index)=> (
                            <div 
                            key={index}
                            className="flex-1">
                                <div className="rounded-[100%] overflow-hidden cursor-pointer m-10">
                                    <img 
                                    className="w-full scale-103 opacity-80 shadow-md shadow-amber-50 hover:opacity-100 hover:scale-119 transition-all duration-1000 "
                                    src={`/Images/Our Team/${item.imgId}.jpg`} alt={item.name} />
                                </div>
                                <h1 
                                className="text-2xl text-center my-3 cursor-pointer">
                                    {item.name}
                                </h1>
                                <p 
                                className="text-center my-3 text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))
                        }
                    </div>
                </div>
    )
}