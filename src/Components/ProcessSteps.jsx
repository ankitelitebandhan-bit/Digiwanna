// src/components/ProcessSteps.jsx
import { FaSearch, FaPaintBrush, FaCode, FaBullhorn } from "react-icons/fa";

const ProcessSteps = () => {
  const steps = [
    {
      icon: <FaSearch className="text-4xl text-indigo-600 mx-auto" />,
      title: "Discovery",
      description: "Understanding your goals and requirements",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-indigo-600 mx-auto" />,
      title: "Design",
      description: "Creating intuitive and engaging designs",
    },
    {
      icon: <FaCode className="text-4xl text-indigo-600 mx-auto" />,
      title: "Development",
      description: "Building robust and scalable solutions",
    },
    {
      icon: <FaBullhorn className="text-4xl text-indigo-600 mx-auto" />,
      title: "Launch",
      description: "Deploying and optimizing for success",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-2 underline decoration-indigo-600 decoration-2 italic underline-offset-8">
          Our Process
        </h2>
        <p className="text-gray-600 mb-10 text-lg font-bold mt-6 ">
          We follow a proven methodology to ensure every project is delivered on
          time, within budget, and exceeds expectations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl italic font-semibold  text-gray-800">
                {step.title}
              </h3>
              <p className="text-lg italic font-medium text-gray-600 mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
