import React from "react";
import Button from "../../shared/Button";
import { projectMange } from "../../../assets/images";

const array = [
  {
    title: "New Builds",
    desc: "We deliver high-quality, energy-efficient new homes built to meet modern standards and tailored to client needs.",
    img: projectMange,
  },
  {
    title: "Project Management",
    desc: "We oversee every stage of your project with precision, keeping it on time, within budget, and to the highest standard.",
    img: projectMange,
  },
  {
    title: "Commercial Fit Out",
    desc: "We transform commercial spaces into functional, modern environments that reflect your brand and maximise productivity.",
    img: projectMange,
  },
  {
    title: "Renovations",
    desc: "From minor upgrades to full property transformations, our renovation services breathe new life into your spaces.",
    img: projectMange,
  },
  {
    title: "Maintenance",
    desc: "Our reliable maintenance team ensures your property remains safe, operational, and looking its best all year round.",
    img: projectMange,
  },
  {
    title: "Extensions",
    desc: "Whether you’re adding space for a growing family or enhancing property value, we create seamless, well-crafted extensions.",
    img: projectMange,
  },
];

const Services = () => {
  return (
    <div className="bg-greyLight/10 mt-10 px-6 md:px-15">
      <div className="pt-15 text-center">
        <p className="font-semibold text-main text-sm md:text-base">
          - Construction Services
        </p>
        <p className="font-semibold text-xl md:text-2xl lg:text-4xl my-3">
          Construction Services
        </p>
        <p className="text-greyLight text-sm md:text-base max-w-110 mx-auto">
          We offer a wide range of expert construction solutions spanning across
          multiple sectors.
        </p>

        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 pb-10">
          {array.map((item) => {
            return (
              <div className="flex flex-col bg-secondary w-fit rounded-xl gap-2 text-textLight  shadow-sm">
                <div className="flex-1 max-w-110">
                  <img
                    src={item.img}
                    alt=""
                    className="object-cover w-full h-full rounded-t-xl"
                  />
                </div>
                <div className="flex-1 max-w-110 text-start p-2 flex flex-col">
                  <p className="font-semibold text-sm xs:text-base md:text-lg">
                    {item.title}
                  </p>
                  <p className=" text-xs md:text-sm my-2">{item.desc}</p>
                  <Button className="self-center">Learn More</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
