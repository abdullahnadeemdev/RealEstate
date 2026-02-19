import { homeInterior } from "../../../assets/images";
import Button from "../../shared/Button";
import { TickBox } from "../../../assets/icons";

const WhyUs = () => {
  return (
    <div className="flex justify-between px-6 md:px-15 py-20 gap-6">
      <div className="flex-1 relative mr-10 h-[74vh]">
        <div className="absolute -z-10 h-[74vh] w-[99%] bg-secondary -right-5">
          ghy
        </div>
        <img src={homeInterior} alt="" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-secondary">-Why choose us?</p>
        <p className="text-4xl font-semibold text-text-prim my-3">
          Why Choose Mian & Sons Construction
        </p>
        <p className="text-greyLight mb-5">
          ADCO Construction Limited delivers the highest quality workmanship
          with a customer first approach. We offer reliable and affordable
          services with clear communication that ensures every project is
          completed on time, on budget and exceeds expectations.s
        </p>

        <span className="flex text-greyLight mb-3">
          <TickBox />
          <p>High quality workmanship</p>
        </span>
        <span className="flex text-greyLight mb-3">
          <TickBox />
          <p>Customer-focused approach</p>
        </span>
        <span className="flex text-greyLight mb-3">
          <TickBox />
          <p>Fair and transparent pricing</p>
        </span>
        <span className="flex text-greyLight mb-3">
          <TickBox />
          <p>Trusted local reputation</p>
        </span>

        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default WhyUs;
