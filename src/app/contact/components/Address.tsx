import { ReactNode } from "react";

type componentComponentProp = {
  component: ReactNode;
  addressElement: string;
  addressElementSub: string;
};

export const Address = ({
  component,
  addressElement,
  addressElementSub,
}: componentComponentProp) => {
  return (
    <div className="flex items-center mb-5">
      <span className="bg-[#39390f] text-[#f8f85c] p-4 rounded">
        {component}
      </span>
      <div className="ml-5">
        <h3>{addressElement}</h3>
        <p>{addressElementSub}</p>
      </div>
    </div>
  );
};
