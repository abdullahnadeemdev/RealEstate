import React from "react";
import Hero from "../../components/Home/Hero";
import FloatingDiv from "../../components/Home/FloatingDiv/FloatingDiv";
import Values from "../../components/Home/Values";
import Services from "../../components/Home/Services";
import CTA from "../../components/Home/CTA";
import WhyUs from "../../components/Home/WhyUS";

const index = () => {
  return (
    <div className="">
      <Hero />
      <FloatingDiv />
      <Values />
      <Services />
      <CTA />
      <WhyUs />
    </div>
  );
};

export default index;
