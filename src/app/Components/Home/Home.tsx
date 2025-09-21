export const Home = () => {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center overflow-x-auto">
            <div className="w-full h-full flex justify-center items-center flex-col relative overflow-x-hidden">
                <div className="bg-black/40 bg-gradient-to-t from-black/85 to-transparent w-full h-full absolute z-10"></div>
                <img
                className="w-full h-full absolute z-0 object-cover object-top"
                src="/Images/Home.jpg" alt="" 
                />
                
                <h1 className="md:text-8xl text-4xl font-bold text-center md:m-10 m-5 mx-2 z-20 cursor-pointer">
                    Experience Timeless Beauty
                </h1>
                <p className="md:w-5xl md:text-2xl w-auto mx-2 text-center  z-20 cursor-pointer">
                    Discover a sanctuary where artistry meets rejuvenation. We craft bespoke experiences designed to enhance your natural radiance and leave you feeling uniquely you.
                </p>
                <div className="flex md:flex-row flex-col gap-6 m-15 z-20">
                    <button className="md:text-[19px] font-extrabold px-5 py-4 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-300 rounded-md text-black  hover:scale-105 transition-all duration-500">
                        Explore Services
                    </button>
                    <button className="md:text-[19px] border-2 border-white rounded-md font-extrabold px-5 py-4 cursor-pointer text-white  hover:scale-105 transition-all duration-500">
                        Book a Consultation
                    </button>
                </div>
            </div>
        </section>
    )
}