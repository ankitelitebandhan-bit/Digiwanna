import React from "react";
import {
  FaClock,
  FaShieldAlt,
  FaTools,
  FaHeadset,
  FaCalendarCheck,
  FaFileAlt,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { Link, Links } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaClock size={30} />,
      title: "Fast Delivery",
      description: "We deliver high-quality projects on time, every time.",
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: "Quality Assured",
      description: "Rigorous testing and quality checks before launch.",
    },
    {
      icon: <FaTools size={30} />,
      title: "Latest Technology",
      description: "We use cutting-edge tools and frameworks.",
    },
    {
      icon: <FaHeadset size={30} />,
      title: "Ongoing Support",
      description: "Comprehensive support even after project completion.",
    },
  ];

  const processSteps = [
    {
      step: "Step 01",
      title: "Discovery Call",
      icon: <FaCalendarCheck size={28} />,
      description:
        "We start with a detailed consultation to understand your goals, requirements, and vision.",
    },
    {
      step: "Step 02",
      title: "Proposal & Planning",
      icon: <FaFileAlt size={28} />,
      description:
        "We create a detailed proposal with timeline, scope, and pricing tailored to your needs.",
    },
    {
      step: "Step 03",
      title: "Design & Development",
      icon: <FaCode size={28} />,
      description:
        "Our team works closely with you through design iterations and development phases.",
    },
    {
      step: "Step 04",
      title: "Launch & Support",
      icon: <FaRocket size={28} />,
      description:
        "We ensure a smooth launch and provide ongoing support to keep your project running perfectly.",
    },
  ];

  return (
    <section className="py-16 bg-white text-center px-4 md:px-8 italic ">
      {/* Why Choose DigiWanna */}
      <h2 className="text-4xl italic underline decoration  decoration-indigo-600 decoration-2  underline-offset-8 font-bold text-center mb-10">
        Why Choose DigiWanna?
      </h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        We're committed to delivering exceptional results that drive real
        business growth.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-sm text-center"
          >
            <div className="text-blue-600 mb-4 mx-auto flex justify-center ">
              {item.icon}
            </div>
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-lg text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Our Process */}
      <h2 className="text-3xl font-semibold mb-4">Our Process</h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        We follow a proven methodology to ensure your project is delivered
        successfully.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {processSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-black text-white p-4 rounded-full mb-4">
              {step.icon}
            </div>
            <p className="font-semibold text-sm text-gray-700 mb-1">
              {step.step}
            </p>
            <h4 className="font-bold text-lg mb-2">{step.title}</h4>
            <p className="text-lg font-medium text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-10 px-6 rounded-lg shadow-inner max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2">Ready to Get Started?</h3>
        <p className="text-gray-600 mb-6">
          Let’s discuss your project and find the perfect solution for your
          needs. Get in touch for a free consultation and detailed proposal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/contact">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition">
              Start Your Project
            </button>
          </Link>

          <a href="https://api.whatsapp.com/send/?phone=917303945449&text&type=phone_number&app_absent=0">
            <button className="bg-white border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-200 transition">
              Schedule a Call
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
