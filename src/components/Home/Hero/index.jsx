import { homeInterior } from "../../../assets/images";

const Hero = () => {
  return (
    <div className="max-h-screen bg-black">
      <div className="h-screen opacity-80">
        <img
          src={homeInterior}
          alt="homePic"
          className="object-cover h-full w-full absolute  z-0"
        />

        <div className="relative z-10 bg-green-400 max-w-[60%]">
          <p className="text-text-prim text-4xl text-wrap">
            Building Residencial homes,Since 1983
          </p>
          <p></p>
          <div>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
