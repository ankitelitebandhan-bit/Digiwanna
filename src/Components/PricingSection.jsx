import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingCard = ({ title, price, features, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-6 border rounded-lg shadow-lg bg-white transition-all duration-300 transform cursor-pointer flex flex-col justify-between
      ${
        isSelected ? "scale-110 z-20" : "scale-100 z-10"
      } hover:scale-105 hover:shadow-2xl`}
    >
      <div>
        <h3
          className={`text-2xl font-bold ${
            isSelected ? "text-blue-600" : "text-gray-800"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-xl mt-4 ${
            isSelected ? "text-blue-600" : "text-gray-800"
          }`}
        >
          {typeof price === "number" ? `Rs.${price}` : price}
        </p>
        <ul className="mt-4 space-y-3 text-left">
          {features?.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <FaCheckCircle className="mr-2 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`mt-6 px-4 py-2 rounded-md font-semibold transition duration-300 ${
          isSelected
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        {title === "Custom" ? "Contact Us" : "Get Started"}
      </button>
    </div>
  );
};

const pricingData = [
  {
    title: "Basic",
    price: 49999,
    features: [
      "Responsive design",
      "5 Pages",
      "Basic SEO",
      "Contact Form",
      "1 Month Support",
    ],
  },
  {
    title: "Standard",
    price: 74999,
    features: [
      "Custom Design",
      "10 Pages",
      "Advanced SEO",
      "Analytics",
      "2 Months Support",
    ],
  },
  {
    title: "Premium",
    price: 129999,
    features: [
      "Custom Web App",
      "15 Pages",
      "Authentication",
      "Payment Integration",
      "Admin Panel",
    ],
  },
  {
    title: "Custom",
    price: "Custom",
    features: ["Unlimited Features", "Dedicated Support", "Scalable Systems"],
  },
];

const PricingSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl italic underline decoration  decoration-indigo-600 decoration-2  underline-offset-8 font-bold text-center mb-10">
          Our Pricing
        </h2>
        <div className="grid text-center italic grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((card, index) => (
            <PricingCard
              key={index}
              title={card.title}
              price={card.price}
              features={card.features}
              isSelected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
