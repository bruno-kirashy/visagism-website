export const Home = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-8xl font-bold m-10">Experience Timeless Beauty</h1>
            <p className="w-5xl text-2xl text-center">
                Discover a sanctuary where artistry meets rejuvenation. We craft bespoke experiences designed to enhance your natural radiance and leave you feeling uniquely you.
            </p>
            <div className="flex gap-6 m-15">
                <button className="text-[19px] font-extrabold px-5 py-4 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-300 rounded-md text-black  hover:scale-105 transition-all duration-500">
                    Explore Services
                </button>
                <button className="text-[19px] border-2 border-white rounded-md font-extrabold px-5 py-4 cursor-pointer text-white  hover:scale-105 transition-all duration-500">
                    Book a Consultation
                </button>
            </div>
        </section>
    )
}