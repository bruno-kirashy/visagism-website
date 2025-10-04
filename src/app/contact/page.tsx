"use client";
import { InputForm } from "./components/InputForm";

const Contact = () => {
  return (
    <section
      className={`w-screen flex-1 overflow-y-hidden mt-[4px]  pt-[69.5px] bg-black font-google-sans-code font-light`}
    >
      <div className="max-w-6xl md:m-auto mx-2">
        <h1 className="font-google-sans-code text-2xl mt-10">Contact Us</h1>
        <p className="pl-2 text-gray-400 mt-2">
          We'd love to hear from you. Please reach out with any questions or to
          schedule an appointment.
        </p>

        <form className="max-w-3xl" action="">
          <InputForm
            label="Name"
            type="text"
            placeholder="Your Name"
            id="name"
          />

          <InputForm
            label="Email"
            type="email"
            placeholder="email@company.com"
            id="email"
          />

          <InputForm
            label="Phone"
            type="text"
            placeholder="(99) 9 9999-9999"
            id="phone"
          />

          <label
            className="py-1 text-[20px] font-light mt-2 flex"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="text-[18px] font-bold bg-gray-600 px-4 py-3 ml-2 rounded-2xl focus:outline-none mb-2 flex-1 text-black w-[99%]"
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
    </section>
  );
};

export default Contact;
