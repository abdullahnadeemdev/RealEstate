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
    <div className="bg-greyLight/10 mt-20 px-6 md:px-15">
      <div className="pt-15 text-center max-w-360 mx-auto">
        <p className="font-semibold text-secondary text-sm md:text-base">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 pb-20">
          {array.map((item) => {
            return (
              <div key={item.title} className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 text-start p-5 flex flex-col">
                  <p className="font-bold text-text-prim text-base md:text-lg mb-2">
                    {item.title}
                  </p>
                  <p className="text-greyLight text-xs md:text-sm leading-relaxed flex-1">{item.desc}</p>
                  <Button className="self-start mt-4 bg-main! hover:bg-secondary!">Learn More</Button>
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
