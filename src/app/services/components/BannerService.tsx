export const BannerService = () => {
    return (
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
    )
}