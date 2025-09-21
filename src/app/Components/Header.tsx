export const Header = () => {
    return (
        <section className="w-full py-3 px-40 bg-[#1b1b1b] fixed top-0 border-b-4 border-[#e1e1e178] flex items-center justify-between">
            <div className="text-2xl font-sans">
                VisagismWeb
            </div>
            <nav className="flex gap-8 justify-center items-center text-[17px]">
                <span className="cursor-pointer transition-all duration-300 hover:scale-110">Home</span>
                <span className="cursor-pointer transition-all duration-300 hover:scale-110">Services</span>
                <span className="cursor-pointer transition-all duration-300 hover:scale-110">Gallery</span>
                <span className="cursor-pointer transition-all duration-300 hover:scale-110">About</span>
                <span className="cursor-pointer transition-all duration-300 hover:scale-110">Contact</span>
                <button className="px-4 py-2 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-300 rounded-md text-black font-bold hover:scale-105 transition-all duration-300">
                    Book Now
                </button>
            </nav>
        </section>
    )
}