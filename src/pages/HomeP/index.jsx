import React from "react";
import Hero from "../../components/Home/Hero";
import FloatingDiv from "../../components/Home/FloatingDiv/FloatingDiv";
import Values from "../../components/Home/Values";

const index = () => {
  return (
    <div className="max-w-360! h-1000">
      <Hero />
      <FloatingDiv />
      <Values />
    </div>
  );
};

export default index;
