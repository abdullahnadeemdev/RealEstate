import { homeInterior } from "../../../assets/images";
import Button from "../../shared/Button";

const Hero = () => {
  return (
    <div className="relative w-full h-[92vh] bg-black overflow-hidden">
      <img
        src={homeInterior}
        alt="homePic"
        className="absolute inset-0 h-full w-full object-cover z-0 opacity-70"
      />

      <div className="relative z-10  h-full max-w-360 mx-auto flex items-center px-6 md:px-15 text-center md:text-start">
        <div className="max-w-150 text-white">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
            Building Residential homes, <br />
            House Pioneers since 1983
          </h1>
          <p className="mt-5 text-sm lg:mr-0 lg:text-base xl:text-lg opacity-90">
            Delivering quality residential and commercial construction services
            with a commitment to excellence and client satisfaction.
          </p>
          <div className="mt-5 flex gap-4 justify-center md:justify-start">
            <Button className={"bg-secondary"}>Our Services</Button>
            <Button variant="outlined">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
