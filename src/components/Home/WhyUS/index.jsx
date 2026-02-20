import { homeInterior } from "../../../assets/images";
import Button from "../../shared/Button";
import { TickBox } from "../../../assets/icons";

const WhyUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-6 md:px-15 max-w-360 mx-auto py-20 gap-6">
      <div className="flex-1 relative mr-10 ">
        <div className="absolute h-[104%] -z-10 lg:h-[82vh] xl:h-[72vh] w-[99%] bg-light -right-5 max-h-112"></div>
        <img src={homeInterior} alt="" className="object-cover w-full h-full" />
      </div>

      <div className="flex-1 text-center md:text-start">
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

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1">
          {" "}
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
        </div>

        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default WhyUs;
