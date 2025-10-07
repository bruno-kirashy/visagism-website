import { ComponentProps } from "react";

export const FormItem = ({ ...props }: ComponentProps<"div">) => {
  return <div className="w-full flex flex-col" {...props} />;
};

export const Label = ({ ...props }: ComponentProps<"label">) => {
  return <label className="py-1 text-[18px] font-light mt-2 flex" {...props} />;
};

export const Imput = ({ ...props }: ComponentProps<"input">) => {
  return (
    <input
      required
      className={`text-[15px] font-mono bg-[#1f1f05] px-4 py-3 ml-2 rounded-2xl focus:outline-none mb-2 flex-1 text-white w-full}`}
      type="text"
      {...props}
    />
  );
};
