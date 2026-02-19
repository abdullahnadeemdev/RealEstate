import React from "react";
import Button from "../../shared/Button";

const FloatingDiv = () => {
  return (
    <div className="absolute z-10 -bottom-50 md:-bottom-40 px-6 lg:px-0 mx-auto text-white h-60 flex flex-col md:flex-row lg:w-[90vw] xl:w-[70vw] max-w-300 left-0 right-0 rounded-lg shadow-none md:shadow-2xl shadow-black/60">
      <div className="bg-text-prim p-6 flex-1 flex flex-col justify-around rounded-lg md:rounded-r-none ">
        <p className=" text-xl md:text-2xl text-main font-semibold">
          Book an apointment
        </p>

        <p className="my-7 text-xs md:text-base">
          Reach out to us today to discuss how we can turn your vision into
          reality.
        </p>

        <span className="text-xs md:text-sm lg:text-lg text-textLight font-semibold flex flex-col md:flex-row text-center md:text-start">
          <p className="mr-6 text-nowrap">0300-8432834</p>
          <p className="ml-0 sm:ml-6 ">info@adcoconstruction.co.uk</p>
        </span>
      </div>

      <div className="bg-textLight p-6 text-text-prim flex-1 rounded-lg md:rounded-l-none shadow-2xl shadow-black/60 md:shadow-none">
        <div className="flex items-center justify-between">
          <p className=" text-xl md:text-2xl text-main font-semibold">
            Email Info
          </p>

          <Button className="text-xs md:text-sm -translate-y-2.5">
            Submit
          </Button>
        </div>

        <span className="flex flex-col mt-2 text-xs md:text-sm">
          <label>Enter Full Name:</label>
          <input
            type="text"
            placeholder="Name"
            className="border p-1 rounded-lg w-full"
          />
        </span>

        <span className="grid grid-cols-2 gap-6 w-full text-xs md:text-sm">
          <span className="flex flex-col mt-2">
            <label>Email Address:</label>
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded-lg w-full"
            />
          </span>
          <span className="flex flex-col mt-2">
            <label>Phone Number:</label>
            <input
              type="text"
              placeholder="PhoneNumber"
              className="border p-2 rounded-lg w-full "
            />
          </span>
        </span>
      </div>
    </div>
  );
};

export default FloatingDiv;
