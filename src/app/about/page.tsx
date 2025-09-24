'use client'
import { Header } from "@/app/Components/Header";
import { Footer } from "../Components/Footer";

const About = () => {
    return (
        <section className="w-screen h-full pt-[69.5px] bg-black font-google-sans-code font-light">
            <Header />
            <h1 className="p-5 font-google-sans-code">About em desenvolvimento...</h1>

            <Footer/>
        </section>
    )
}
export default About;