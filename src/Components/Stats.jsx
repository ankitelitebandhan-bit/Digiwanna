import React from "react";

const stats = [
  { label: "Projects Delivered", value: "150+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Team Members", value: "15+" },
  { label: "Years in Business", value: "5+" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2   gap-16 mt-10">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-4xl italic font-bold text-blue-700">
            {stat.value}
          </p>
          <p className="text-gray-800 text-lg italic font-bold">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
