import React from "react";
import Hero from "../../components/Home/Hero";
import FloatingDiv from "../../components/Home/FloatingDiv/FloatingDiv";
import Values from "../../components/Home/Values";
import Services from "../../components/Home/Services";
import CTA from "../../components/Home/CTA";
import WhyUs from "../../components/Home/WhyUS";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="pb-16">
        <FloatingDiv />
      </div>
      <Values />
      <Services />
      <WhyUs />
      <CTA />
    </div>
  );
};

export default Home;
