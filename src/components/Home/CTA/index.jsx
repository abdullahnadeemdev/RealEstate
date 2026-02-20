import React from "react";
import Button from "../../shared/Button";

const CTA = () => {
  return (
    <div className="bg-text-prim text-textLight py-20 px-6 text-center flex flex-col items-center justify-center">
      <p className="text-4xl font-semibold text-secondary">
        {" "}
        Get in touch today
      </p>
      <p className="pt-2 ">
        We are here to assist you with all your trade service needs.
      </p>
      <Button>Click Here</Button>
    </div>
  );
};

export default CTA;
