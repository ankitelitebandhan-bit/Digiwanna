import React from "react";
import laptopImage from "../assets/laptop.jpg";
import Stats from "../Components/Stats";
import CoreValue from "../Components/CoreValue";
import heroImage from "../assets/hero-image.jpg";
import OurServices from "../Components/OurServices";
import ProcessSteps from "../Components/ProcessSteps";
import FeaturedProjects from "../Components/FeaturedProjects";
import ReadytoStart from "../Components/ReadytoStart";
// import PricingCard from "../Components/PricingSection";
import FeaturesSection from "../Components/FeaturesSection";
import ContactForm from "../Components/ContactForm";
import { Link, Links } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="w-full bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between italic">
        <div className="max-w-xl text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Transform Your <br /> Digital Presence
          </h1>
          <p className="text-lg extra-bold italic text-gray-700 mt-4">
            We craft exceptional digital experiences that drive growth, engage
            audiences, and elevate your brand in the digital landscape.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
            <Link to="/contact">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-b-gray-950 text-2xl transition">
                Start Your Project
              </button>
            </Link>

            <Link to="/OurWork">
              <button className="bg-transparent border border-gray-300 text-2xl hover:text-white hover:bg-black  text-gray-800 px-6 py-3 rounded-md hover:border-white transition delay-100">
                <div className="text-lg font-semibold"> View our Work </div>
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center  mt-16  text-gray-600 gap-6 text-2xl">
            <div className="text-center">
              <span className="text-2xl  font-semibold text-black">150+</span>
              <br />
              <div className="text-2xl text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <span className="text-2xl font-semibold text-black">50+</span>
              <br />
              <div className="text-2xl text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <span className="text-2xl font-semibold text-black">5+</span>
              <br />
              <div className="text-2xl text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full md:w-[48%] h-[400px]">
          <img
            src={laptopImage}
            alt="Laptop"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />

          {/* Top-right badge */}
          <div className="absolute top-4 right-4 bg-white text-sm font-medium text-gray-800 px-4 py-1 rounded-full shadow-sm">
            Digital Innovation <br />
            <span className="text-xs text-gray-500">Award Winning Agency</span>
          </div>

          {/* Bottom-left support label */}
          <div className="absolute bottom-4 left-4 bg-black text-white text-xs px-4 py-2 rounded-md shadow-sm">
            24/7 Support <br />
            <span className="text-[10px] text-gray-300">
              Always here for you
            </span>
          </div>
        </div>
      </section>

      {/* part2 */}

      <div className="px-6 md:px-12 lg:px-24 py-12 text-gray-800">
        <section className=" italic text-center max-w-4xl mx-auto">
          <p className="font-bold text-gray-800 text-2xl mb-2 underline underline-offset-8 decoration-2 decoration-blue-700">
            About Digiwanna
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-6">
            We Build Digital Experiences That Matter
          </h1>
          <p className="text-gray-600 font-medium text-2xl mb-10 mt-10 ">
            Founded with a vision to transform how businesses connect with their
            audiences, we combine creativity, technology, and strategy to
            deliver exceptional results.
          </p>
        </section>

        <section className="mt-16 flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-2xl italic md:text-2xl font-semibold mb-4">
              Crafting Digital Success Stories Since 2019
            </h2>
            <p className="text-gray-600 text-xl italic mb-6">
              We’re a team of passionate designers, developers, and strategists
              who believe in the power of great digital experiences. Our journey
              began with a simple mission: to help businesses thrive in the
              digital age.
              <br />
              <br />
              From startups to enterprise clients, we’ve helped organizations
              across industries build meaningful connections with their
              audiences through innovative web solutions, compelling designs,
              and data driven strategies.
            </p>
            <Stats />
          </div>
          <div className="flex-1">
            <img
              src={heroImage}
              alt="Team at work"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-4xl italic underline decoration-blue-500 underline-offset-8 font-semibold mb-16">
            Our Core Values
          </h2>
          <CoreValue />
        </section>
      </div>

      <OurServices />

      <ProcessSteps />
      <FeaturedProjects />
      <ReadytoStart />
      {/* <PricingCard /> */}
      <FeaturesSection />
      <ContactForm />
    </>
  );
};

export default HeroSection;
