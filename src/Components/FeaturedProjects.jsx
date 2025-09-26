import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpg";
const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "An e-commerce platform with advanced filtering, payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: `${image1}`,
    featured: true,
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    description:
      "A comprehensive healthcare app for appointment booking, medical records, and telemedicine.",
    tags: ["React Native", "Firebase", "Push Notifications"],
    image: `${image2}`,
  },
  {
    title: "Corporate Website Redesign",
    category: "UI/UX Design",
    description:
      "Complete redesign of a corporate website with focus on user experience and conversion optimization.",
    tags: ["Figma", "Prototyping", "User Research"],
    image: `${image3}`,
    featured: true,
  },
  {
    title: "SaaS Dashboard",
    category: "Web Development",
    description:
      "Analytics dashboard for a SaaS platform with real-time data visualization and reporting.",
    tags: ["React", "Tailwind", "D3.js", "JWT"],
    image: `${image4}`,
  },
  {
    title: "Restaurant Booking System",
    category: "Full Stack",
    description:
      "Online restaurant management system with online booking, menu management, and POS integration.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: `${image4}`,
    featured: true,
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile Development",
    description:
      "Comprehensive fitness app with workout tracking, nutrition logging, and social features.",
    tags: ["React Native", "Redux", "Mobile Analytics"],
    image: `${image1}`,
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Full Stack",
];

const FeaturedProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-lg italic text-indigo-600 font-semibold uppercase">
            Our Work
          </p>
          <h2 className="text-4xl underline underline-offset-8 decoration-indigo-600 italic font-bold text-gray-900 mt-1">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg italic font-medium mt-3 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various
            industries and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 font-medium italic">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-300 text-gray-700 hover:bg-indigo-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg   hover:scale-105 transition-transform duration-300"
              >
                <div className="relative ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {project.featured && (
                    <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <FaStar className="text-yellow-400" /> Featured
                    </span>
                  )}
                </div>
                <div className="p-5 ">
                  <p className="text-sm text-indigo-600 font-medium">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
