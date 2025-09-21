type navSpanSelectProp = {
    navSpanSelect: (navSelect:string) => void;
}

export const Header = ({navSpanSelect}:navSpanSelectProp) => {
    return (
        <section className="w-full py-3 md:px-40 px-5 bg-[#1b1b1b] fixed z-50 top-0 border-b-4 border-[#e1e1e178] flex items-center justify-between">
            <div className="text-2xl font-sans cursor-pointer">
                VisagismWeb
            </div>
            <nav className="flex gap-8 justify-center items-center text-[17px]">
                <div className="md:flex gap-6 hidden">
                    <span onClick={() => navSpanSelect('home')} className="cursor-pointer transition-all duration-300 hover:scale-110">Home</span>
                    <span onClick={() => navSpanSelect('services')} className="cursor-pointer transition-all duration-300 hover:scale-110">Services</span>
                    <span onClick={() => navSpanSelect('gallery')} className="cursor-pointer transition-all duration-300 hover:scale-110">Gallery</span>
                    <span onClick={() => navSpanSelect('about')} className="cursor-pointer transition-all duration-300 hover:scale-110">About</span>
                    <span onClick={() => navSpanSelect('contact')} className="cursor-pointer transition-all duration-300 hover:scale-110">Contact</span>
                </div>
                
                <button className="px-4 py-2 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-300 rounded-md text-black font-bold hover:scale-105 transition-all duration-300">
                    Book Now
                </button>
            </nav>
        </section>
    )
}