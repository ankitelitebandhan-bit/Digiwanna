import React from "react";
import { GiCrystalGrowth, GiPositionMarker, GiRocket } from "react-icons/gi";
import { AiFillCheckCircle } from "react-icons/ai";

const values = [
  {
    title: "Results-Driven",
    description:
      "We focus on delivering measurable outcomes that drive real business growth.",
    icon: <GiCrystalGrowth size={60} color="#4A90E2" />,
  },
  {
    title: "Client Centric",
    description:
      "We prioritize your success. We build lasting partnerships, not just projects.",
    icon: <GiPositionMarker size={60} color="#50C878" />,
  },
  {
    title: "Innovation First",
    description:
      "We stay ahead of trends and leverage cutting-edge technologies.",
    icon: <GiRocket size={60} color="#FF6347" />,
  },
  {
    title: "Quality Assured",
    description: "Every project undergoes rigorous testing and quality checks.",
    icon: <AiFillCheckCircle size={60} color="#FFD700" />,
  },
];

export default function CoreValue() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((val, index) => (
        <div
          key={index}
          className=" rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out bg-white hover:border-blue-500 border-2"
        >
          <div className="flex italic items-center justify-center mb-4">
            {val.icon}
          </div>
          <h3 className="font-semibold italic text-2xl text-center text-gray-800 mb-2">
            {val.title}
          </h3>
          <p className="text-gray-600 text-lg italic text-center">
            {val.description}
          </p>
        </div>
      ))}
    </div>
  );
}
