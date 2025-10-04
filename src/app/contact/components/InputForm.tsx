import { ComponentProps, JSX } from "react";

type InputForm = ComponentProps<"input"> & {
  label?: string;
};

export const InputForm = ({ label, id, ...props }: InputForm) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={id} className="py-1 text-[18px] font-light mt-2 flex">
        {label}
      </label>
      <input
        className={`text-[15px] font-mono bg-gray-600 px-4 py-3 ml-2 rounded-2xl focus:outline-none mb-2 flex-1 text-black w-full}`}
        id={id}
        {...props}
      />
    </div>
  );
};
