import React from "react";
import { homeOutside } from "../../../assets/images";

const HeroAbout = () => {
  return (
    <div>
      <div className="h-[50vh] relative ">
        <div className="bg-black/65 absolute flex items-center justify-center font-semibold z-10 h-[50vh] w-full">
          <p className="text-textLight text-6xl ">About Us </p>
        </div>
        <img
          src={homeOutside}
          alt=""
          className="opacity-700 bg-black object-cover relative z-1 w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroAbout;
