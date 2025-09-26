import React from "react";
import team from "../assets/team.jpg"; // Ensure this path is correct
import Stats from "../Components/Stats";
import CoreValue from "../Components/CoreValue";

const AboutUs = () => {
  return (
    <>
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
              src={team}
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
    </>
  );
};

export default AboutUs;
