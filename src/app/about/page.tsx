"use client";
import { OurTeam } from "./components/OurTeam";

const About = () => {
  return (
    <section className="w-full overflow-y-hidden pt-[69.5px] bg-black font-google-sans-code font-light">
      <div className="max-w-6xl md:m-auto mx-2">
        <div className="w-[100%] m-auto md:h-80 h-60 overflow-hidden object-center rounded-2xl md:my-10 my-8 cursor-pointer relative">
          <div className="h-full w-full z-30 absolute pointer-events-none bg-gradient-to-t from-black/70 to-transparent"></div>
          <img
            className="w-full h-full object-cover scale-120 hover:scale-140 transition-all duration-1000 z-20"
            src={"/Images/salon.jpg"}
            alt="Salão de Beleza"
          />
        </div>

        <p className="md:text-[17px] text-[17px] md:text-start text-center my-4 text-gray-400">
          At Visagism Salon, we believe that beauty is not just about
          appearance, but about expressing your unique personality and style.
          Our philosophy centers on understanding your individual features,
          lifestyle, and aspirations to create a look that truly reflects who
          you are. We combine the art of visagism with expert hair styling to
          enhance your natural beauty and boost your confidence.
        </p>

        <OurTeam />
      </div>
    </section>
  );
};
export default About;
