import { TickBox } from "../../../assets/icons";
import { homeOutside } from "../../../assets/images";
import Button from "../../shared/Button";

const Values = () => {
  return (
    <div className="mt-100 md:mt-75 px-6 md:px-15  flex flex-col-reverse md:flex-row justify-between gap-10">
      <div className="flex-1 text-center md:text-start">
        <p className="font-semibold text-main text-xs md:text-sm">
          - WHO ARE WE
        </p>
        <p className="font-semibold text-xl md:text-2xl lg:text-4xl my-3">
          Your Local Specialists
        </p>

        <p className="text-greyLight text-xs md:text-sm my-5">
          We provide expert construction services focusing on quality,
          reliability, and customer satisfaction. Our skilled team ensures that
          every project is completed to the highest standard while honouring the
          programme and delivering excellence.
        </p>

        <div className="flex flex-col xs:flex-row justify-around md:justify-start xs:gap-6 text-nowrap xl:gap-20 md:mr-5 text-sm">
          <span>
            <span className="flex mb-1 gap-2 text-greyLight">
              <TickBox />
              <p>Expert craftsmanship</p>
            </span>

            <span className="flex gap-2 mb-1 text-greyLight">
              <TickBox />
              <p>Transparent pricing</p>
            </span>
            <span className="flex gap-2 mb-1 text-greyLight">
              <TickBox />
              <p>Fully insured</p>
            </span>
          </span>

          <span>
            <span className="flex gap-2 mb-1 text-greyLight">
              <TickBox />
              <p>Fully qualified trades</p>
            </span>
            <span className="flex gap-2 mb-1 text-greyLight">
              <TickBox />
              <p>Emergency call-outs</p>
            </span>
            <span className="flex gap-2  text-greyLight">
              <TickBox />
              <p>On-time delivery</p>
            </span>
          </span>
        </div>

        <div className="border border-greyLight mt-5"></div>

        <Button>Get In Touch</Button>
      </div>
      {/* image */}
      <div className="flex-1 relative p-4">
        <div
          className="flex-1 bg-secondary absolute top-5 left-9 h-[90%] w-[90%] xs:h-[95%] xs:w-[95%] -z-10
        "
        ></div>

        <img src={homeOutside} alt="" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default Values;
