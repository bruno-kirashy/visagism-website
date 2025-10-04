"use client";
import { OurServices } from "./components/OurServices";
import { FeaturedStylist } from "./components/FeaturedStylist";
import { BannerService } from "./components/BannerService";
import { ClientTestimonais } from "./components/ClientTestimonais";

const Services = () => {
  return (
    <section className="w-full overflow-y-hidden pt-[69.5px] bg-black font-google-sans-code font-light flex flex-col items-center justify-center">
      <BannerService />

      <OurServices />

      <FeaturedStylist />

      <ClientTestimonais />
    </section>
  );
};

export default Services;
