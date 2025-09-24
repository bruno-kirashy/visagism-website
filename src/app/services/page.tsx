'use client'
import { Header } from "@/app/Components/Header";
import { OurServices } from "./components/OurServices";
import { FeaturedStylist } from "./components/FeaturedStylist";
import { BannerService } from "./components/BannerService";
import { ClientTestimonais } from "./components/ClientTestimonais";
import { Footer } from "../Components/Footer";

const Services = () => {
    return (
        
        <section className="w-full overflow-y-hidden pt-[69.5px] bg-black font-google-sans-code font-light flex flex-col items-center justify-center">
            <Header />
            
            <BannerService/>

            <OurServices/>
        
            <FeaturedStylist/>
            
            <ClientTestimonais/>

            <Footer/>
        </section>
    )
}

export default Services;