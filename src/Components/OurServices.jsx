import React from "react";
import { SiTaichigraphics } from "react-icons/si";
import { SiBisecthosting } from "react-icons/si";
import { SiCivicrm } from "react-icons/si";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaChartBar,
  FaShoppingCart,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies and best practices.",
    keyFeatures: [
      "Responsive Design",
      "Performance Optimization",
      "SEO-Friendly",
      "Security Focused",
    ],
    icon: <FaLaptopCode size={50} color="#4A90E2" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    keyFeatures: [
      "iOS & Android",
      "Cross-Platform",
      "App Store Optimization",
      "Push Notifications",
    ],
    icon: <FaMobileAlt size={50} color="#50C878" />,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that combine aesthetics with functionality.",
    keyFeatures: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    icon: <FaPaintBrush size={50} color="#FF6347" />,
  },
  {
    title: "Analytics & Insights",
    description:
      "Turn your data into actionable insights with advanced analytics and reporting.",
    keyFeatures: [
      "Custom Dashboards",
      "Traffic Monitoring",
      "Real-Time Reporting",
      "Performance Tracking",
    ],
    icon: <FaChartBar size={50} color="#FFD700" />,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete e-commerce platforms that drive sales and enhance customer experience.",
    keyFeatures: [
      "Payment Integration",
      "Multi-Channel",
      "Analytics",
      "Scalable Solutions",
    ],
    icon: <FaShoppingCart size={50} color="#FF4500" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to increase your online visibility and growth.",
    keyFeatures: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
    icon: <FaBullhorn size={50} color="#4CAF50" />,
  },
  {
    title: "Graphic Design",
    description:
      "Creative design solutions that communicate your brand's message effectively.",
    keyFeatures: [
      "Brand Identity",
      "Print Design",
      "Digital Graphics",
      "Illustration",
    ],
    icon: <SiTaichigraphics size={50} color="#FF4500" />,
  },
  {
    title: "Domain | Hosting | SSL",
    description:
      "Comprehensive solutions for domain registration, web hosting, and SSL certification.",
    keyFeatures: [
      "Domain Registration",
      "Reliable Hosting",
      "SSL Certificates",
      "24/7 Support",
    ],
    icon: <SiBisecthosting size={50} color="#FFD700" />,
  },
  {
    title: "CRM Solutions",
    description:
      "Comprehensive CRM solutions to manage your customer relationships effectively.",
    keyFeatures: [
      "Contact Management",
      "Sales Automation",
      "Customer Support",
      "Analytics & Reporting",
    ],
    icon: <SiCivicrm size={50} color="#4A90E2" />,
  },
];

export default function OurServices() {
  return (
    <section className="py-16 bg-white p-10">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 italic underline decoration-2 decoration-blue-700 underline-offset-8">
          Our Services
        </h2>
        <p className="text-xl italic font-bold mt-10 text-gray-600">
          From concept to launch, we provide end-to-end digital services that
          help your business thrive in the digital landscape.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:p-4 md:p-6 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border-2 hover:border-blue-500 hover:scale-105 rounded-lg shadow-lg p-6 hover:shadow-2xl transition ease-in-out duration-300"
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h3 className="text-2xl italic  font-semibold text-gray-800 mb-4 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-lg italic text-center mb-4">
              {service.description}
            </p>
            <ul className="list-none text-gray-600 text-md  italic font-bold">
              {service.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center mb-2">
                  <span className="text-xs mr-2">•</span> {feature}
                </li>
              ))}
            </ul>
            <div className="text-center mt-4">
              <a
                href="#"
                className="text-blue-500 font-bold text-lg hover:underline  underline-offset-8"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
