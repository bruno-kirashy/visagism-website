"use client";
import { FormItem, Imput, Label } from "./components/InputForm";
import { Address } from "./components/Address";
import { Mail, MapPinHouse, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      className={`w-full overflow-y-hidden mt-[4px]  pt-[69.5px] bg-black font-google-sans-code font-light`}
    >
      <div className="max-w-6xl md:m-auto mx-2 px-2">
        <h1 className="font-google-sans-code text-2xl md:mt-10 mt-5">
          Contact Us
        </h1>
        <p className="pl-2 text-gray-400 mt-2">
          We'd love to hear from you. Please reach out with any questions or to
          schedule an appointment.
        </p>

        <form className="max-w-3xl">
          <FormItem>
            <Label htmlFor="name">Name</Label>
            <Imput type="text" placeholder="Your Name" id="name" />
          </FormItem>

          <FormItem>
            <Label htmlFor="email">Email</Label>
            <Imput type="email" placeholder="email@company.com" id="email" />
          </FormItem>

          <FormItem>
            <Label htmlFor="phone">Phone</Label>
            <Imput type="text" placeholder="(99) 9 9999-9999" id="phone" />
          </FormItem>

          <Label htmlFor="message">Message</Label>

          <textarea
            className="text-[18px] font-bold bg-[#1f1f05] px-4 py-3 ml-2 rounded-2xl focus:outline-none mb-2 flex-1 text-white w-[99%]"
            rows={5}
            name=""
            id="message"
          ></textarea>
          <div className="w-full flex justify-end">
            <div className="ml-2 my-5 px-5 py-3 w-fit bg-gradient-to-r cursor-pointer transition-all duration-500 hover:scale-105 from-amber-300 to-amber-500 shadow-2xl shadow-amber-300/30 text-black font-bold rounded-md">
              Send Mensage
            </div>
          </div>
        </form>
      </div>
      <address className="max-w-6xl md:m-auto mx-2 grid px-2">
        <Address
          component={<Phone />}
          addressElement="Phone"
          addressElementSub="+1+555-123-4567"
        />
        <Address
          component={<Mail />}
          addressElement="Email"
          addressElementSub="info@visagismsalon.com"
        />
        <Address
          component={<MapPinHouse />}
          addressElement="Address"
          addressElementSub="123 Fashion Avenue, Suite 456, New York, NY 10001"
        />
      </address>
    </section>
  );
};

export default Contact;
